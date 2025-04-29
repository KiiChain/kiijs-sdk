// packages/proto/tests/integration/devnet.setup.ts
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient} from '@cosmjs/stargate';

export const DEVNET_CONFIG = {
  rpcEndpoint: 'https://rpc.devnet.v3.kiivalidator.com/',
  chainId: 'kiichain3', 
  gasPrice: '0.025akii',
  defaultMnemonic: process.env.TEST_MNEMONIC || "your test mnemonic password here" 
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

export async function setupTestClient(mnemonic = DEVNET_CONFIG.defaultMnemonic) : Promise<[SigningStargateClient, DirectSecp256k1HdWallet]>{
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'kii' // KiiChain prefix
  });
  const client = await SigningStargateClient.connectWithSigner(
    DEVNET_CONFIG.rpcEndpoint,
    wallet
  );
  return [client, wallet]
}