import { createPublicClient, createWalletClient, http, Address, parseUnits } from "viem"
import { ERC20_ABI } from "./abi"
import { privateKeyToAccount } from "viem/accounts"

const client = createPublicClient({
  transport: http("https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/")
})

export async function getTokenName(tokenAddress: Address): Promise<string> {
  return await client.readContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "name"
  })
}

export async function getTokenSymbol(tokenAddress: Address): Promise<string> {
  return await client.readContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "symbol"
  })
}

export async function getTokenDecimals(tokenAddress: Address): Promise<number> {
  return await client.readContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "decimals"
  })
}

export async function getTokenBalance(account: Address, tokenAddress: Address): Promise<bigint> {
  return await client.readContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: [account]
  })
}

export async function approveSpender({
  tokenAddress,
  spender,
  amount,
  privateKey
}: {
  tokenAddress: Address
  spender: Address
  amount: string
  privateKey: `0x${string}`
}) {
  const decimals = await getTokenDecimals(tokenAddress)
  const value = parseUnits(amount, decimals)
  const account = privateKeyToAccount(privateKey)
  const walletClient = createWalletClient({
    account,
    transport: http("https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/")
  })
  return await walletClient.writeContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "approve",
    args: [spender, value]
  })
}

