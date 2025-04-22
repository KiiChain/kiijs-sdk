import { InterfaceAbi } from 'ethers';
import { ERC20_PRECOMPILE_ABI } from '../precompiles';

/**
 * The ABI for the erc20 precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_ERC20_PRECOMPILE_ABI = ERC20_PRECOMPILE_ABI as InterfaceAbi;

// export const getERC20PrecompileEthersV6Contract = (runner: ContractRunner) => {
// 	return new Contract(ERC20 contract, ERC20_PRECOMPILE_ABI, runner);
// };
