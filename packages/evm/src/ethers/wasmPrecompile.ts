import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { WASM_PRECOMPILE_ABI, WASM_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the wasm precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_WASM_PRECOMPILE_ABI = WASM_PRECOMPILE_ABI as InterfaceAbi;

export const getWASMPrecompileEthersV6Contract = (runner: ContractRunner) => {
  return new Contract(WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, runner);
};
