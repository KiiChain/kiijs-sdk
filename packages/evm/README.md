# @kiichain/kiijs-evm

Typescript library containing helper functions for interacting with the EVM on KiiChain.

## Installation

```bash
yarn add @kiichain/kiijs-evm ethers viem
```

<br>
<br>

## Wallet Connection
This package provides exports for easily interacting with wagmi, viem, and ethers.js. You can interact with the KiiChain EVM using all the same hooks and helper functions these tools offer. Read the [Wagmi]('https://wagmi.sh/), [viem]('https://viem.sh/'), and [ethers v6]('https://docs.ethers.org/v6/) documentation for more information on how to use these tools.

### Wallet network setup
Ensure that your EVM wallet has the KiiChain network enabled. Learn more on how to [set up your wallet]('https://v2.docs.sei.io/setting-up-a-wallet').

<br>

### Connection with Wagmi
The WagmiProvider is a React context provider that allows you to easily interact with the EVM. It provides many useful hooks for reading and writing on KiiChain via the EVM JSON-RPC.
```tsx
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ARCTIC_1_VIEM_CHAIN, createWagmiConfig } from '@kiichain/kiijs-evm';

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: { children: ReactNode }) => {
 return (
   <WagmiProvider config={createWagmiConfig([ARCTIC_1_VIEM_CHAIN])}>
     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   </WagmiProvider>
 );
};
```

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

const cosmosAddress = await contract.balances();
```

An alternative without the popup is to directly use your private key to connect.
```tsx
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/');
const wallet = new ethers.Wallet("0xyourprivatekey", provider);
```

### Usage with viem
This package exports `viem` Chains and precompile ABI's for KiiChain. The ABI used in the ethers example above is a viem ABI instance and the `ARCTIC_1_VIEM_CHAIN` is a `viem Chain` instance.

## Interoperability with Cosmos
KiiChain v3 supports both EVM JSON-RPC and Cosmos RPC interfaces. In order to easily interact with certain Cosmos modules, KiiChain v3 has a set of precompiled contracts that can be called from the EVM.

| Precompile                                          | Description                                                                                  |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------|
| [Bank Precompile](#bank-precompile)                 | Provides functionalities for checking balances and supply.                   |
| [Bech32 Precompile](#bech32-precompile) | Facilitates conversion between hex address and bech32                       |
| [Distribution Precompile](#distribution-precompile) | Deals with reward distribution and related                      |                     |
| [Governance Precompile](#governance-precompile)     | Supports actions such as depositing funds into proposals, voting and interacting with proposals.                         |                        
| [ICS20 Precompile](#ics20-precompile) | Facilitates conversion between hex address and bech32 
| [Slashing Precompile](#slashing-precompile) | Provides management and query options for penalties                      |
| [Staking Precompile](#staking-precompile)           | Enables staking functionalities like delegation and undelegation or obtaining information on validators.                            |                  

<br>

### Interoperability using Wagmi, viem, and ethers
Each precompile has contract exports a typed 'ethers' contracts and provides the ABI and contract addresses for each precompile for usage with Wagmi and viem.

<br>
<br>

### Bank Precompile

The Bank precompile contract provides functionalities for managing balances, supply, symbols, and more.
#### Functions

| Function Name                                                                       | Input Parameters                                                                          | Return Value           | Description                                                                |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------|
| `balances`       | `acc: ` `string`                                                    | `balances : [{ denom: string, amount: string }]`   | Retrieves the balances of a given address |                               |
| `supplyOf`         | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the total supply of tokens for the specified denomination.       |
| `totalSupply`        | -                                                       | `balances : [{ denom: string, amount: string }]` | Retrieves all the supplies from the chain                       |                              |

#### Precompile Addresses
0x0000000000000000000000000000000000000804

<br>
<br>


### Bech32 Precompile

The bech32 precompile contract provides ways to turn a hex address to bech32 and vice-versa. There is also functions in the library under the precompile to do the same without using the contract.

```tsx
import { getBech32PrecompileEthersV6Contract } from '@kiichain/kiijs-evm/ethers'

const kiiAddress = HexToBech32("0xyourhex")

const evmAddress = Bech32ToHex("kiiYouraddress)
```

<br>
<br>

### Distribution Precompile

The Distribution precompile contract facilitates operations related to rewards withdrawal and distribution.

#### Functions

Here's the table representation of your Distribution ABI:

| Function Name | Input Parameters | Return Value | Description |
|--------------|------------------|--------------|-------------|
| `claimRewards` | `delegatorAddress: string` (address)<br>`maxRetrieve: number` (uint32) | `success: boolean` | Claims rewards for a delegator (up to maxRetrieve) |
| `delegationRewards` | `delegatorAddress: string` (address)<br>`validatorAddress: string` | `rewards: [{ denom: string, amount: string, precision: number }]` | Gets rewards for a specific delegation |
| `delegationTotalRewards` | `delegatorAddress: string` (address) | `rewards: [{ validatorAddress: string, reward: [{ denom: string, amount: string, precision: number }] }]`<br>`total: [{ denom: string, amount: string, precision: number }]` | Gets all rewards for a delegator with totals |
| `delegatorValidators` | `delegatorAddress: string` (address) | `validators: string[]` | Lists all validators a delegator is staked with |
| `delegatorWithdrawAddress` | `delegatorAddress: string` (address) | `withdrawAddress: string` | Gets the withdrawal address for a delegator |
| `fundCommunityPool` | `depositor: string` (address)<br>`amount: string` (uint256) | `success: boolean` | Funds the community pool |
| `setWithdrawAddress` | `delegatorAddress: string` (address)<br>`withdrawerAddress: string` | `success: boolean` | Sets the withdrawal address for rewards |
| `validatorCommission` | `validatorAddress: string` | `commission: [{ denom: string, amount: string, precision: number }]` | Gets commission rewards for a validator |
| `validatorDistributionInfo` | `validatorAddress: string` | `distributionInfo: { operatorAddress: string, selfBondRewards: [{ denom: string, amount: string, precision: number }], commission: [{ denom: string, amount: string, precision: number }] }` | Gets full distribution info for a validator |
| `validatorOutstandingRewards` | `validatorAddress: string` | `rewards: [{ denom: string, amount: string, precision: number }]` | Gets outstanding rewards for a validator |
| `validatorSlashes` | `validatorAddress: string`<br>`startingHeight: number` (uint64)<br>`endingHeight: number` (uint64)<br>`pageRequest: { key: bytes, offset: number, limit: number, countTotal: boolean, reverse: boolean }` | `slashes: [{ validatorPeriod: number, fraction: { value: string, precision: number } }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Gets slash events for a validator with pagination |
| `withdrawDelegatorRewards` | `delegatorAddress: string` (address)<br>`validatorAddress: string` | `amount: [{ denom: string, amount: string }]` | Withdraws delegator's rewards from a validator |
| `withdrawValidatorCommission` | `validatorAddress: string` | `amount: [{ denom: string, amount: string }]` | Withdraws validator's commission rewards |


#### Precompile Addresses
0x0000000000000000000000000000000000000801

<br>
<br>


### Evidence Precompile

The Evidence precompile contract provides functionalities for dealing with evidences.

#### Functions
| Function Name     | Input Parameters                                                                 | Return Value                                                                 | Description                                                                 |
|-------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `evidence`       | `evidenceHash: bytes`                                                           | `evidence: { height: number, time: number, power: number, consensusAddress: string }` | Retrieves evidence by its hash                                        |
| `getAllEvidence` | `pageRequest: { key: bytes, offset: number, limit: number, countTotal: boolean, reverse: boolean }` | `evidence: [{ height: number, time: number, power: number, consensusAddress: string }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Retrieves all evidence with pagination support                       |
| `submitEvidence` | `evidence: { height: number, time: number, power: number, consensusAddress: string }` | `success: boolean`                                                          | Submits new evidence of validator equivocation                           |

#### Precompile Addresses
0x0000000000000000000000000000000000000807

<br>
<br>

### Governance Precompile

The Governance precompile contract supports actions to deposit funds into proposals, view them and interact with them.

#### Functions

| Function Name       | Input Parameters                                                                 | Return Value                                                                 | Description                                                                 |
|---------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `getDeposit`        | `proposalId: number` (uint64)<br>`depositor: string` (address)                  | `deposit: { proposalId: number, depositor: string, amount: [{ denom: string, amount: string }] }` | Gets a specific deposit for a proposal |
| `getDeposits`       | `proposalId: number` (uint64)<br>`pagination: { key: bytes, offset: number, limit: number, countTotal: boolean, reverse: boolean }` | `deposits: [{ proposalId: number, depositor: string, amount: [{ denom: string, amount: string }] }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Gets all deposits for a proposal with pagination |
| `getParams`         | -                                                                                | `params: { votingPeriod: number, minDeposit: [{ denom: string, amount: string }], maxDepositPeriod: number, quorum: string, threshold: string, vetoThreshold: string, ... }` | Returns governance parameters |
| `getProposal`       | `proposalId: number` (uint64)                                                  | `proposal: { id: number, messages: string[], status: number, finalTallyResult: { yes: string, abstain: string, no: string, noWithVeto: string }, submitTime: number, ... }` | Gets full proposal details |
| `getProposals`      | `proposalStatus: number` (uint32)<br>`voter: string` (address)<br>`depositor: string` (address)<br>`pagination: { ... }` | `proposals: [{ id: number, messages: string[], status: number, finalTallyResult: { ... }, ... }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Lists proposals with filters and pagination |
| `getTallyResult`    | `proposalId: number` (uint64)                                                  | `tallyResult: { yes: string, abstain: string, no: string, noWithVeto: string }` | Gets current tally results for a proposal |
| `getVote`          | `proposalId: number` (uint64)<br>`voter: string` (address)                     | `vote: { proposalId: number, voter: string, options: [{ option: number, weight: string }], metadata: string }` | Gets an individual vote |
| `getVotes`         | `proposalId: number` (uint64)<br>`pagination: { ... }`                         | `votes: [{ proposalId: number, voter: string, options: [{ option: number, weight: string }], metadata: string }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Gets all votes for a proposal with pagination |
| `vote`             | `voter: string` (address)<br>`proposalId: number` (uint64)<br>`option: number` (uint8)<br>`metadata: string` | `success: boolean`                                                          | Submits a vote on a proposal |
| `voteWeighted`     | `voter: string` (address)<br>`proposalId: number` (uint64)<br>`options: [{ option: number, weight: string }]`<br>`metadata: string` | `success: boolean`                                                          | Submits a weighted vote on a proposal |

#### Precompile Addresses
0x0000000000000000000000000000000000000805

<br>
<br>

### ICS20 Precompile

Enables cross-chain token transfers via IBC with granular permission control over channels and denominations.

#### Functions

| Function Name               | Input Parameters                                                                 | Return Value                                                                 | Description                                                                 |
|-----------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **`allowance`**             | `grantee: string` (address)<br>`granter: string` (address)                      | `allocations: [{ sourcePort: string, sourceChannel: string, spendLimit: [{ denom: string, amount: string }], allowList: string[], allowedPacketData: string[] }]` | Checks granted IBC transfer permissions |
| **`approve`**               | `grantee: string` (address)<br>`allocations: [{ sourcePort: string, sourceChannel: string, spendLimit: [{ denom: string, amount: string }], ... }]` | `approved: boolean` | Grants IBC transfer permissions |
| **`decreaseAllowance`**     | `grantee: string` (address)<br>`sourcePort: string`<br>`sourceChannel: string`<br>`denom: string`<br>`amount: string` (uint256) | `approved: boolean` | Reduces spend limit for a specific channel/denom |
| **`denomHash`**             | `trace: string` (e.g., "transfer/channel-1/uatom")                              | `hash: string` (IBC denom hash)                                              | Converts IBC denom trace to hash (e.g., `ibc/27394FB092...`)                |
| **`denomTrace`**            | `hash: string` (IBC denom hash)                                                 | `denomTrace: { path: string, baseDenom: string }`                            | Decodes IBC hash to original trace (e.g., `path: "transfer/channel-1"`, `baseDenom: "uatom"`) |
| **`denomTraces`**           | `pageRequest: { key: bytes, offset: number, limit: number, ... }`               | `denomTraces: [{ path: string, baseDenom: string }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Lists all registered denom traces with pagination |
| **`increaseAllowance`**     | `grantee: string` (address)<br>`sourcePort: string`<br>`sourceChannel: string`<br>`denom: string`<br>`amount: string` (uint256) | `approved: boolean` | Increases spend limit for a specific channel/denom |
| **`revoke`**                | `grantee: string` (address)                                                     | `revoked: boolean`                                                           | Revokes all IBC transfer permissions for a grantee                         |
| **`transfer`**              | `sourcePort: string`<br>`sourceChannel: string`<br>`denom: string`<br>`amount: string` (uint256)<br>`sender: string` (address)<br>`receiver: string`<br>`timeoutHeight: { revisionNumber: number, revisionHeight: number }`<br>`timeoutTimestamp: number`<br>`memo: string` | `nextSequence: number` (uint64) | Initiates an IBC token transfer |

#### Precompile Addresses
0x0000000000000000000000000000000000000802

<br>
<br>


### Slashing Precompile

Enables query, interaction and management of validator penalties.

#### Functions

| Function Name       | Input Parameters                                                                 | Return Value                                                                 | Description                                                                 |
|---------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `getParams`         | -                                                                               | `params: { signedBlocksWindow: number, minSignedPerWindow: string, downtimeJailDuration: number, slashFractionDoubleSign: string, slashFractionDowntime: string }` | Returns slashing module parameters |
| `getSigningInfo`    | `consAddress: string` (address)                                                 | `signingInfo: { validatorAddress: string, startHeight: number, indexOffset: number, jailedUntil: number, tombstoned: boolean, missedBlocksCounter: number }` | Gets signing info for a validator |
| `getSigningInfos`   | `pagination: { key: bytes, offset: number, limit: number, countTotal: boolean, reverse: boolean }` | `signingInfos: [{ validatorAddress: string, startHeight: number, indexOffset: number, jailedUntil: number, tombstoned: boolean, missedBlocksCounter: number }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Gets all validator signing info with pagination |
| `unjail`           | `validatorAddress: string` (address)                                            | `success: boolean`                                                          | Releases a validator from jail status |

#### Precompile Addresses
0x0000000000000000000000000000000000000806


<br>
<br>

### Staking Precompile

The Staking precompile manages validator operations, delegations, and governance permissions in a Cosmos-based blockchain with EVM compatibility.

#### Functions

| Function Name               | Input Parameters                                                                 | Return Value                                                                 | Description                                                                 |
|-----------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **`allowance`**             | `grantee: string` (address)<br>`granter: string` (address)<br>`method: string`  | `remaining: string` (uint256)                                                | Checks remaining allowance for a grantee's staking actions                  |
| **`approve`**               | `grantee: string` (address)<br>`amount: string` (uint256)<br>`methods: string[]` | `approved: boolean`                                                          | Grants staking permissions to another address                              |
| **`cancelUnbondingDelegation`** | `delegatorAddress: string` (address)<br>`validatorAddress: string`<br>`amount: string` (uint256)<br>`creationHeight: string` (uint256) | `success: boolean` | Cancels an unbonding delegation before completion |
| **`createValidator`**       | `description: { moniker: string, identity: string, ... }`<br>`commissionRates: { rate: string, maxRate: string, ... }`<br>`minSelfDelegation: string`<br>`validatorAddress: string` (address)<br>`pubkey: string`<br>`value: string` (uint256) | `success: boolean` | Registers a new validator |
| **`decreaseAllowance`**     | `grantee: string` (address)<br>`amount: string` (uint256)<br>`methods: string[]` | `approved: boolean`                                                          | Reduces staking permissions for a grantee                                  |
| **`delegate`**              | `delegatorAddress: string` (address)<br>`validatorAddress: string`<br>`amount: string` (uint256) | `success: boolean`                                                          | Delegates tokens to a validator                                            |
| **`delegation`**            | `delegatorAddress: string` (address)<br>`validatorAddress: string`              | `shares: string` (uint256)<br>`balance: { denom: string, amount: string }`   | Returns delegation details between a delegator and validator               |
| **`editValidator`**         | `description: { moniker: string, ... }`<br>`validatorAddress: string` (address)<br>`commissionRate: number` (int256)<br>`minSelfDelegation: number` (int256) | `success: boolean` | Modifies validator metadata/parameters |
| **`increaseAllowance`**     | `grantee: string` (address)<br>`amount: string` (uint256)<br>`methods: string[]` | `approved: boolean`                                                          | Increases staking permissions for a grantee                                |
| **`redelegate`**            | `delegatorAddress: string` (address)<br>`srcValidatorAddress: string`<br>`dstValidatorAddress: string`<br>`amount: string` (uint256) | `completionTime: number` (int64) | Transfers delegation between validators (with unbonding period) |
| **`redelegation`**          | `delegatorAddress: string` (address)<br>`srcValidatorAddress: string`<br>`dstValidatorAddress: string` | `redelegation: { entries: [{ creationHeight: number, completionTime: number, ... }] }` | Returns redelegation details |
| **`redelegations`**         | `delegatorAddress: string` (address)<br>`srcValidatorAddress: string`<br>`dstValidatorAddress: string`<br>`pageRequest: { key: bytes, ... }` | `response: [{ redelegation: { ... } }]`<br>`pageResponse: { nextKey: bytes, total: number }` | Paginated redelegation history |
| **`revoke`**                | `grantee: string` (address)<br>`methods: string[]`                              | `revoked: boolean`                                                           | Revokes all staking permissions for a grantee                              |
| **`unbondingDelegation`**   | `delegatorAddress: string` (address)<br>`validatorAddress: string`              | `unbondingDelegation: { entries: [{ creationHeight: number, completionTime: number, ... }] }` | Returns active unbonding delegations |
| **`undelegate`**            | `delegatorAddress: string` (address)<br>`validatorAddress: string`<br>`amount: string` (uint256) | `completionTime: number` (int64) | Initiates token unbonding from a validator |
| **`validator`**             | `validatorAddress: string` (address)                                            | `validator: { operatorAddress: string, jailed: boolean, tokens: string, ... }` | Returns validator details by address |
| **`validators`**            | `status: string`<br>`pageRequest: { key: bytes, ... }`                          | `validators: [{ operatorAddress: string, jailed: boolean, ... }]`<br>`pageResponse: { ... }` | Lists validators (filtered by status) with pagination |

#### Precompile Addresses
0x0000000000000000000000000000000000000800

<br>
<br>

### Wasm Precompile

The wasm precompile makes wasm contracts available to being used via evm, with instantiate, query and execute.

#### Functions

| Function Name       | Input Parameters                                                                 | Return Value                     | Description                                                                 |
|---------------------|---------------------------------------------------------------------------------|----------------------------------|-----------------------------------------------------------------------------|
| **`execute`**       | `contractAddress: string`<br>`msg: bytes` (JSON-encoded)<br>`coins: [{ denom: string, amount: string }]` | `success: boolean` | Executes a contract method with optional token transfer |
| **`instantiate`**   | `admin: string` (address)<br>`codeID: number` (uint64)<br>`label: string`<br>`msg: bytes` (init msg)<br>`coins: [{ denom: string, amount: string }]` | `success: boolean` | Deploys a new contract instance from stored code |
| **`queryRaw`**      | `contractAddress: string`<br>`queryData: bytes` (raw query)                     | `data: bytes` (raw response)     | Low-level contract query (returns raw bytes)                                |
| **`querySmart`**    | `contractAddress: string`<br>`msg: bytes` (JSON-encoded query)                  | `data: bytes` (JSON response)    | Smart query (parses input/output as JSON)                                   |


#### Precompile Addresses
0x0000000000000000000000000000000000001001

<br>
<br>
