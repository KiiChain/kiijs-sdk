import { Abi } from 'viem';
import { SLASHING_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Slashing precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_SLASHING_PRECOMPILE_ABI = SLASHING_PRECOMPILE_ABI as Abi;
