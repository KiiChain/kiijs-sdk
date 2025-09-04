/**
 * examples/ethsecp-signer-example.ts
 *
 * Skeleton showing how to sign with the ethsecp256k1 flow using kiijs-utils.
 * Based on official docs. This file is meant as a readable example.
 *
 * To RUN outside this monorepo:
 *   npm init -y
 *   npm i -D typescript ts-node
 *   npm i @kiichain/kiijs-utils @kiichain/kiijs-proto @cosmjs/stargate @cosmjs/proto-signing @cosmjs/amino
 *   npx ts-node ethsecp-signer-example.ts
 */

import { SigningStargateClient } from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { coins } from '@cosmjs/amino';
import { ethsecpAccountParser, signWithEthsecpSigner } from '@kiichain/kiijs-utils';

// Fill with actual chain data when running in a real app:
const RPC_ENDPOINT = 'https://<your-cosmos-rpc-endpoint>'; // e.g. a Kiichain Cosmos RPC
const CHAIN_ID = '<your-chain-id>'; // e.g. "kiichain-testnet-1"

// DO NOT commit real mnemonics; this is a placeholder:
const DEMO_MNEMONIC = 'replace this with your twelve or twenty-four words';
const SENDER_ADDRESS = 'kii1...'; // your bech32 address

async function main() {
  // 1) Create an offline signer (demo wallet from mnemonic)
  const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(DEMO_MNEMONIC, {
    prefix: 'kii',
  });

  // 2) Connect a SigningStargateClient that uses the ethsecp account parser
  const client = await SigningStargateClient.connectWithSigner(RPC_ENDPOINT, offlineSigner, {
    accountParser: ethsecpAccountParser,
  });

  // 3) Build a simple bank send message (example)
  const recipient = 'kii1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const amount = coins('1000', 'ukii'); // 1000 micro-KII as example

  const msgSend = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: SENDER_ADDRESS,
      toAddress: recipient,
      amount,
    },
  };

  // 4) Sign using the ETHSECP signer helper (gas settings are placeholders)
  const memo = 'Demo transaction';
  const gasPrice = 0.02; // example only
  const gasAdjustment = 1.5;

  const txRaw = await signWithEthsecpSigner(
    client,
    offlineSigner,
    CHAIN_ID,
    SENDER_ADDRESS,
    [msgSend],
    memo,
    gasPrice,
    gasAdjustment
  );

  // 5) Broadcast
  const receipt = await client.broadcastTx(txRaw);
  console.log('Broadcast result:', receipt);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
