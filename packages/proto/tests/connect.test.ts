import { setupTestClient } from './utils';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient} from '@cosmjs/stargate';

jest.setTimeout(30_000); // Total test timeout

describe('sign connection Test', () => {
  let client: SigningStargateClient; 
  let wallet: DirectSecp256k1HdWallet; 

  it('setup client and wallet failed', async () => {
    [client, wallet] = await setupTestClient();
    expect(client).toBeDefined();
    expect(wallet).toBeDefined();
  });
  
  // it('account should have balance', async () => {
  //   const [account] = await wallet.getAccounts();
  //   const balances = await client.
  //   console.log('Balances', balances);
  //   expect(Number(balances.toString())).toContain("z");
  // });

});