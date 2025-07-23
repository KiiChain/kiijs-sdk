# RWA (Real World Assets) SDK

A TypeScript SDK for interacting with Real World Assets (RWA) on Cosmos-based blockchains, providing modules for compliance, identity management, and token operations.

## Installation

```bash
npm install @kiichain/kiijs-rwa
# or
yarn add @kiichain/kiijs-rwa
```

## Getting Started

First, set up your environment and initialize the client:

```typescript
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { RwaClient } from '@kiichain/kiijs-rwa';

// Initialize wallet
const mnemonic = "your wallet mnemonic";
const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
  prefix: "kii",
});

// Create RWA client
const rpcUrl = "https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/";
const chainId = "oro_1336-1";
const denom = "akii";
const gasPrice = "0.025akii";

const rwaClient = await RwaClient.new(
  rpcUrl,
  chainId,
  denom,
  gasPrice,
  signer
);
```

## Modules

### RwaClient

The base rwaClient that provides connection to the blockchain and core functionality.

**Key Methods:**
- `execute()` - Execute contract transactions
- `query()` - Query contract state
- `getChainId()` - Get connected chain ID
- `getRpcClient()` - Access underlying Stargate client

### Compliance Module

Manages compliance modules for RWA tokens.

```typescript
import { ComplianceModule } from '@kiichain/kiijs-rwa';

const complianceAddress = "kii1compliancecontract...";
const compliance = new ComplianceModule(rwaClient, complianceAddress);

// Add compliance module
await compliance.addComplianceModule({
  from: "kii1yourwallet...",
  module_addr: "kii1moduleaddress...",
  gas_limit: 200000,
});

// Remove compliance module
await compliance.removeComplianceModule({
  from: "kii1yourwallet...",
  module_addr: "kii1moduleaddress...",
  gas_limit: 200000,
});
```

### Identity Module

Manages identity information for RWA participants.

```typescript
import { IdentityModule } from '@kiichain/kiijs-rwa';

const identityAddress = "kii1identitycontract...";
const identity = new IdentityModule(rwaClient, identityAddress);

// Add identity
await identity.addIdentity({
  from: "kii1yourwallet...",
  country: "BR",
  gas_limit: 200000,
});

// Update identity
await identity.updateIdentity({
  from: "kii1yourwallet...",
  new_country: "FR",
  identity_owner: "kii1useraddress...",
  gas_limit: 200000,
});

// Remove identity
await identity.removeIdentity({
  from: "kii1yourwallet...",
  identity_owner: "kii1useraddress...",
  gas_limit: 200000,
});
```

### Token Module

Handles RWA token operations including transfers, balances, and approvals.

```typescript
import { TokenModule } from '@kiichain/kiijs-rwa';

const tokenAddress = "kii1tokencontract...";
const token = new TokenModule(rwaClient, tokenAddress);

// Transfer tokens
await token.transfer({
  from: "kii1sender...",
  to: "kii1recipient...",
  amount: 1000, // Amount in base units
  gas_limit: 200000,
});

// Get balance
const { balance } = await token.balance({
  address: "kii1useraddress...",
});

// Get token info
const tokenInfo = await token.tokenInfo();

// Approve spender
await token.approve({
  from: "kii1owner...",
  spender: "kii1spender...",
  amount: 500,
  gas_limit: 200000,
});

// Check allowance
const { allowance } = await token.allowance(
  "kii1owner...",
  "kii1spender..."
);
```

## Examples

### Full Workflow Example

```typescript
// Initialize
const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
const rwaClient = await RwaClient.new(rpcUrl, chainId, denom, gasPrice, signer);

// Set up modules
const token = new TokenModule(rwaClient, tokenAddress);
const identity = new IdentityModule(rwaClient, identityAddress);
const compliance = new ComplianceModule(rwaClient, complianceAddress);

// Register identity
await identity.addIdentity({
  from: walletAddress,
  country: "US",
  gas_limit: 200000,
});

// Transfer tokens
const transferResult = await token.transfer({
  from: walletAddress,
  to: recipientAddress,
  amount: 1000,
  gas_limit: 250000,
});

console.log(`Transfer tx hash: ${transferResult.transactionHash}`);
```

## Testing

Run tests with:

```bash
npm test
# or
yarn test
```