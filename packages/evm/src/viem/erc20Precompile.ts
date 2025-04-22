import { Abi } from 'viem';
import { ERC20_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the ERC20 precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_ERC20_PRECOMPILE_ABI = ERC20_PRECOMPILE_ABI as Abi;
