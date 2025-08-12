// Import required packages
const { ethers } = require('ethers');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient, GasPrice } = require('@cosmjs/stargate');
const { ethsecpAccountParser, signWithEthsecpSigner } = require('@kiichain/kiijs-utils');

// Configuration
const JSON_RPC_URL = 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/';
const COSMOS_RPC_URL = 'https://rpc.dos.sentry.testnet.v3.kiivalidator.com/';
const COSMOS_CHAIN_ID = 'oro_1336-1';
const GAS_PRICE = '0.025akii';

// IMPORTANT: This is a dummy private key for example purposes only
// DO NOT use in production environment
// Replace with your own private key for real testing
const PRIVATE_KEY = '0x0000000000000000000000000000000000000000000000000000000000000001';
const CHAIN_ID = 1336; // EVM Chain ID for KiiChain testnet

// IMPORTANT: This is a dummy mnemonic for example purposes only
// DO NOT use in production environment
// Replace with your own mnemonic for real testing
const MNEMONIC = 'test test test test test test test test test test test junk';

async function main() {
  console.log('\n--- ETH Secp Signer Example ---');
  
  // Run EVM example
  await evmExample();
  
  // Run Cosmos example
  await cosmosExample();
}

async function evmExample() {
  console.log('\n--- Run EVM Example ---');
  
  try {
    // Connect to the KiiChain network
    console.log(`Connecting to ${JSON_RPC_URL}...`);
    const provider = new ethers.JsonRpcProvider(JSON_RPC_URL);
    
    // Get network information
    const network = await provider.getNetwork();
    console.log(`Connected to network: ${network.name}`);
    console.log(`Chain ID: ${network.chainId}`);
    
    // Create a wallet from private key
    console.log('Creating wallet from private key...');
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const myAddress = wallet.address;
    console.log(`Wallet address: ${myAddress}`);
    
    // Check balance
    const balance = await provider.getBalance(myAddress);
    console.log('Account balance:', ethers.formatEther(balance), 'ETH');
    
    // Get current block number
    const blockNumber = await provider.getBlockNumber();
    console.log('Current block number:', blockNumber);
    
    // Get gas price
    const gasPrice = await provider.getFeeData();
    console.log('Gas price:', ethers.formatUnits(gasPrice.gasPrice || 0, 'gwei'), 'gwei');
    
    // Example recipient address (replace with a valid address for testing)
    const recipientAddress = '0x0000000000000000000000000000000000000000';
    
    // Create a transaction
    const tx = {
      to: recipientAddress,
      value: ethers.parseEther('0.0001'),
      chainId: CHAIN_ID,
    };
    
    console.log(`Preparing to send ${ethers.formatEther(tx.value)} ETH to ${recipientAddress}`);
    
    // Sign the transaction
    console.log('Signing transaction...');
    const signedTx = await wallet.signTransaction(tx);
    
    console.log('Transaction signed successfully!');
    console.log('Signed transaction:', signedTx);
     
     // Note: We're not sending the transaction to avoid actual token transfer
     // To send it, you would use: const txResponse = await wallet.sendTransaction(tx);
     // console.log('Transaction hash:', txResponse.hash);
   } catch (error) {
     console.error('Error in EVM example:', error.message);
  }
}

async function cosmosExample() {
  console.log('\n--- Run Cosmos Example ---');
  
  try {
    // Create a wallet from mnemonic
    console.log('Creating wallet from mnemonic...');
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC, {
      prefix: 'kii', // KiiChain address prefix
    });
    
    // Get the account from the wallet
    const [account] = await wallet.getAccounts();
    const myAddress = account.address;
    console.log(`Wallet address: ${myAddress}`);
    
    // Connect to the KiiChain network with the custom account parser
    console.log(`Connecting to ${COSMOS_RPC_URL}...`);
    const client = await SigningStargateClient.connectWithSigner(
      COSMOS_RPC_URL,
      wallet,
      {
        accountParser: ethsecpAccountParser,
        gasPrice: GasPrice.fromString(GAS_PRICE),
      }
    );
    
    // Get account balance
    const balance = await client.getBalance(myAddress, 'akii');
    console.log('Account balance:', balance.amount, balance.denom);
    
    // Example recipient address (replace with a valid address for testing)
    const recipientAddress = myAddress; // Sending to self for this example
    
    // Create a message to send tokens
    console.log('Creating transaction message...');
    // Create a MsgSend message manually since we don't have the proto package
    const sendMsg = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        amount: [
          {
            denom: 'akii',
            amount: '1000', // Small amount for testing
          },
        ],
        toAddress: recipientAddress,
        fromAddress: myAddress,
      },
    };
    
    // Sign the transaction using ethsecp256k1 signer
    console.log('Signing transaction with ethsecp256k1 signer...');
    const txRaw = await signWithEthsecpSigner(
      client,
      wallet,
      COSMOS_CHAIN_ID,
      myAddress,
      [sendMsg],
      'Example transaction with ethsecp256k1 signer',
      0.025, // Gas price per unit
      1.5    // Gas adjustment
    );
    
    console.log('Transaction signed successfully!');
    
    // Note: We're not broadcasting the transaction to avoid actual token transfer
    // To broadcast it, you would use: const txResponse = await client.broadcastTx(txRaw);
    // console.log('Transaction hash:', txResponse.transactionHash);
    
  } catch (error) {
    console.error('Error in Cosmos example:', error.message);
  }
}

// Run the example
main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});