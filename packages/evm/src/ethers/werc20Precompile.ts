import { InterfaceAbi } from 'ethers';
import { WERC20_PRECOMPILE_ABI } from '../precompiles';

/**
 * The ABI for the werc20 precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_WERC20_PRECOMPILE_ABI = WERC20_PRECOMPILE_ABI as InterfaceAbi;

// export const getWERC20PrecompileEthersV6Contract = (runner: ContractRunner) => {
// 	return new Contract(WERC20 contract, WERC20_PRECOMPILE_ABI, runner);
// };
