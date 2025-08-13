// Import required packages
const { ethers } = require('ethers');
const { getBankPrecompileEthersV6Contract } = require('@kiichain/kiijs-evm');

// Configuration
const RPC_URL = 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/';

// IMPORTANT: This is a dummy private key for example purposes only
// DO NOT use in production environment
// Replace with your own private key for real testing
const PRIVATE_KEY =
  '0x0000000000000000000000000000000000000000000000000000000000000001';
const CHAIN_ID = 1336; // EVM Chain ID for KiiChain testnet

// ERC20 token ABI (minimal ABI for transfer function)
const ERC20_ABI = [
  // Transfer function
  {
    constant: false,
    inputs: [
      {
        name: '_to',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  // Balance function
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

async function main() {
  console.log('--- Bank Transfer Example ---');

  try {
    // Connect to the KiiChain network
    console.log(`Connecting to ${RPC_URL}...`);
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    // Get wallet address and balance
    const address = await wallet.getAddress();
    console.log(`Wallet address: ${address}`);

    // Get balance using ethers
    const balance = await provider.getBalance(address);
    console.log(`Native token balance: ${ethers.formatEther(balance)} KII`);

    // Get balances using Bank Precompile
    console.log('\n--- Using Bank Precompile ---');
    const bankContract = getBankPrecompileEthersV6Contract(wallet);

    // Get all balances for the address
    console.log('Getting balances using Bank Precompile...');
    try {
      const balances = await bankContract.balances(address);
      console.log(
        'Balances:',
        balances.map((b) => ({
          contractAddress: b.contractAddress,
          amount: ethers.formatUnits(b.amount, 18),
        }))
      );
    } catch (error) {
      console.error(
        'Error getting balances from Bank Precompile:',
        error.message
      );
    }

    // Get total supply of all tokens
    console.log('\nGetting total supply of all tokens...');
    try {
      const totalSupply = await bankContract.totalSupply();
      console.log(
        'Total Supply:',
        totalSupply.map((s) => ({
          contractAddress: s.contractAddress,
          amount: ethers.formatUnits(s.amount, 18),
        }))
      );
    } catch (error) {
      console.error(
        'Error getting total supply from Bank Precompile:',
        error.message
      );
    }

    // Get supply of a specific token (using a dummy token address for example)
    const sampleTokenAddress = '0x0000000000000000000000000000000000000000'; // Replace with actual token address
    console.log(
      `\nGetting supply of token at address ${sampleTokenAddress}...`
    );
    try {
      const supply = await bankContract.supplyOf(sampleTokenAddress);
      console.log('Token Supply:', ethers.formatUnits(supply, 18));
    } catch (error) {
      console.error(
        'Error getting token supply from Bank Precompile:',
        error.message
      );
    }

    // Example 1: Transfer native tokens (KII)
    console.log('\n--- Example 1: Transfer Native Tokens ---');
    // IMPORTANT: Replace these dummy values with actual addresses for real testing
    // NOTE: When using the dummy private key, you will get "insufficient balance for transfer" error
    // This is expected behavior since the dummy account has no funds
    const recipientAddress = '0x0000000000000000000000000000000000000000'; // Replace with actual recipient address
    const amountToSend = ethers.parseEther('0.01'); // 0.01 KII

    console.log(
      `Sending ${ethers.formatEther(amountToSend)} KII to ${recipientAddress}...`
    );

    // Create and send the transaction
    const tx = await wallet.sendTransaction({
      to: recipientAddress,
      value: amountToSend,
      chainId: CHAIN_ID,
    });

    console.log(`Transaction hash: ${tx.hash}`);
    console.log('Waiting for transaction confirmation...');

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);

    // Example 2: Transfer ERC20 tokens
    console.log('\n--- Example 2: Transfer ERC20 Tokens ---');
    // IMPORTANT: Replace these dummy values with actual addresses for real testing
    // NOTE: When using the dummy private key and token address, you will get errors
    // This is expected behavior since the dummy account has no tokens and the token contract doesn't exist
    const tokenAddress = '0x0000000000000000000000000000000000000000'; // Replace with actual token contract address
    const tokenRecipient = '0x0000000000000000000000000000000000000000'; // Replace with actual recipient address
    const tokenAmount = ethers.parseUnits('1.0', 18); // Assuming 18 decimals, adjust as needed

    // Create contract instance
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, wallet);

    // Check token balance before transfer
    const tokenBalance = await tokenContract.balanceOf(address);
    console.log(
      `Token balance before transfer: ${ethers.formatUnits(tokenBalance, 18)}`
    );

    // Transfer tokens
    console.log(
      `Sending ${ethers.formatUnits(tokenAmount, 18)} tokens to ${tokenRecipient}...`
    );
    const tokenTx = await tokenContract.transfer(tokenRecipient, tokenAmount, {
      chainId: CHAIN_ID,
    });

    console.log(`Token transaction hash: ${tokenTx.hash}`);
    console.log('Waiting for token transaction confirmation...');

    // Wait for the transaction to be mined
    const tokenReceipt = await tokenTx.wait();
    console.log(
      `Token transaction confirmed in block ${tokenReceipt.blockNumber}`
    );

    // Check token balance after transfer
    const newTokenBalance = await tokenContract.balanceOf(address);
    console.log(
      `Token balance after transfer: ${ethers.formatUnits(newTokenBalance, 18)}`
    );

    console.log('\n--- Example Complete ---');
  } catch (error) {
    console.error('An error occurred:');
    if (error.reason) {
      console.error(`Reason: ${error.reason}`);
    } else if (error.info && error.info.error) {
      console.error(`Error: ${error.info.error.message}`);
    } else {
      console.error(error);
    }
    console.log(
      '\nNOTE: Errors are expected when using dummy values. To run this example successfully, replace the dummy values with real ones.'
    );
  }
}

main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
