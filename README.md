<h1 align="center">
    <b>KiiJS/TS-SDK</b>
</h1>

<p align="center">
A kiijs library for interacting with KiiChain and other Cosmos-based blockchain networks
</p>

## Getting Started

`kiijs` is a library written in TypeScript used for interacting with kiichain. The library provides classes and methods to conveniently send transactions, query data, and wallet management. The library is implemented based on gRPC-web protocol which sends HTTP/1.5 or HTTP/2 requests to a gRPC proxy server, before serving them as HTTP/2 to gRPC server.

The library support both Node.js and browsers.

## Installation

### Install with npm

```bash
npm install kiijs
```
### Install with yarn

```bash
yarn add kiijs
```

## Getting Started

Below is a simple example for querying an account's balances:

```javascript
import {KiiStargateQueryClient} from "../kiijs/client";

async function main() {

  // connect to Kiichain test network using rpc
  const rpcEndpoint = "https://a.testnet.kiivalidator.com:26658/";
  const client = await KiiStargateQueryClient.connect(
    rpcEndpoint
  );
  
  // show all coin balances
  const address = "kii1s0jekzmfy3ejmf75lh0xfc2zl3958lfk8gqtws";
  const balance = await client.getAllBalances(address);
  console.log('balance', balance);
}
```

## Documentation

[comment]: # (TODO: Update this and other occurence with proper docs url)
The full documentation can be found [here](https://docs.kiiglobal.io/kiipy/).

## Examples

Under the `example` directory, you can find examples of basic ledger interactions using `kiijs`, such as transferring tokens, staking, and deploying.

## Contributing

All contributions are very welcome! Remember, contribution is not only PRs and code, but any help with docs or helping other developers solve their issues are very appreciated!

Read below to learn how you can take part in the KiiJS-SDK project.

### Code of Conduct

Please be sure to read and follow our [Code of Conduct][coc]. By participating, you are expected to uphold this code.

### Contribution Guidelines

Read our [contribution guidelines][contributing] to learn about our issue and pull request submission processes, coding rules, and more.

### Development Guidelines

Read our [development guidelines][developing] to learn about the development processes and workflows.

### Issues, Questions and Discussions

We use [GitHub Issues][issues] for tracking requests and bugs, and [GitHub Discussions][discussion] for general questions and discussion.
