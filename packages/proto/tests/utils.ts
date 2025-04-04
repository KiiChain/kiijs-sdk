// packages/proto/tests/integration/devnet.setup.ts
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';


export const DEVNET_CONFIG = {
  rpcEndpoint: 'https://rpc.devnet.v3.kiivalidator.com/',
  chainId: 'kiichain3', 
  gasPrice: '0.025ukii' 
};

// Retry wrapper for flaky RPC connections
export async function withRetry<T>(fn: () => Promise<T>, retries = 5): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 4000));
      console.log(`Retry ${i + 1}/${retries}`);
    }
  }
  throw new Error('Unreachable');
}

export async function setupTestClient(mnemonic: string) {
  return await SigningStargateClient.connectWithSigner(
    DEVNET_CONFIG.rpcEndpoint,
    await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: 'kii'
    })
  );
}