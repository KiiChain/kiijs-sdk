import { useState } from "react";
import { useTransferToken } from "@/lib/transferToken";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const { transfer, isLoading, error, success } = useTransferToken();

  const handleTransfer = async () => {
    await transfer(toAddress, amount);
  };

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-md">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-xl font-semibold">Transfer Token</h1>

        <input
          type="text"
          placeholder="To address"
          value={toAddress
