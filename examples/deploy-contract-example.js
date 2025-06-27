import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Contoh ABI dan Bytecode (Dummy)
const contractABI = [
  // Contoh kosong, sesuaikan dengan ABI kontrak kamu
];
const contractBytecode = "0x6080604052348015600f57600080fd5b50604a80601d6000396000f3fe60806040...";

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

async function main() {
  console.log("Deploying contract...");

  const factory = new ethers.ContractFactory(contractABI, contractBytecode, wallet);
  const contract = await factory.deploy();

  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();
  console.log("✅ Contract deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

