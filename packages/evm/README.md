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
import { ADDRESS_PRECOMPILE_ADDRESS } from '@kiichain/kiijs-evm';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
const signer = await provider.getSigner();

const accounts = await provider.send('eth_requestAccounts', []);

const contract = getAddressPrecompileEthersV6Contract(ADDRESS_PRECOMPILE_ADDRESS, signer);

const cosmosAddress = await contract.getKiiAddr(accounts[0]);
```

<br>

### Usage with viem
This package exports `viem` Chains and precompile ABI's for KiiChain. The ABI used in the ethers example above is a viem ABI instance and the `ARCTIC_1_VIEM_CHAIN` is a `viem Chain` instance.

## Interoperability with Cosmos
KiiChain v2 supports both EVM JSON-RPC and Cosmos RPC interfaces. In order to easily interact with certain Cosmos modules, KiiChain v2 has a set of precompiled contracts that can be called from the EVM.

| Precompile                                          | Description                                                                                  |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------|
| [Address Precompile](#address-precompile)           | Enables the retrieval of associated EVM addresses for given Cosmos addresses and vice versa. |
| [Bank Precompile](#bank-precompile)                 | Provides functionalities for managing balances, supply, symbols, and more.                   |
| [Distribution Precompile](#distribution-precompile) | Facilitates operations related to rewards withdrawal and distribution.                       |
| [Governance Precompile](#governance-precompile)     | Supports actions such as depositing funds into proposals and voting.                         |
| [JSON Precompile](#json-precompile)                 | Facilitates interoperability between the EVM and Cosmos.                                     |
| [Staking Precompile](#staking-precompile)           | Enables staking functionalities like delegation and undelegation.                            |
| [WASM Precompile](#wasm-precompile)                 | Provides functionalities for executing WebAssembly (WASM) code.                              |

<br>

### Interoperability using Wagmi, viem, and ethers
Each precompile has contract exports a typed 'ethers' contracts and provides the ABI and contract addresses for each precompile for usage with Wagmi and viem.

<br>
<br>


### Address Precompile

The Address precompile contract enables the retrieval of associated EVM addresses for given Cosmos addresses and vice versa.
#### Functions

| Function Name                                                                          | Input Parameters  | Return Value           | Description                                                      |
|----------------------------------------------------------------------------------------|-------------------|------------------------|------------------------------------------------------------------|
| `getEvmAddr` | `addr: ` `string` | `{ response: string }` | Retrieves the associated EVM address for a given Cosmos address. |
| `getKiiAddr` | `addr: ` `string` | `{ response: string }` | Retrieves the associated Cosmos address for a given EVM address. |
| `associate`   | `v: ` `string`, `r: ` `string`, `s: ` `string`, `customMessage: ` `string` | `{ response: string }` | Associates an EVM address with it's corresponding KiiChain Native address on chain using a signature. |
| `associatePubKey`   | `pubKeyHex: ` `string` | `{ response: string }` | Associates an EVM address with it's corresponding Cosmos address on chain using the Hex-Encoded compressed pubkey (excluding the '0x'). |


#### Precompile Address
0x0000000000000000000000000000000000001004

<br>
<br>

### Bank Precompile

The Bank precompile contract provides functionalities for managing balances, supply, symbols, and more.
#### Functions

| Function Name                                                                       | Input Parameters                                                                          | Return Value           | Description                                                                |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------|
| `balance`       | `acc: ` `string`, `denom: ` `string`                                                      | `{ amount: string }`   | Retrieves the balance of the specified account for the given denomination. |
| `decimals`     | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the number of decimal places for the specified denomination.     |
| `name`            | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the name of the specified denomination.                          |
| `send`             | `fromAddress: ` `string`, `toAddress: ` `string`, `denom: ` `string`, `amount: ` `number` | `{ success: boolean }` | Sends tokens from one address to another.                                  |
| `supply`         | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the total supply of tokens for the specified denomination.       |
| `symbol`        | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the symbol of the specified denomination.                        |
| `sendNative` | `toNativeAddress: ` `string`, `value: ` `string`                                          | `{ success: boolean }` | Sends native tokens to a specified address.                                |

#### Precompile Addresses
0x0000000000000000000000000000000000001001

<br>
<br>

### Distribution Precompile

The Distribution precompile contract facilitates operations related to rewards withdrawal and distribution.

#### Functions

| Function Name                                                                                                                             | Input Parameters               | Return Value    | Description                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `setWithdrawAddress`                               | `withdrawAddress: ` `string`   | `{ success: boolean }` | Sets the withdrawal address for rewards.                                                                                                                          |
| `withdrawDelegationRewards`                 | `validator: ` `string`         | `{ success: boolean }` | Withdraws delegation rewards for a given validator.                                                                                                               |
| `withdrawMultipleDelegationRewards` | `validators: ` `string[]`      | `{ success: boolean }` | Withdraws delegation rewards for given validators.                                                                                                                |
| `rewards`                                                     | `delegatorAddress: ` `address` | `{ rewards: Rewards }` | Queries rewards available for a given delegator address. Rewards are usually returned as decimals. To calculate the actual amount, divide the amount by decimals. |

#### Precompile Addresses
0x0000000000000000000000000000000000001007

<br>
<br>

### Governance Precompile

The Governance precompile contract supports actions to deposit funds into proposals and vote on them.
#### Functions

| Function Name                                                                       | Input Parameters                             | Return Value           | Description                                |
|-------------------------------------------------------------------------------------|----------------------------------------------|------------------------|--------------------------------------------|
| `deposit` | `proposalID: ` `string`                     | `{ success: boolean }` | Deposits funds into a governance proposal. |
| `vote`       | `proposalID: ` `string`, `option: ` `string` | `{ success: boolean }` | Votes on a governance proposal.            |

#### Precompile Addresses
0x0000000000000000000000000000000000001006

<br>
<br>

### JSON Precompile

The JSON precompile contract facilitates interoperability between the EVM and Cosmos by providing functions to extract data in various formats.
#### Functions

| Function Name                                                                                       | Input Parameters                     | Return Value             | Description                                                              |
|-----------------------------------------------------------------------------------------------------|--------------------------------------|--------------------------|--------------------------------------------------------------------------|
| `extractAsBytes`         | `input: ` `string`, `key: ` `string` | `{ response: string }`   | Extracts data as bytes from the input using the specified key.           |
| `extractAsBytesList` | `input: ` `string`, `key: ` `string` | `{ response: string[] }` | Extracts data as a list of bytes from the input using the specified key. |
| `extractAsUint256`     | `input: ` `string`, `key: ` `string` | `{ response: string }`   | Extracts data as a uint256 from the input using the specified key.       |

<br>
<br>

### Staking Precompile

The Staking precompile contract provides functions for delegation, re-delegation, and un-delegation staking operations.

#### Functions

| Function Name                                                                          | Input Parameters                                                      | Return Value                 | Description                                                                                                                                                                         |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `delegate`     | `valAddress: ` `string`                                               | `{ success: boolean }`       | Delegates tokens to the specified validator.                                                                                                                                        |
| `redelegate` | `srcAddress: ` `string`, `dstAddress: ` `string`, `amount: ` `string` | `{ success: boolean }`       | Redelegates tokens from the source validator to the destination validator.                                                                                                          |
| `undelegate` | `valAddress: ` `string`, `amount: ` `string`                          | `{ success: boolean }`       | Undelegates tokens from the specified validator.                                                                                                                                    |
| `delegation` | `delegator`: `address`, `valAddress: ` `string`                       | `{ delegation: Delegation }` | Queries delegation by delegator and validator address. Shares in DelegationDetails are usually returned as decimals. To calculate the actual amount, divide the shares by decimals. |

#### Precompile Addresses
0x0000000000000000000000000000000000001005

<br>
<br>

### WASM Precompile

The WASM precompile contract facilitates execution, instantiation, and querying of WebAssembly (WASM) contracts on the KiiChain platform.
#### Functions

| Function Name                                                                         | Input Parameters                                                                                          | Return Value                                 | Description                                                               |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------|
| `execute`         | `contractAddress: ` `string`, `msg: ` `Uint8Array`, `coins: ` `Uint8Array`                                | `{ response: Uint8Array }`                   | Executes a message on the specified contract with provided coins.         |
| `instantiate` | `codeID: ` `string`, `admin: ` `string`, `msg: ` `Uint8Array`, `label: ` `string`, `coins: ` `Uint8Array` | `{ contractAddr: string; data: Uint8Array }` | Instantiates a new contract with the specified code ID, admin, and coins. |
| `query`             | `contractAddress: ` `string`, `req: ` `Uint8Array`                                                        | `{ response: Uint8Array }`                   | Queries the specified contract with the provided request.                 |

#### Precompile Addresses
0x0000000000000000000000000000000000001002


<br>
<br>

### IBC Precompile

The IBC precompile contract facilitates messages exchange between KiiChain and other IBC compatible blockchains.
#### Functions

| Function Name                                                          | Input Parameters                                                                                                                                                                                                                   | Return Value           | Description                                                                                                                                                      |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transfer` | `toAddress: ` `string`, `port: ` `string`, `channel: ` `string`, `denom: ` `string`, `amount: ` `ethers.BigNumberish`, `revisionNumber: ` `BigInt`, `revisionHeight: ` `BigInt`, `timeoutTimestamp: ` `BigInt`,  `memo: ` `String` | `{ success: boolean }` | Transfers tokens from the caller's address to another on a different (IBC compatible) chain.                                                                     |
| `transferWithDefaultTimeout` | `toAddress: ` `string`, `port: ` `string`, `channel: ` `string`, `denom: ` `string`, `amount: ` `ethers.BigNumberish`,  `memo: ` `String`                                                                                                              | `{ success: boolean }` | Transfers tokens from the caller's address to another on a different (IBC compatible) chain. Calculates default timeout height as opposed to `transfer` function |

#### Precompile Addresses
0x0000000000000000000000000000000000001009

