// packages/proto/tests/integration/chain-info.test.ts
import { StargateClient } from '@cosmjs/stargate';
import { DEVNET_CONFIG, withRetry } from './utils';

jest.setTimeout(30_000); // Total test timeout

describe('Chain Info Tests', () => {
  let client: StargateClient;

  beforeAll(async () => {
    if (!process.env.TEST_MNEMONIC) {
      throw new Error("Missing TEST_MNEMONIC in .env");
    }
    client = await withRetry(() => 
      StargateClient.connect(DEVNET_CONFIG.rpcEndpoint)
    );
  });

  it('should match expected chain ID', async () => {
    const chainId = await client.getChainId();
    expect(chainId).toBe(DEVNET_CONFIG.chainId);
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