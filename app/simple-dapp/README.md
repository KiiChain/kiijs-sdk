# Simple DApp Example

This is a minimal example of a decentralized application (DApp) built with *Next.js, **Vite, **Wagmi, **Viem, and **Web3Modal, configured to run on the **Kiichain Testnet*.

## ✨ Features

- Connect wallet (via injected connector or Web3Modal).
- Display connected wallet address.
- Send a small amount of *KII* (native token) to self.
- Simple UI for quick testing and demonstration.

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [Vite](https://vitejs.dev/) — Fast development build tool
- [Wagmi](https://wagmi.sh/) — React Hooks for Ethereum
- [Viem](https://viem.sh/) — TypeScript interface for EVM
- [Web3Modal](https://web3modal.com/) — Wallet connection modal

## ⚙ Setup

1. Navigate into the project folder:

   ```bash
   cd app/simple-dapp

2. Install dependencies:

npm install


3. Start local dev server:

npm run dev

The app should be available at http://localhost:5173.



🔗 Kiichain Testnet Config

The DApp is configured to connect with the Kiichain Testnet:

Chain ID: 8467

Currency: KII

RPC URL: https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/

Block Explorer: https://explorer.kiichain.io


🚀 How to Use

1. Open the app in your browser.


2. Click Connect Wallet.


3. Approve connection with your wallet (e.g., MetaMask).


4. Test sending 0.001 KII to your own address.


5. Check the transaction on Kiichain Explorer.



📂 Project Structure

app/simple-dapp/
 ├── src/              # React components and logic
 ├── public/           # Static assets
 ├── pages/            # Next.js pages (index.tsx, _app.tsx, etc.)
 ├── wagmi.ts          # Wagmi + Kiichain config
 ├── package.json      # Dependencies and scripts
 └── README.md         # This documentation

🙌 Contribution

This is an example module under the kiijs-sdk repository.
Feel free to suggest improvements such as:

Better error handling.

More usage examples.

Additional features (swap, stake, liquidity, etc.).



---