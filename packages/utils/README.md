# @kiichain/kiijs-evm

Typescript library containing helper functions for interacting with the EVM on KiiChain.

## Installation

```bash
yarn add @kiichain/kiijs-evm ethers viem
```

<br>
<br>

## Wallet Connection
This package provides exports for easily interacting with viem, and ethers.js. You can interact with the KiiChain EVM using all the same hooks and helper functions these tools offer. Read the [Wagmi]('https://wagmi.sh/), [viem]('https://viem.sh/'), and [ethers v6]('https://docs.ethers.org/v6/) documentation for more information on how to use these tools.

### Wallet network setup
Ensure that your EVM wallet has the KiiChain network enabled.

<br>

### Connection with ethers v6
The 'ethers' package is a popular library for interacting with the Ethereum blockchain. This package provides a helper function for creating an ethers provider that is connected to the KiiChain EVM.
```tsx
import { getBankPrecompileEthersV6Contract } from '@kiichain/kiijs-evm';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
const signer = await provider.getSigner();

const accounts = await provider.send('eth_requestAccounts', []);

const contract = getBankPrecompileEthersV6Contract(signer);

const cosmosAddress = await contract.balances("youraddress");
```

An alternative without the popup is to directly use your private key to connect.
```tsx
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/');
const wallet = new ethers.Wallet("0xyourprivatekey", provider);
```
