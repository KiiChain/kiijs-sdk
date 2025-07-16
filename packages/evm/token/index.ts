import 'dotenv/config'
import { createPublicClient, createWalletClient, http, defineChain } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { ERC20_ABI as erc20ABI } from './abi'

export const kiichainTestnet = defineChain({
  id: 1336,
  name: 'KiiChain Testnet Oro',
  nativeCurrency: {
    name: 'Kii',
    symbol: 'KII',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/'],
    },
  },
})

export const client = createPublicClient({
  chain: kiichainTestnet,
  transport: http(),
})

export const account = privateKeyToAccount(
  process.env.TEST_PRIVATE_KEY as `0x${string}`,
)

export const walletClient = createWalletClient({
  account,
  chain: kiichainTestnet,
  transport: http(),
})

export async function getTokenName(tokenAddress: `0x${string}`) {
  return await client.readContract({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'name',
  })
}

export async function getTokenSymbol(tokenAddress: `0x${string}`) {
  return await client.readContract({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'symbol',
  })
}

export async function getTokenDecimals(tokenAddress: `0x${string}`) {
  return await client.readContract({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'decimals',
  })
}

export async function getTokenBalance(tokenAddress: `0x${string}`, holder: `0x${string}`) {
  return await client.readContract({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'balanceOf',
    args: [holder],
  })
}

export async function approveToken(
  tokenAddress: `0x${string}`,
  spender: `0x${string}`,
  value: bigint,
) {
  return await walletClient.writeContract({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'approve',
    args: [spender, value],
  })
}

