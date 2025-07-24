import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import {
  BECH32_PRECOMPILE_ABI,
  BECH32_PRECOMPILE_ADDRESS,
} from '../precompiles';
import { fromBech32 } from '@cosmjs/encoding';
import { isAddress } from 'ethers';
import { toBech32 } from '@cosmjs/encoding';

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
 */
export function Bech32ToHex(bechAddress: string): string | null {
  if (!bechAddress || typeof bechAddress !== 'string') return null;

  const { prefix, data } = fromBech32(bechAddress);
  if (prefix !== 'kii') return null;

  const hex = '0x' + Buffer.from(data).toString('hex');
  return hex;
}

/**
 * Function to turn a hex address into a respective bech32 kii address
 * @category Cosmos Interoperability
 */
export async function HexToBech32(wallet: string) {
  if (!wallet || !wallet.startsWith('0x') || !isAddress(wallet)) {
    return null;
  }

  const bytes = Buffer.from(wallet.slice(2), 'hex');
  if (bytes.length !== 20) {
    return null;
  }

  return toBech32('kii', bytes);
}
