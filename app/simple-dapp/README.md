# Simple DApp (Kiichain)

Minimal example DApp for Kiichain: connect wallet & send native token (KII) on testnet.

## Prerequisites
- Node.js 18+
- Wallet (example: MetaMask)
- WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com) (free)

## Quick Setup
```bash
# in this folder: app/simple-dapp
npm install

# create .env file from example
cp .env.example .env

# fill in VITE_WALLETCONNECT_PROJECT_ID in .env
# then run the dev server
npm run dev

The app will run at http://localhost:5173/

Network Configuration (Kiichain Testnet)

This project is already configured for Kiichain Testnet. RPC used:

https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/

Environment Variables

VITE_WALLETCONNECT_PROJECT_ID — Project ID from WalletConnect

Features
- Connect/Disconnect wallet
- Send KII to your own address (demo example)
- Web3Modal + wagmi + viem

Notes

This PR only adds documentation & .env.example file to make it easier for developers to run this example locally.
No changes were made to the core SDK code.