'use client';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export default function Swap() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => open()}>
        {isConnected ? `Connected: ${address}` : 'Connect Wallet'}
      </button>
    </div>
  );
}
