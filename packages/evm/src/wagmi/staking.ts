import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';
import {
  STAKING_PRECOMPILE_ABI,
  STAKING_PRECOMPILE_ADDRESS,
} from '../precompiles';

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__
 */
export const useReadStakingPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: STAKING_PRECOMPILE_ABI,
  address: STAKING_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"delegation"`
 */
export const useReadStakingPrecompileDelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'delegation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"redelegation"`
 */
export const useReadStakingPrecompileRedelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'redelegation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"redelegations"`
 */
export const useReadStakingPrecompileRedelegations =
  /*#__PURE__*/ createUseReadContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'redelegations',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"unbondingDelegation"`
 */
export const useReadStakingPrecompileUnbondingDelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'unbondingDelegation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"validator"`
 */
export const useReadStakingPrecompileValidator =
  /*#__PURE__*/ createUseReadContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'validator',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"validators"`
 */
export const useReadStakingPrecompileValidators =
  /*#__PURE__*/ createUseReadContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'validators',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__
 */
export const useWriteStakingPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: STAKING_PRECOMPILE_ABI,
  address: STAKING_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"cancelUnbondingDelegation"`
 */
export const useWriteStakingPrecompileCancelUnbondingDelegation =
  /*#__PURE__*/ createUseWriteContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'cancelUnbondingDelegation',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"createValidator"`
 */
export const useWriteStakingPrecompileCreateValidator =
  /*#__PURE__*/ createUseWriteContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'createValidator',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"delegate"`
 */
export const useWriteStakingPrecompileDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'delegate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"editValidator"`
 */
export const useWriteStakingPrecompileEditValidator =
  /*#__PURE__*/ createUseWriteContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'editValidator',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"redelegate"`
 */
export const useWriteStakingPrecompileRedelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'redelegate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"undelegate"`
 */
export const useWriteStakingPrecompileUndelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'undelegate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__
 */
export const useSimulateStakingPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"cancelUnbondingDelegation"`
 */
export const useSimulateStakingPrecompileCancelUnbondingDelegation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'cancelUnbondingDelegation',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"createValidator"`
 */
export const useSimulateStakingPrecompileCreateValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'createValidator',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"delegate"`
 */
export const useSimulateStakingPrecompileDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'delegate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"editValidator"`
 */
export const useSimulateStakingPrecompileEditValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'editValidator',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"redelegate"`
 */
export const useSimulateStakingPrecompileRedelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'redelegate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `functionName` set to `"undelegate"`
 */
export const useSimulateStakingPrecompileUndelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    functionName: 'undelegate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__
 */
export const useWatchStakingPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `eventName` set to `"CancelUnbondingDelegation"`
 */
export const useWatchStakingPrecompileCancelUnbondingDelegationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    eventName: 'CancelUnbondingDelegation',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `eventName` set to `"CreateValidator"`
 */
export const useWatchStakingPrecompileCreateValidatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    eventName: 'CreateValidator',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `eventName` set to `"Delegate"`
 */
export const useWatchStakingPrecompileDelegateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    eventName: 'Delegate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `eventName` set to `"EditValidator"`
 */
export const useWatchStakingPrecompileEditValidatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    eventName: 'EditValidator',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `eventName` set to `"Redelegate"`
 */
export const useWatchStakingPrecompileRedelegateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    eventName: 'Redelegate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link STAKING_PRECOMPILE_ABI}__ and `eventName` set to `"Unbond"`
 */
export const useWatchStakingPrecompileUnbondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: STAKING_PRECOMPILE_ABI,
    address: STAKING_PRECOMPILE_ADDRESS,
    eventName: 'Unbond',
  });
