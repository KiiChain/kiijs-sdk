
import { setupTestClient, TESTNET_CONFIG } from './utils';

describe('Bank module', () => {
  let client;
  let wallet;
  let address;

  beforeAll(async () => {
    [client, wallet] = await setupTestClient();
    const accounts = await wallet.getAccounts();
    address = accounts[0].address;
  });

  it('should fetch account balance', async () => {
    const balances = await client.getAllBalances(address);
    expect(Array.isArray(balances)).toBe(true);
    // Optional check for akii balance
    const akii = balances.find(b => b.denom === 'akii');
    expect(akii).toBeDefined();
    expect(Number(akii.amount)).toBeGreaterThanOrEqual(0);
  });
});
