import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { IBC_PRECOMPILE_ABI, IBC_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the ibc precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_IBC_PRECOMPILE_ABI = IBC_PRECOMPILE_ABI as InterfaceAbi;

export const getIBCPrecompileEthersV6Contract = (runner: ContractRunner) => {
  return new Contract(IBC_PRECOMPILE_ADDRESS, IBC_PRECOMPILE_ABI, runner);
};
