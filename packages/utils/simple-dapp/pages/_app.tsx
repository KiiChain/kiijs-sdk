import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/config/wagmi";

const projectId = "f64c28e5e6b7d716d70b927b001e8e1c";

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}