# @kiichain/kiijs-utils

Typescript library containing general utility functions for interacting with Kiichain.

## Installation

```bash
yarn add @kiichain/kiijs-utils @kiichain/kiijs-proto
```

<br>
<br>

## Bech32 conversion

The package has utils to easen up conversion between hex and bech32 addresses. They can be used like this:

```tsx
import { HexToBech32, Bech32ToHex } from '@kiichain/kiijs-utils'

const kiiAddress = HexToBech32("0xyourhex")

const evmAddress = Bech32ToHex("kiiYouraddress)
```

## EthSECP signer

Some wallets do not recognize the ETHSECP256-1 PubKey signatures. We made a couple helpers to utilize it without problems.
### Signing a transaction

1. Create the `SigningStargateClient` with the correct type

```typescript
import { ethsecpAccountParser, signWithEthsecpSigner } from '@kiichain/kiijs-utils';

// Start the client connection
// The stargate client must use the custom account parser
// This is necessary to handle the ethsecp256k1 PubKey format in queries
const client = await SigningStargateClient.connectWithSigner(
  RPC_ENDPOINT,
  offlineSigner,
  {
    accountParser: ethsecpAccountParser,
  }
);
```

The signing client must use a custom account parser to handle the `ethsecp256k1` public key format. This is crucial for correctly signing transactions.

2. Sign the transaction with a custom pubkey

```typescript
// This is the important bit
// This signs the transaction using the ethsecp256k1 signer
// It basically rewrite the Pubkey to the ethsecp256k1 format
const txRaw = await signWithEthsecpSigner(
  client,
  offlineSigner,
  CHAIN_ID,
  address,
  [msgSend],
  "This is a sample transaction memo",
  KEPLR_CHAIN_INFO.feeCurrencies[0].gasPriceStep.high,
  1.5
);
```

3. Broadcast the signed transaction

```typescript
const receipt = await client.broadcastTx(txRaw);

A full example can be found [here](https://github.com/KiiChain/keplr-tx-template/blob/main/src/App.tsx)
