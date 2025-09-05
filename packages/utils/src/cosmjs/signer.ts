import { SigningStargateClient, type Account } from '@cosmjs/stargate';
import {
  type Coin,
  type EncodeObject,
  type OfflineDirectSigner,
} from '@cosmjs/proto-signing';

import { fromBase64 } from '@cosmjs/encoding';
import { makeAuthInfoBytes, makeSignDoc } from '@cosmjs/proto-signing';

import { Any } from 'cosmjs-types/google/protobuf/any';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { cosmos } from '@kiichain/kiijs-proto';
import { BaseAccount } from 'cosmjs-types/cosmos/auth/v1beta1/auth';

const { PubKey } = cosmos.evm.crypto.v1.ethsecp256k1;

// This function signs a transaction using the ethsecp256k1 signer
// The most important part is that it rewrites the PubKey to the ethsecp256k1 format
export async function signWithEthsecpSigner(
  client: SigningStargateClient,
  signer: OfflineDirectSigner,
  chainId: string,
  signerAddress: string,
  messages: EncodeObject[],
  memo: string,
  gasPricePerUnit: number,
  gasAdjustment: number
) {
  // Get the account data from the client
  const accountData = await client.getAccount(signerAddress);

  // If the data is null the account does not exist
  if (!accountData) {
    throw new Error(
      `Account with address ${signerAddress} does not exist on chain ${chainId}`
    );
  }

  // From the Signer, retrieve the account data
  const accountFromSigner = (await signer.getAccounts()).find(
    (account) => account.address === signerAddress
  );
  if (!accountFromSigner)
    throw new Error('Failed to retrieve account from signer');

  // Get the pubkey bytes from the account
  const pubkeyBytes = accountFromSigner.pubkey;
  if (!pubkeyBytes || pubkeyBytes.length === 0)
    throw new Error('Public key not available from signer');

  // This is the important part
  // It rewrites the PubKey to the ethsecp256k1 format
  // The typeUrl is set to the ethsecp256k1 PubKey type
  // and the value is set to the encoded PubKey with the pubkeyBytes
  // This is necessary for the transaction to be signed correctly
  const pubkey = Any.fromPartial({
    typeUrl: PubKey.typeUrl,
    value: PubKey.encode({
      key: pubkeyBytes,
    }).finish(),
  });

  // Create the TX body
  const txBodyEncodeObject = {
    typeUrl: '/cosmos.tx.v1beta1.TxBody',
    value: {
      messages: messages,
      memo: memo,
    },
  };

  // Encode the tx and make the auth info bytes
  const txBodyBytes = client.registry.encode(txBodyEncodeObject);

  // Estimate gas limits
  const simulatedGas = await client.simulate(signerAddress, messages, memo);
  const gasLimit = Math.ceil(simulatedGas * gasAdjustment);

  // Calculate the fee amount
  const feeAmount = Math.ceil(gasLimit * gasPricePerUnit).toString();
  const fee: Coin = {
    denom: 'akii',
    amount: feeAmount,
  };

  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey: pubkey, sequence: accountData!.sequence }],
    [fee],
    gasLimit,
    undefined,
    signerAddress
  );
  const signDoc = makeSignDoc(
    txBodyBytes,
    authInfoBytes,
    chainId,
    accountData!.accountNumber
  );

  // Sign the transaction using the signer
  const { signature, signed } = await signer.signDirect(signerAddress, signDoc);

  // returns txBytes for broadcast
  return TxRaw.encode({
    bodyBytes: signed.bodyBytes,
    authInfoBytes: signed.authInfoBytes,
    signatures: [fromBase64(signature.signature)],
  }).finish();
}

// ethsecpAccountParser is a function that parses the account from the Any type
// and handles the ethsecp256k1 PubKey type
export function ethsecpAccountParser(accountAny: Any): Account {
  // Check if the accountAny is of type BaseAccount or EthAccount
  if (
    accountAny.typeUrl === '/cosmos.auth.v1beta1.BaseAccount' ||
    accountAny.typeUrl === '/ethermint.types.v1.EthAccount' // handle EthAccount too
  ) {
    // Decode the BaseAccount from the Any type
    const account = BaseAccount.decode(accountAny.value);

    // Here we patch the public key parser
    if (
      account.pubKey?.typeUrl === '/cosmos.evm.crypto.v1.ethsecp256k1.PubKey'
    ) {
      // Decode the PubKey from the Any type
      account.pubKey.value = PubKey.decode(account.pubKey.value).key;
    }

    // Return the account as an Account type
    return account as unknown as Account;
  }

  // If the accountAny is not of type BaseAccount or EthAccount, throw an error
  throw new Error(`Unknown account type: ${accountAny.typeUrl}`);
}
