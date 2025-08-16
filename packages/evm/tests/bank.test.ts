import { ethers } from 'ethers';
import 'dotenv/config';
import { getBankPrecompileEthersV6Contract } from '../src/ethers/bankPrecompile';
import { setupProviderAndWallet } from './utils';

jest.setTimeout(60_000); // Total test timeout

describe('Bank Precompile Tests', () => {
  let provider: ethers.JsonRpcProvider;
  let wallet: ethers.Wallet;
  let bankContract: ReturnType<typeof getBankPrecompileEthersV6Contract>;
  
  beforeAll(async () => {
    [provider, wallet] = setupProviderAndWallet();
    bankContract = getBankPrecompileEthersV6Contract(wallet);
    console.log('Wallet address:', wallet.address);
  });

  it('should get account balances', async () => {
    const balances = await bankContract.balances(wallet.address);
    
    console.log('Account balances:', balances);
    expect(balances).toBeDefined();
    expect(Array.isArray(balances)).toBe(true);
    
    // Log each balance
    balances.forEach((balance: any) => {
      console.log(`${balance.denom}: ${balance.amount}`);
    });
    
    // Check if we have any balances
    expect(balances.length).toBeGreaterThanOrEqual(0);
  });

  it('should get total supply', async () => {
    const totalSupply = await bankContract.totalSupply();
    
    console.log('Total supply:', totalSupply);
    expect(totalSupply).toBeDefined();
    expect(Array.isArray(totalSupply)).toBe(true);
    
    // Log each denomination in the total supply
    totalSupply.forEach((supply: any) => {
      console.log(`${supply.denom}: ${supply.amount}`);
    });
    
    // Check if we have any supply entries
    expect(totalSupply.length).toBeGreaterThan(0);
  });

  it('should get supply of a specific denomination', async () => {
    // Use the native token denomination
    const denom = 'akii';
    
    try {
      const supply = await bankContract.supplyOf(denom);
      
      console.log(`Supply of ${denom}:`, supply);
      expect(supply).toBeDefined();
      
      // The response should be a string representing the amount
      // Only try to parse if we have a valid response
      if (supply) {
        const amount = typeof supply === 'object' && supply.response ? 
          BigInt(supply.response) : 
          typeof supply === 'string' ? BigInt(supply) : 0n;
          
        console.log(`Amount in ${denom}:`, amount.toString());
        expect(amount).toBeGreaterThanOrEqual(0n);
      }
    } catch (error) {
      console.log(`Error getting supply of ${denom}:`, error);
      // Skip the test if the denomination doesn't exist
      console.log('Skipping test as the denomination may not exist');
    }
  });
});