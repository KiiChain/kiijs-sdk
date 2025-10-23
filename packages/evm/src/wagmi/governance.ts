import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';
import {
  GOVERNANCE_PRECOMPILE_ABI,
  GOVERNANCE_PRECOMPILE_ADDRESS,
} from '../precompiles';

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__
 */
export const useReadGovernancePrecompile = /*#__PURE__*/ createUseReadContract({
  abi: GOVERNANCE_PRECOMPILE_ABI,
  address: GOVERNANCE_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getConstitution"`
 */
export const useReadGovernancePrecompileGetConstitution =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getConstitution',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getDeposit"`
 */
export const useReadGovernancePrecompileGetDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getDeposit',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getDeposits"`
 */
export const useReadGovernancePrecompileGetDeposits =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getDeposits',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getParams"`
 */
export const useReadGovernancePrecompileGetParams =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getParams',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getProposal"`
 */
export const useReadGovernancePrecompileGetProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getProposal',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getProposals"`
 */
export const useReadGovernancePrecompileGetProposals =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getProposals',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getTallyResult"`
 */
export const useReadGovernancePrecompileGetTallyResult =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getTallyResult',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getVote"`
 */
export const useReadGovernancePrecompileGetVote =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getVote',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernancePrecompileGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'getVotes',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__
 */
export const useWriteGovernancePrecompile =
  /*#__PURE__*/ createUseWriteContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"cancelProposal"`
 */
export const useWriteGovernancePrecompileCancelProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'cancelProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"deposit"`
 */
export const useWriteGovernancePrecompileDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'deposit',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"submitProposal"`
 */
export const useWriteGovernancePrecompileSubmitProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'submitProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"vote"`
 */
export const useWriteGovernancePrecompileVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'vote',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"voteWeighted"`
 */
export const useWriteGovernancePrecompileVoteWeighted =
  /*#__PURE__*/ createUseWriteContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'voteWeighted',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__
 */
export const useSimulateGovernancePrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"cancelProposal"`
 */
export const useSimulateGovernancePrecompileCancelProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'cancelProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"deposit"`
 */
export const useSimulateGovernancePrecompileDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'deposit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"submitProposal"`
 */
export const useSimulateGovernancePrecompileSubmitProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'submitProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"vote"`
 */
export const useSimulateGovernancePrecompileVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'vote',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `functionName` set to `"voteWeighted"`
 */
export const useSimulateGovernancePrecompileVoteWeighted =
  /*#__PURE__*/ createUseSimulateContract({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    functionName: 'voteWeighted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__
 */
export const useWatchGovernancePrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `eventName` set to `"CancelProposal"`
 */
export const useWatchGovernancePrecompileCancelProposalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    eventName: 'CancelProposal',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `eventName` set to `"Deposit"`
 */
export const useWatchGovernancePrecompileDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    eventName: 'Deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `eventName` set to `"SubmitProposal"`
 */
export const useWatchGovernancePrecompileSubmitProposalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    eventName: 'SubmitProposal',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `eventName` set to `"Vote"`
 */
export const useWatchGovernancePrecompileVoteEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    eventName: 'Vote',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link GOVERNANCE_PRECOMPILE_ABI}__ and `eventName` set to `"VoteWeighted"`
 */
export const useWatchGovernancePrecompileVoteWeightedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: GOVERNANCE_PRECOMPILE_ABI,
    address: GOVERNANCE_PRECOMPILE_ADDRESS,
    eventName: 'VoteWeighted',
  });
