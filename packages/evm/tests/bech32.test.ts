import { ethers } from 'ethers';
import 'dotenv/config';
import { HexToBech32, Bech32ToHex } from '../src/ethers/bech32Precompile';
import { setupProviderAndWallet } from './utils';

jest.setTimeout(60_000); // Total test timeout

describe('Bech32 Utility Tests', () => {
  let provider: ethers.JsonRpcProvider;
  let wallet: ethers.Wallet;
  
  beforeAll(async () => {
    [provider, wallet] = setupProviderAndWallet();
    console.log('Wallet address:', wallet.address);
  });

  it('should convert hex address to bech32 using utility function', async () => {
    const hexAddress = wallet.address;
    const bech32Address = await HexToBech32(hexAddress);
    
    console.log('Hex address:', hexAddress);
    console.log('Bech32 address:', bech32Address);
    
    expect(bech32Address).not.toBeNull();
    expect(bech32Address).toMatch(/^kii/);
  });

  it('should convert bech32 address to hex using utility function', async () => {
    // First convert hex to bech32
    const originalHexAddress = wallet.address.toLowerCase();
    const bech32Address = await HexToBech32(originalHexAddress);
    expect(bech32Address).not.toBeNull();
    
    // Then convert back to hex
    const hexResult = Bech32ToHex(bech32Address!);
    expect(hexResult).not.toBeNull();
    
    const convertedHexAddress = hexResult!.toLowerCase();
    
    console.log('Original hex address:', originalHexAddress);
    console.log('Bech32 address:', bech32Address);
    console.log('Converted hex address:', convertedHexAddress);
    
    // The addresses should match (ignoring case)
    expect(convertedHexAddress).toBe(originalHexAddress);
  });
});