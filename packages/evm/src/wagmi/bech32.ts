import {
  createUseSimulateContract,
  createUseWriteContract,
} from 'wagmi/codegen';
import {
  BECH32_PRECOMPILE_ABI,
  BECH32_PRECOMPILE_ADDRESS,
} from '../precompiles';

export const BECH32_PRECOMPILE_CONFIG = {
  address: BECH32_PRECOMPILE_ADDRESS,
  abi: BECH32_PRECOMPILE_ABI,
} as const;

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link BECH32_PRECOMPILE_ABI}__
 */
export const useWriteBech32Precompile = /*#__PURE__*/ createUseWriteContract({
  abi: BECH32_PRECOMPILE_ABI,
  address: BECH32_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link BECH32_PRECOMPILE_ABI}__ and `functionName` set to `"bech32ToHex"`
 */
export const useWriteBech32PrecompileBech32ToHex =
  /*#__PURE__*/ createUseWriteContract({
    abi: BECH32_PRECOMPILE_ABI,
    address: BECH32_PRECOMPILE_ADDRESS,
    functionName: 'bech32ToHex',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link BECH32_PRECOMPILE_ABI}__ and `functionName` set to `"hexToBech32"`
 */
export const useWriteBech32PrecompileHexToBech32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: BECH32_PRECOMPILE_ABI,
    address: BECH32_PRECOMPILE_ADDRESS,
    functionName: 'hexToBech32',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link BECH32_PRECOMPILE_ABI}__
 */
export const useSimulateBech32Precompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: BECH32_PRECOMPILE_ABI,
    address: BECH32_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link BECH32_PRECOMPILE_ABI}__ and `functionName` set to `"bech32ToHex"`
 */
export const useSimulateBech32PrecompileBech32ToHex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: BECH32_PRECOMPILE_ABI,
    address: BECH32_PRECOMPILE_ADDRESS,
    functionName: 'bech32ToHex',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link BECH32_PRECOMPILE_ABI}__ and `functionName` set to `"hexToBech32"`
 */
export const useSimulateBech32PrecompileHexToBech32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: BECH32_PRECOMPILE_ABI,
    address: BECH32_PRECOMPILE_ADDRESS,
    functionName: 'hexToBech32',
  });
