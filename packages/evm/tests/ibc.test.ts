import { ethers } from 'ethers';
import { getIBCPrecompileEthersV6Contract } from '../src/ethers/ibcPrecompile';
import 'dotenv/config'

jest.setTimeout(60_000); // Total test timeout

// Configuration
const RPC_ENDPOINT = 'https://json-rpc.plata-404.kiivalidator.com/'; // devnet
const RECEIVER_ADDRESS = '0x6647af9d3D958f0cE9D16913949A3A90B8A40a6a'; // Destination address on the receiving chain
const RECEIVER_KII_ADDRESS = 'kii1ver6l8fajk8se6w3dyfefx36jzu2gzn2qmu3t9'
const PORT = 'transfer'; // Typically 'transfer' for IBC
const CHANNEL = 'channel-0'; // Replace with your channel number
const DENOM = 'akii'; // The denomination to transfer
const AMOUNT = '100000000000000000'; // 0.1 kii (17 decimals)
const MEMO = 'Test transfer via IBC precompile'; // Optional memo

describe('Execute IBC transfer Test', () => {
  it('should execute transfer', async () => {
    try {
      console.log("Doing transfer:");
      // Setup provider and wallet
      const provider = new ethers.JsonRpcProvider(RPC_ENDPOINT);

      const privateKey = process.env.TEST_PRIVATE_KEY
      if (!privateKey) {
        throw new Error("Missing TEST_PRIVATE_KEY in .env");
      }    

      const wallet = new ethers.Wallet(privateKey, provider);
      console.log('Wallet address:', wallet.address);
      console.log('Wallet balance:', await provider.getBalance(wallet.address));
    
      // Get the precompile contract
      const ibcPrecompile = getIBCPrecompileEthersV6Contract(wallet);
      
      // // Option 1: Transfer with full timeout control
      // const tx1 = await ibcPrecompile.transfer(
      //   RECEIVER_KII_ADDRESS,
      //   PORT,
      //   CHANNEL,
      //   DENOM,
      //   AMOUNT,
      //   1,    // revisionNumber
      //   21325729,
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
      
      console.log('Transfer tx hash:', tx2.hash);
      const receipt2 = await tx2.wait();
      console.log('Transfer completed:', receipt2.status === 1);
      } catch (error) {
      console.error('Error executing IBC transfer:', error);
    }
  })
})