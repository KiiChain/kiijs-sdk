import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';
import { ICS20_PRECOMPILE_ABI, ICS20_PRECOMPILE_ADDRESS } from '../precompiles';

export const ICS20_PRECOMPILE_CONFIG = {
  address: ICS20_PRECOMPILE_ADDRESS,
  abi: ICS20_PRECOMPILE_ABI,
} as const;
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__
 */
export const useReadIcs20Precompile = /*#__PURE__*/ createUseReadContract({
  abi: ICS20_PRECOMPILE_ABI,
  address: ICS20_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__ and `functionName` set to `"denom"`
 */
export const useReadIcs20PrecompileDenom = /*#__PURE__*/ createUseReadContract({
  abi: ICS20_PRECOMPILE_ABI,
  address: ICS20_PRECOMPILE_ADDRESS,
  functionName: 'denom',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__ and `functionName` set to `"denomHash"`
 */
export const useReadIcs20PrecompileDenomHash =
  /*#__PURE__*/ createUseReadContract({
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
    functionName: 'denomHash',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__ and `functionName` set to `"denoms"`
 */
export const useReadIcs20PrecompileDenoms = /*#__PURE__*/ createUseReadContract(
  {
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
    functionName: 'denoms',
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__
 */
export const useWriteIcs20Precompile = /*#__PURE__*/ createUseWriteContract({
  abi: ICS20_PRECOMPILE_ABI,
  address: ICS20_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__ and `functionName` set to `"transfer"`
 */
export const useWriteIcs20PrecompileTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__
 */
export const useSimulateIcs20Precompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIcs20PrecompileTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__
 */
export const useWatchIcs20PrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ICS20_PRECOMPILE_ABI}__ and `eventName` set to `"IBCTransfer"`
 */
export const useWatchIcs20PrecompileIbcTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ICS20_PRECOMPILE_ABI,
    address: ICS20_PRECOMPILE_ADDRESS,
    eventName: 'IBCTransfer',
  });
