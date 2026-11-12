import { beforeAll, describe, expect, it, vi } from 'vitest';
import { StargateClient } from '@cosmjs/stargate';

import { TESTNET_CONFIG as TESTNET_CONFIG, withRetry } from './utils';

vi.setConfig({ testTimeout: 30_000 }); // Total test timeout

// Runs against the live testnet, so it needs a funded account in TEST_MNEMONIC.
describe.skipIf(!process.env.TEST_MNEMONIC)('Chain Info Tests', () => {
  let client: StargateClient;

  beforeAll(async () => {
    if (!process.env.TEST_MNEMONIC) {
      throw new Error('Missing TEST_MNEMONIC in .env');
    }
    client = await withRetry(() =>
      StargateClient.connect(TESTNET_CONFIG.rpcEndpoint)
    );
  });

  it('should match expected chain ID', async () => {
    const chainId = await client.getChainId();
    expect(chainId).toBe(TESTNET_CONFIG.chainId);
    console.log('Chain ID:', chainId);
  });

  it('should fetch recent blocks', async () => {
    const height = await client.getHeight();
    expect(height).toBeGreaterThan(0);

    const block = await client.getBlock(height);
    expect(block).toBeDefined();
    expect(block.id).toBeDefined();

    console.log('Current Height:', height);
  });
});
