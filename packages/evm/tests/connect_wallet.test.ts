import { ethers } from 'ethers';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { getBankPrecompileEthersV6Contract } from '../src/ethers/bankPrecompile';
import { setupProviderAndWallet } from './utils';

vi.setConfig({ testTimeout: 60_000 }); // Total test timeout

// Runs against the live testnet, so it needs a funded account in TEST_PRIVATE_KEY.
describe.skipIf(!process.env.TEST_PRIVATE_KEY)('Connect Wallet Test', () => {
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
