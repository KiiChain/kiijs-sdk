import { Abi } from 'viem';
import { BECH32_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Bech32 precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_BECH32_PRECOMPILE_ABI = BECH32_PRECOMPILE_ABI as Abi;
