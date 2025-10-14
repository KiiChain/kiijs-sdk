import {
  Bech32ToHex as UtilB2H,
  HexToBech32 as UtilH2B,
} from '@kiichain/kiijs-utils';
import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import {
  BECH32_PRECOMPILE_ABI,
  BECH32_PRECOMPILE_ADDRESS,
} from '../precompiles';

/**
 * The ABI for the Bech32 precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_BECH32_PRECOMPILE_ABI =
  BECH32_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Bech32 precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getBech32PrecompileEthersV6Contract } from '@kiichain/kiijs-evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const bech32PrecompileContract = getBech32PrecompileEthersV6Contract(signer);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Bech32 precompile contract.
 * @category Cosmos Interoperability
 */
export const getBech32PrecompileEthersV6Contract = (runner: ContractRunner) => {
  return new Contract(BECH32_PRECOMPILE_ADDRESS, BECH32_PRECOMPILE_ABI, runner);
};

/**
 * Function to turn a kii bech32 into an associated hex address
 * @category Cosmos Interoperability
 *
 * @dev This function uses the utility function `Bech32ToHex` from utils package to perform the conversion.
 * We kept both for backward compatibility.
 */
export function Bech32ToHex(bechAddress: string): string | null {
  return UtilB2H(bechAddress);
}

/**
 * Function to turn a hex address into a respective bech32 kii address
 * @category Cosmos Interoperability
 *
 * @dev This function uses the utility function `HexToBech32` from utils package to perform the conversion.
 * We kept both for backward compatibility.
 */
export function HexToBech32(wallet: string) {
  return UtilH2B(wallet);
}
