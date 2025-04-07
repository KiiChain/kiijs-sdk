import { withRetry, setupTestClient } from './utils';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient} from '@cosmjs/stargate';

jest.setTimeout(30_000); // Total test timeout

describe('Sign connection Test', () => {
  let client: SigningStargateClient; 
  let wallet: DirectSecp256k1HdWallet; 

  it('Setup client and wallet failed', async () => {
    [client, wallet] = await withRetry(() => setupTestClient());
    expect(client).toBeDefined();
    expect(wallet).toBeDefined();
  });
  
  it('Account should have balance', async () => {
    const [account] = await wallet.getAccounts();
    const coin = await client.getBalance(account.address, 'ukii')
    expect(Number(coin.amount)).toBeGreaterThan(0);
  });

});