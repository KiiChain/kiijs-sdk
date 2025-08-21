# RWA (Real World Assets) SDK

A TypeScript SDK for interacting with Real World Assets (RWA) on Cosmos-based blockchains, providing modules for compliance, identity management, token operations, and RWA protocol functionality.

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

### RwaProtocolModule

The RwaProtocolModule provides functionality for minting, transferring, and redeeming tokenized RWAs, as well as querying asset metadata, collateral status, and issuer credentials.

```typescript
import { RwaClient, RwaProtocolModule } from '@kiichain/kiijs-rwa';

// Initialize the RWA Protocol module with your client and contract address
const rwaProtocolAddress = 'kii1rwaprotocoladdress';
const rwaProtocolModule = new RwaProtocolModule(rwaClient, rwaProtocolAddress);
```

**Key Methods:**

**Asset Operations:**
- `mintAsset()` - Mint new tokenized RWA assets
- `transferAsset()` - Transfer tokenized RWA assets
- `redeemAsset()` - Redeem tokenized RWA assets
- `updateAssetMetadata()` - Update asset metadata

**Queries:**
- `queryAssetMetadata()` - Query asset metadata
- `queryCollateralStatus()` - Query collateral status
- `queryIssuerCredentials()` - Query issuer credentials

**Collateral and Issuer Management:**
- `updateCollateralStatus()` - Update collateral status
- `verifyIssuerCredentials()` - Verify issuer credentials

**Example: Minting a new RWA asset**

```typescript
const fromAddress = 'kii1youraddress';
const toAddress = 'kii1recipientaddress';

const mintResult = await rwaProtocolModule.mintAsset({
  from: fromAddress,
  to: toAddress,
  assetId: 'asset123',
  amount: '1000',
  metadata: {
    assetId: 'asset123',
    name: 'Real Estate Token',
    symbol: 'RET',
    description: 'Tokenized real estate asset',
    imageUri: 'https://example.com/image.png',
    externalLink: 'https://example.com/asset',
    issuer: 'issuer123',
    issuanceDate: new Date().toISOString(),
    denomination: 'USD',
    totalSupply: '1000000'
  },
  gas_limit: 200000
});
```

**Example: Querying asset metadata**

```typescript
const assetMetadata = await rwaProtocolModule.queryAssetMetadata({
  assetId: 'asset123'
});

console.log('Asset Name:', assetMetadata.name);
console.log('Asset Symbol:', assetMetadata.symbol);
console.log('Total Supply:', assetMetadata.totalSupply);
```

## Complete Usage Example

Here's a complete example demonstrating how to use the RWA protocol module:

```typescript
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { RwaClient, RwaProtocolModule } from '@kiichain/kiijs-rwa';

async function main() {
  // Initialize wallet
  const mnemonic = "your wallet mnemonic";
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "kii",
  });
  
  // Get wallet address
  const [{ address }] = await signer.getAccounts();
  
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
  
  // Initialize RWA Protocol module
  const rwaProtocolAddress = 'kii1rwaprotocoladdress';
  const rwaProtocolModule = new RwaProtocolModule(rwaClient, rwaProtocolAddress);
  
  // Mint a new RWA asset
  const assetId = 'asset' + Date.now();
  const recipientAddress = 'kii1recipientaddress';
  
  try {
    // Mint the asset
    const mintResult = await rwaProtocolModule.mintAsset({
      from: address,
      to: recipientAddress,
      assetId: assetId,
      amount: '1000',
      metadata: {
        assetId: assetId,
        name: 'Real Estate Token',
        symbol: 'RET',
        description: 'Tokenized real estate asset',
        imageUri: 'https://example.com/image.png',
        externalLink: 'https://example.com/asset',
        issuer: address,
        issuanceDate: new Date().toISOString(),
        denomination: 'USD',
        totalSupply: '1000000'
      },
      gas_limit: 200000
    });
    
    console.log('Asset minted successfully:', mintResult.transactionHash);
    
    // Query the asset metadata
    const assetMetadata = await rwaProtocolModule.queryAssetMetadata({
      assetId: assetId
    });
    
    console.log('Asset Metadata:', assetMetadata);
    
    // Update collateral status
    const updateCollateralResult = await rwaProtocolModule.updateCollateralStatus({
      from: address,
      assetId: assetId,
      collateralStatus: {
        collateralType: 'FIAT',
        collateralAmount: '1000000',
        collateralRatio: '1.0',
        lastUpdated: new Date().toISOString(),
        custodian: 'Test Custodian'
      },
      gas_limit: 200000
    });
    
    console.log('Collateral status updated:', updateCollateralResult.transactionHash);
    
    // Query collateral status
    const collateralStatus = await rwaProtocolModule.queryCollateralStatus({
      assetId: assetId
    });
    
    console.log('Collateral Status:', collateralStatus);
    
    // Transfer some assets
    const transferResult = await rwaProtocolModule.transferAsset({
      from: address,
      to: recipientAddress,
      assetId: assetId,
      amount: '500',
      gas_limit: 200000
    });
    
    console.log('Asset transferred successfully:', transferResult.transactionHash);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);
```
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