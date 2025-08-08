import { defineChain } from 'viem'
import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors'

export const kiichainTestnet = defineChain({
  id: 1336,
  name: 'Kiichain Testnet',
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
  blockExplorers: {
    default: {
      name: 'Kiichain Explorer',
      url: 'https://explorer.kiichain.io',
    },
  },
})

export const config = createConfig({
  chains: [kiichainTestnet],
  connectors: [injected()],
  transports: {
    [kiichainTestnet.id]: http(),
  },
})
