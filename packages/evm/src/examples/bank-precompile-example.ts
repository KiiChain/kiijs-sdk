import { getBankPrecompileEthersV6Contract } from '../ethers/bankPrecompile';  // Import function to get the Bank precompile contract
import { ethers } from 'ethers';  // Import ethers.js library

async function run() {
  try {
    // Create a provider to communicate with Ethereum (using MetaMask or another provider)
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();  // Get the signer (active account)

    // Get the accounts connected to the provider (e.g., MetaMask)
    const accounts = await provider.send('eth_requestAccounts', []);
    
    // Get the Bank precompile contract
    const bankPrecompileContract = getBankPrecompileEthersV6Contract(signer);
    
    // Fetch the balance for the first account with the 'akii' token
    const balance = await bankPrecompileContract.balance(accounts[0], 'akii');
    console.log('Balance:', balance);  // Log the balance retrieved
  } catch (error) {
    console.error('Failed to fetch balance:', error);  // Handle any errors if they occur
  }
}

run();
