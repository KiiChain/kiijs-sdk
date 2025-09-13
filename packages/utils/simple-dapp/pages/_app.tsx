// pages/_app.tsx
import type { AppProps } from "next/app";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../wagmi"; 

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <Component {...pageProps} />
      </WagmiProvider>
    </QueryClientProvider>
  );
}
