import { ethers } from 'ethers';
import { getIBCPrecompileEthersV6Contract } from '@kiichain/kiijs-evm';; // Adjust import path as needed

// Configuration
const RPC_ENDPOINT = 'https://json-rpc.plata-404.kiivalidator.com/';
const PRIVATE_KEY = '0xKeyHere'; // Never commit real private keys!
const RECEIVER_ADDRESS = '0x6647af9d3D958f0cE9D16913949A3A90B8A40a6a'; // Destination address on the receiving chain
const RECEIVER_KII_ADDRESS = 'kii1uqss925d670mv7q0wg2scx9vqyjn4uwd5r704j'
const PORT = 'transfer'; // Typically 'transfer' for IBC
const CHANNEL = 'channel-0'; // Replace with your channel number
const DENOM = 'akii'; // The denomination to transfer
const AMOUNT = '1000000000000000000'; // 1 akii (18 decimals)
const MEMO = 'Test transfer via IBC precompile'; // Optional memo

async function executeIbcTransfer() {
  try {
    // Setup provider and wallet
    const provider = new ethers.JsonRpcProvider(RPC_ENDPOINT);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    
    // Get the precompile contract
    const ibcPrecompile = getIBCPrecompileEthersV6Contract(wallet);
    
    // // Option 1: Transfer with full timeout control
    // const tx1 = await ibcPrecompile.transfer(
    //   RECEIVER_ADDRESS,
    //   PORT,
    //   CHANNEL,
    //   DENOM,
    //   AMOUNT,
    //   0,    // revisionNumber
    //   1000, // revisionHeight (block height timeout)
    //   0,    // timeoutTimestamp (0 for no timestamp timeout)
    //   MEMO
    // );
    
    // console.log('Transfer tx hash (full timeout):', tx1.hash);
    // const receipt1 = await tx1.wait();
    // console.log('Transfer completed (full timeout):', receipt1.status === 1);
    
    // Option 2: Simplified transfer with default timeout
    const tx2 = await ibcPrecompile.transferWithDefaultTimeout(
      RECEIVER_ADDRESS,
      PORT,
      CHANNEL,
      DENOM,
      AMOUNT,
      MEMO
    );
    
    console.log('Transfer tx hash (default timeout):', tx2.hash);
    const receipt2 = await tx2.wait();
    console.log('Transfer completed (default timeout):', receipt2.status === 1);
    
  } catch (error) {
    console.error('Error executing IBC transfer:', error);
  }
}

describe('Execute IBC transfer Test', () => {
  it('should execute transfer', async () => {
    executeIbcTransfer();
  })
})