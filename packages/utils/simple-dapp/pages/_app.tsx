import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Web3Modal } from '@web3modal/react'
import { defaultWagmiConfig } from '@web3modal/wagmi'

const projectId = 'f64c28e5e6b7d716d70b927b001e8e1c' // change with Project ID from https://cloud.walletconnect.com/

const metadata = {
  name: 'Simple DApp',
  description: 'My Simple DApp using Web3Modal',
  url: 'http://localhost:3000',
  icons: ['https://walletconnect.com/walletconnect-logo.png']
}

const chains = [mainnet, arbitrum, polygon] // you can choose chain that you need

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Web3Modal projectId={projectId} wagmiConfig={wagmiConfig} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}