// lib/transferToken.ts
import { erc20Abi } from 'viem'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { useState } from 'react'

export function useTransferToken(tokenAddress: `0x${string}`) {
  const { address } = useAccount()
  const [hash, setHash] = useState<`0x${string}` | null>(null)

  const { data: txHash, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const transfer = async (to: `0x${string}`, amount: bigint) => {
    writeContract({
      abi: erc20Abi,
      address: tokenAddress,
      functionName: 'transfer',
      args: [to, amount],
    })
    setHash(txHash!)
  }

  return { transfer, isConfirming, isConfirmed, txHash }
}
