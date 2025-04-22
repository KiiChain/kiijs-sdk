import { Abi } from 'viem';
import { EVIDENCE_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Evidence precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_EVIDENCE_PRECOMPILE_ABI = EVIDENCE_PRECOMPILE_ABI as Abi;
