import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { walletConnect } from "@wagmi/connectors";

const projectId = "f64c28e5e6b7d716d70b927b001e8e1c";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
