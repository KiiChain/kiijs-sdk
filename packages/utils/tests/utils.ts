import { ethers } from 'ethers';
import 'dotenv/config';

export const TESTNET_CONFIG = {
  rpcEndpoint: 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/',
  chainId: 'oro_1336-1',
  gasPrice: '0.025akii',
  defaultKey: process.env.TEST_PRIVATE_KEY,
};

export function setupProviderAndWallet(
  privateKey = TESTNET_CONFIG.defaultKey
): [ethers.JsonRpcProvider, ethers.Wallet] {
  const provider = new ethers.JsonRpcProvider(TESTNET_CONFIG.rpcEndpoint);

  if (!privateKey) {
    throw new Error('Missing TEST_PRIVATE_KEY in .env');
  }

  const wallet = new ethers.Wallet(privateKey, provider);
  return [provider, wallet];
}
