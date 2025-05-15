// packages/proto/tests/integration/devnet.setup.ts
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import { getSigningKiichainClient } from '@kiichain/kiijs-proto';

export const TESTNET_CONFIG = {
  rpcEndpoint: 'https://rpc.dos.sentry.testnet.v3.kiivalidator.com/',
  chainId: 'oro_1336-1', 
  gasPrice: '0.025akii',
  defaultKey: process.env.TEST_KEY,
  defaultMnemonic: process.env.TEST_MNEMONIC
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

export async function setupTestClient(mnemonic = TESTNET_CONFIG.defaultMnemonic) : Promise<[SigningStargateClient, DirectSecp256k1HdWallet]>{
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "kii", // Kiichain prefix
  });
  
  const client = await getSigningKiichainClient({
    rpcEndpoint: TESTNET_CONFIG.rpcEndpoint, 
    signer: wallet,
  });
  
  return [client, wallet];
}