import {
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';
import { IBC_PRECOMPILE_ABI, IBC_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__
 */
export const useWriteIbcPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: IBC_PRECOMPILE_ABI,
  address: IBC_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__ and `functionName` set to `"transfer"`
 */
export const useWriteIbcPrecompileTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: IBC_PRECOMPILE_ABI,
    address: IBC_PRECOMPILE_ADDRESS,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__ and `functionName` set to `"transferWithDefaultTimeout"`
 */
export const useWriteIbcPrecompileTransferWithDefaultTimeout =
  /*#__PURE__*/ createUseWriteContract({
    abi: IBC_PRECOMPILE_ABI,
    address: IBC_PRECOMPILE_ADDRESS,
    functionName: 'transferWithDefaultTimeout',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__
 */
export const useSimulateIbcPrecompile = /*#__PURE__*/ createUseSimulateContract(
  { abi: IBC_PRECOMPILE_ABI, address: IBC_PRECOMPILE_ADDRESS }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIbcPrecompileTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: IBC_PRECOMPILE_ABI,
    address: IBC_PRECOMPILE_ADDRESS,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__ and `functionName` set to `"transferWithDefaultTimeout"`
 */
export const useSimulateIbcPrecompileTransferWithDefaultTimeout =
  /*#__PURE__*/ createUseSimulateContract({
    abi: IBC_PRECOMPILE_ABI,
    address: IBC_PRECOMPILE_ADDRESS,
    functionName: 'transferWithDefaultTimeout',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__
 */
export const useWatchIbcPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: IBC_PRECOMPILE_ABI,
    address: IBC_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link IBC_PRECOMPILE_ABI}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIbcPrecompileTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: IBC_PRECOMPILE_ABI,
    address: IBC_PRECOMPILE_ADDRESS,
    eventName: 'Transfer',
  });
