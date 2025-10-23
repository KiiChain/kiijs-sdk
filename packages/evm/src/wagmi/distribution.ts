import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';
import {
  DISTRIBUTION_PRECOMPILE_ABI,
  DISTRIBUTION_PRECOMPILE_ADDRESS,
} from '../precompiles';

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useReadDistributionPrecompile =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"communityPool"`
 */
export const useReadDistributionPrecompileCommunityPool =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'communityPool',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegationRewards"`
 */
export const useReadDistributionPrecompileDelegationRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegationRewards',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegationTotalRewards"`
 */
export const useReadDistributionPrecompileDelegationTotalRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegationTotalRewards',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegatorValidators"`
 */
export const useReadDistributionPrecompileDelegatorValidators =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegatorValidators',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegatorWithdrawAddress"`
 */
export const useReadDistributionPrecompileDelegatorWithdrawAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegatorWithdrawAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorCommission"`
 */
export const useReadDistributionPrecompileValidatorCommission =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorCommission',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorDistributionInfo"`
 */
export const useReadDistributionPrecompileValidatorDistributionInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorDistributionInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorOutstandingRewards"`
 */
export const useReadDistributionPrecompileValidatorOutstandingRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorOutstandingRewards',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorSlashes"`
 */
export const useReadDistributionPrecompileValidatorSlashes =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorSlashes',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useWriteDistributionPrecompile =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"claimRewards"`
 */
export const useWriteDistributionPrecompileClaimRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'claimRewards',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"depositValidatorRewardsPool"`
 */
export const useWriteDistributionPrecompileDepositValidatorRewardsPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'depositValidatorRewardsPool',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"fundCommunityPool"`
 */
export const useWriteDistributionPrecompileFundCommunityPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'fundCommunityPool',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"setWithdrawAddress"`
 */
export const useWriteDistributionPrecompileSetWithdrawAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'setWithdrawAddress',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawDelegatorRewards"`
 */
export const useWriteDistributionPrecompileWithdrawDelegatorRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawDelegatorRewards',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawValidatorCommission"`
 */
export const useWriteDistributionPrecompileWithdrawValidatorCommission =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawValidatorCommission',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useSimulateDistributionPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"claimRewards"`
 */
export const useSimulateDistributionPrecompileClaimRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'claimRewards',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"depositValidatorRewardsPool"`
 */
export const useSimulateDistributionPrecompileDepositValidatorRewardsPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'depositValidatorRewardsPool',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"fundCommunityPool"`
 */
export const useSimulateDistributionPrecompileFundCommunityPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'fundCommunityPool',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"setWithdrawAddress"`
 */
export const useSimulateDistributionPrecompileSetWithdrawAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'setWithdrawAddress',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawDelegatorRewards"`
 */
export const useSimulateDistributionPrecompileWithdrawDelegatorRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawDelegatorRewards',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawValidatorCommission"`
 */
export const useSimulateDistributionPrecompileWithdrawValidatorCommission =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawValidatorCommission',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useWatchDistributionPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"ClaimRewards"`
 */
export const useWatchDistributionPrecompileClaimRewardsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'ClaimRewards',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"DepositValidatorRewardsPool"`
 */
export const useWatchDistributionPrecompileDepositValidatorRewardsPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'DepositValidatorRewardsPool',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"FundCommunityPool"`
 */
export const useWatchDistributionPrecompileFundCommunityPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'FundCommunityPool',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"SetWithdrawerAddress"`
 */
export const useWatchDistributionPrecompileSetWithdrawerAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'SetWithdrawerAddress',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"WithdrawDelegatorReward"`
 */
export const useWatchDistributionPrecompileWithdrawDelegatorRewardEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'WithdrawDelegatorReward',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"WithdrawValidatorCommission"`
 */
export const useWatchDistributionPrecompileWithdrawValidatorCommissionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'WithdrawValidatorCommission',
  });
