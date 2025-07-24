import { ethers } from 'ethers';
import 'dotenv/config';
import { getBankPrecompileEthersV6Contract } from '../src/ethers/bankPrecompile';
import { setupProviderAndWallet } from './utils';

jest.setTimeout(60_000); // Total test timeout

describe('Connect Wallet Test', () => {
  let provider: ethers.JsonRpcProvider;
  let wallet: ethers.Wallet;

  beforeAll(async () => {
    [provider, wallet] = setupProviderAndWallet();
    console.log(provider);
  });

  it('unexpected address', async () => {
    expect(wallet.address).toEqual(process.env.TEST_HEX_ADDRESS);
  });

  it('should have a supply', async () => {
    const contract = getBankPrecompileEthersV6Contract(wallet);

    const balances = await contract.totalSupply();
    console.log('Balances:', balances);
  });

  it('should send test transaction', async () => {
    const tx = await wallet.sendTransaction({
      to: wallet.address, // Send to self
      value: ethers.parseEther('0.001'),
      gasLimit: 100000, // Explicit gas limit
    });
    console.log('Tx hash:', tx.hash);
    expect(tx.hash).toMatch(/^0x/);
  });
});
