// Import required packages
const { ethers } = require('ethers');
const { getStakingPrecompileEthersV6Contract } = require('@kiichain/kiijs-evm');

// Configuration
const RPC_URL = 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/';

// IMPORTANT: This is a dummy private key for example purposes only
// DO NOT use in production environment
// Replace with your own private key for real testing
const PRIVATE_KEY =
  '0x0000000000000000000000000000000000000000000000000000000000000001';
const CHAIN_ID = 1336; // EVM Chain ID for KiiChain testnet

async function main() {
  console.log('--- Staking and Delegation Example ---');

  try {
    console.log(`Connecting to ${RPC_URL}...`);
    const provider = new ethers.JsonRpcProvider(RPC_URL);

    console.log('Creating wallet from private key...');
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const myAddress = wallet.address;
    console.log(`Wallet address: ${myAddress}`);

    const balance = await provider.getBalance(myAddress);
    console.log('Account balance:', ethers.formatEther(balance), 'KII');

    const stakingContract = getStakingPrecompileEthersV6Contract(wallet);

    const validatorAddress =
      'kiivaloper1jcl5k2vsyqy2qr3e24a2lq8z5mdtq65s22vj96';
    const amountToStake = ethers.parseEther('0.01'); // 0.01 KII

    console.log('\nGetting current delegations...');
    try {
      const delegations = await stakingContract.getDelegations(myAddress);
      console.log(
        'Current delegations:',
        delegations.map((d) => ({
          validatorAddress: d.validatorAddress,
          amount: ethers.formatEther(d.amount),
        }))
      );
    } catch (error) {
      console.error('Error getting delegations:', error.message);
    }

    console.log(
      `\nDelegating ${ethers.formatEther(
        amountToStake
      )} KII to validator ${validatorAddress}...`
    );
    try {
      // Example of creating transaction data without sending
      const data = stakingContract.interface.encodeFunctionData('delegate', [
        validatorAddress,
        amountToStake,
      ]);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const tx = {
        to: stakingContract.target,
        data: data,
        chainId: CHAIN_ID,
      };

      console.log('Transaction data created successfully!');
      console.log('Transaction data:', data);
    } catch (error) {
      console.error('Error delegating tokens:', error.message);
    }

    console.log(
      `\nUndelegating ${ethers.formatEther(
        amountToStake
      )} KII from validator ${validatorAddress}...`
    );
    try {
      const data = stakingContract.interface.encodeFunctionData('undelegate', [
        validatorAddress,
        amountToStake,
      ]);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const tx = {
        to: stakingContract.target,
        data: data,
        chainId: CHAIN_ID,
      };

      console.log('Transaction data created successfully!');
      console.log('Transaction data:', data);
    } catch (error) {
      console.error('Error undelegating tokens:', error.message);
    }

    const newValidatorAddress =
      'kiivaloper2jcl5k2vsyqy2qr3e24a2lq8z5mdtq65s22vj96';
    console.log(
      `\nRedelegating ${ethers.formatEther(
        amountToStake
      )} KII from validator ${validatorAddress} to ${newValidatorAddress}...`
    );
    try {
      const data = stakingContract.interface.encodeFunctionData('redelegate', [
        validatorAddress,
        newValidatorAddress,
        amountToStake,
      ]);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const tx = {
        to: stakingContract.target,
        data: data,
        chainId: CHAIN_ID,
      };

      console.log('Transaction data created successfully!');
      console.log('Transaction data:', data);
    } catch (error) {
      console.error('Error redelegating tokens:', error.message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
