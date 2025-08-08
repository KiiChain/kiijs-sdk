import { useEffect, useState } from "react";
import {
  useAccount,
  useDisconnect,
  useSendTransaction,
  useConnect,
} from "wagmi";
import { parseEther } from "viem";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { sendTransactionAsync } = useSendTransaction();
  const { connect, connectors } = useConnect();

  const [isClient, setIsClient] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleConnect = async () => {
    try {
      const injected = connectors.find((c) => c.id === "injected");
      if (!injected) throw new Error("No injected connector found");
      await connect({ connector: injected });
    } catch (err) {
      console.error("Connect error:", err);
    }
  };

  const handleSendTx = async () => {
    try {
      const hash = await sendTransactionAsync({
        to: address!,
        value: parseEther("0.001"),
      });
      console.log("Tx Hash:", hash);
    } catch (err) {
      console.error("Tx error:", err);
    }
  };

  if (!isClient) return null; // Avoid rendering before client ready

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Simple Kiichain DApp</h1>
      {isConnected ? (
        <>
          <p>Connected as: <b>{address}</b></p>
          <button onClick={() => disconnect()}>Disconnect</button>
          <button onClick={handleSendTx} style={{ marginLeft: "1rem" }}>
            Send 0.001 KII to Self
          </button>
        </>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </main>
  );
}
