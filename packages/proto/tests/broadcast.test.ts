import { AccountData, StdFee } from '@cosmjs/amino';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';

import { cosmos } from '../src/';
import { setupTestClient } from './utils';

jest.setTimeout(30_000); // Total test timeout

describe('sign connection Test', () => {
  let client: SigningStargateClient;
  let wallet: DirectSecp256k1HdWallet;
  let account: AccountData;

  beforeAll(async () => {
    [client, wallet] = await setupTestClient();
    expect(client).toBeDefined();
    expect(wallet).toBeDefined();
    const accounts = await wallet.getAccounts();
    account = await accounts[0];
  });

  it('send money', async () => {
    const address = account.address;
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msg = send({
      amount: [
        {
          denom: 'akii',
          amount: '10000000000000000',
        },
      ],
      toAddress: address,
      fromAddress: address,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: 'akii',
          amount: '10000000000000000', // 0.1 kii
        },
      ],
      gas: '86364',
    };
    const response = await client.signAndBroadcast(address, [msg], fee);
    console.log('Response:', response);
  });
});
