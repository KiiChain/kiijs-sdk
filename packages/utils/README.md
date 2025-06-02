# @kiichain/kiijs-utils

Typescript library containing general utility functions for interacting with Kiichain.

## Installation

```bash
yarn add @kiichain/kiijs-proto
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

### Transaction signing with 
Ensure that your EVM wallet has the KiiChain network enabled.
