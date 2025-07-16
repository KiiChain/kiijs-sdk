import { erc20ABI } from "./abi";
import { GetFunctionReturnType, PublicClient } from "viem";

export async function getTokenName(client: PublicClient, token: `0x${string}`) {
  return await client.readContract({
    address: token,
    abi: erc20ABI,
    functionName: "name",
  }) as GetFunctionReturnType<typeof erc20ABI, "name">;
}

export async function getTokenSymbol(client: PublicClient, token: `0x${string}`) {
  return await client.readContract({
    address: token,
    abi: erc20ABI,
    functionName: "symbol",
  }) as GetFunctionReturnType<typeof erc20ABI, "symbol">;
}

export async function getTokenDecimals(client: PublicClient, token: `0x${string}`) {
  return await client.readContract({
    address: token,
    abi: erc20ABI,
    functionName: "decimals",
  }) as GetFunctionReturnType<typeof erc20ABI, "decimals">;
}

