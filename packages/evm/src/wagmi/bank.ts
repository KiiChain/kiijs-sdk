import { createUseReadContract } from 'wagmi/codegen';
import { BANK_PRECOMPILE_ABI, BANK_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link BANK_PRECOMPILE_ABI}__
 */
export const useReadBankPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: BANK_PRECOMPILE_ABI,
  address: BANK_PRECOMPILE_ADDRESS,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link BANK_PRECOMPILE_ABI}__ and `functionName` set to `"balances"`
 */
export const useReadBankPrecompileBalances =
  /*#__PURE__*/ createUseReadContract({
    abi: BANK_PRECOMPILE_ABI,
    address: BANK_PRECOMPILE_ADDRESS,
    functionName: 'balances',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link BANK_PRECOMPILE_ABI}__ and `functionName` set to `"supplyOf"`
 */
export const useReadBankPrecompileSupplyOf =
  /*#__PURE__*/ createUseReadContract({
    abi: BANK_PRECOMPILE_ABI,
    address: BANK_PRECOMPILE_ADDRESS,
    functionName: 'supplyOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link BANK_PRECOMPILE_ABI}__ and `functionName` set to `"totalSupply"`
 */
export const useReadBankPrecompileTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: BANK_PRECOMPILE_ABI,
    address: BANK_PRECOMPILE_ADDRESS,
    functionName: 'totalSupply',
  });
