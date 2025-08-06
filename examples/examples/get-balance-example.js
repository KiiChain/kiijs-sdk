import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

// Use RPC and Address from .env or default
const RPC_URL = process.env.RPC_URL || 'https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/';
const TEST_ADDRESS = process.env.TEST_ADDRESS || '0x87751B44263244715474d954698205fe55358A0A';

const provider = new ethers.JsonRpcProvider(RPC_URL);

async function main() {
  console.log('🔍 Checking balance...');
  console.log(`Using RPC: ${RPC_URL}`);
  console.log(`Address: ${TEST_ADDRESS}`);

  const balance = await provider.getBalance(TEST_ADDRESS);
  const formatted = ethers.utils.formatEther(balance);

  console.log(`💰 Balance: ${parseFloat(formatted).toFixed(4)} KII`);
}

main().catch((err) => {
  console.error('❌ Error fetching balance:', err);
  process.exit(1);
});
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

// Use RPC and Address from .env or default
const RPC_URL = process.env.RPC_URL || 'https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/';
const TEST_ADDRESS = process.env.TEST_ADDRESS || '0x87751B44263244715474d954698205fe55358A0A';

const provider = new ethers.JsonRpcProvider(RPC_URL);

async function main() {
  console.log('🔍 Checking balance...');
  console.log(`Using RPC: ${RPC_URL}`);
  console.log(`Address: ${TEST_ADDRESS}`);

  const balance = await provider.getBalance(TEST_ADDRESS);
  const formatted = ethers.utils.formatEther(balance);

  console.log(`💰 Balance: ${parseFloat(formatted).toFixed(4)} KII`);
}

main().catch((err) => {
  console.error('❌ Error fetching balance:', err);
  process.exit(1);
});

