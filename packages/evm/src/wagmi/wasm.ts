import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';
import { WASM_PRECOMPILE_ABI, WASM_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__
 */
export const useReadWasmPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: WASM_PRECOMPILE_ABI,
  address: WASM_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `functionName` set to `"queryRaw"`
 */
export const useReadWasmPrecompileQueryRaw =
  /*#__PURE__*/ createUseReadContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    functionName: 'queryRaw',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `functionName` set to `"querySmart"`
 */
export const useReadWasmPrecompileQuerySmart =
  /*#__PURE__*/ createUseReadContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    functionName: 'querySmart',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__
 */
export const useWriteWasmPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: WASM_PRECOMPILE_ABI,
  address: WASM_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `functionName` set to `"execute"`
 */
export const useWriteWasmPrecompileExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    functionName: 'execute',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `functionName` set to `"instantiate"`
 */
export const useWriteWasmPrecompileInstantiate =
  /*#__PURE__*/ createUseWriteContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    functionName: 'instantiate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__
 */
export const useSimulateWasmPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `functionName` set to `"execute"`
 */
export const useSimulateWasmPrecompileExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    functionName: 'execute',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `functionName` set to `"instantiate"`
 */
export const useSimulateWasmPrecompileInstantiate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    functionName: 'instantiate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__
 */
export const useWatchWasmPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `eventName` set to `"ContractExecuted"`
 */
export const useWatchWasmPrecompileContractExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    eventName: 'ContractExecuted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link WASM_PRECOMPILE_ABI}__ and `eventName` set to `"ContractInstantiated"`
 */
export const useWatchWasmPrecompileContractInstantiatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: WASM_PRECOMPILE_ABI,
    address: WASM_PRECOMPILE_ADDRESS,
    eventName: 'ContractInstantiated',
  });
