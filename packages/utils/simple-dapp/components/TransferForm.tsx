"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { writeContract } from "@wagmi/core";
import { parseUnits } from "viem";

const tokenAddress = "0xYourTokenAddressHere"; // ganti dengan alamat token ERC20 kamu
const tokenABI = [
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    type: "function"
  }
];

export default function TransferForm() {
  const { address } = useAccount();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  async function handleTransfer() {
    try {
      const result = await writeContract({
        address: tokenAddress,
        abi: tokenABI,
        functionName: "transfer",
        args: [to, parseUnits(amount, 18)]
      });
      setStatus("Transfer sent! Tx: " + result.hash);
    } catch (err: any) {
      console.error(err);
      setStatus("Transfer failed: " + err.message);
    }
  }

  return (
    <div>
      <h2>Transfer Token</h2>
      <input
        type="text"
        placeholder="Recipient address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer} disabled={!address}>
        Transfer
      </button>
      <p>{status}</p>
    </div>
  );
}

