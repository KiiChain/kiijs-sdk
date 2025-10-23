import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';
import {
  SLASHING_PRECOMPILE_ABI,
  SLASHING_PRECOMPILE_ADDRESS,
} from '../precompiles';

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__
 */
export const useReadSlashingPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: SLASHING_PRECOMPILE_ABI,
  address: SLASHING_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__ and `functionName` set to `"getParams"`
 */
export const useReadSlashingPrecompileGetParams =
  /*#__PURE__*/ createUseReadContract({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
    functionName: 'getParams',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__ and `functionName` set to `"getSigningInfo"`
 */
export const useReadSlashingPrecompileGetSigningInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
    functionName: 'getSigningInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__ and `functionName` set to `"getSigningInfos"`
 */
export const useReadSlashingPrecompileGetSigningInfos =
  /*#__PURE__*/ createUseReadContract({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
    functionName: 'getSigningInfos',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__
 */
export const useWriteSlashingPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: SLASHING_PRECOMPILE_ABI,
  address: SLASHING_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__ and `functionName` set to `"unjail"`
 */
export const useWriteSlashingPrecompileUnjail =
  /*#__PURE__*/ createUseWriteContract({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
    functionName: 'unjail',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__
 */
export const useSimulateSlashingPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__ and `functionName` set to `"unjail"`
 */
export const useSimulateSlashingPrecompileUnjail =
  /*#__PURE__*/ createUseSimulateContract({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
    functionName: 'unjail',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__
 */
export const useWatchSlashingPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link SLASHING_PRECOMPILE_ABI}__ and `eventName` set to `"ValidatorUnjailed"`
 */
export const useWatchSlashingPrecompileValidatorUnjailedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: SLASHING_PRECOMPILE_ABI,
    address: SLASHING_PRECOMPILE_ADDRESS,
    eventName: 'ValidatorUnjailed',
  });
