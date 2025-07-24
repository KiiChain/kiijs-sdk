import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import {
  SLASHING_PRECOMPILE_ABI,
  SLASHING_PRECOMPILE_ADDRESS,
} from '../precompiles';

/**
 * The ABI for the Slashing precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_SLASHING_PRECOMPILE_ABI =
  SLASHING_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Slashing precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getSlashingPrecompileEthersV6Contract } from '@kiichain/kiijs-evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const slashingPrecompileContract = getSlashingPrecompileEthersV6Contract(signer);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Slashing precompile contract.
 * @category Cosmos Interoperability
 */
export const getSlashingPrecompileEthersV6Contract = (
  runner: ContractRunner
) => {
  return new Contract(
    SLASHING_PRECOMPILE_ADDRESS,
    SLASHING_PRECOMPILE_ABI,
    runner
  );
};
