import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { ICS20_PRECOMPILE_ABI, ICS20_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Ics20 precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_ICS20_PRECOMPILE_ABI = ICS20_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Ics20 precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getIcs20PrecompileEthersV6Contract } from '@kiichain/kiijs-evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const ics20PrecompileContract = getIcs20PrecompileEthersV6Contract(signer);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Ics20 precompile contract.
 * @category Cosmos Interoperability
 */
export const getIcs20PrecompileEthersV6Contract = (runner: ContractRunner) => {
  return new Contract(ICS20_PRECOMPILE_ADDRESS, ICS20_PRECOMPILE_ABI, runner);
};
