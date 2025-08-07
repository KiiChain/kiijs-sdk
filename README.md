# KiiJs

KiiJS is a monorepo that contains multiple NPM libraries for writing applications that interact with KiiChain.

## Documentation

Each package has its own documentation under its README file.

## Packages

KiiJS consists of smaller NPM packages within the `@kiichain` namespace. For more detailed documentation on each package, please refer to the table below.

| Package                                        | Description                                                                                                    |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [@kiichain/kiijs-evm](packages/evm)           | TypeScript library containing helper functions for interacting with the EVM on KiiChain.                      |
| [@kiichain/kiijs-proto](packages/proto)       | TypeScript support for KiiChain proto files, generated with Telescope.                                        |
| [@kiichain/kiijs-rwa](packages/rwa)           | TypeScript support for KiiChain RWA transactions.                                                             |
| [@kiichain/kiijs-utils](packages/utils)       | TypeScript utilities for common KiiChain functions, like address validation or `ethsecp256-1` signer.         |

## Contributing

All contributions are very welcome! Remember, contributions are not only PRs and code, but also help with docs or assisting other developers with issues.

Read below to learn how you can take part in the KiiJS-SDK project.

### Code of Conduct

Please be sure to read and follow our [Code of Conduct][coc]. By participating, you are expected to uphold this code.

### Contribution Guidelines

Read our [contribution guidelines][contributing] to learn about our issue and pull request submission processes, coding rules, and more.

### Issues, Questions, and Discussions

We use [GitHub Issues](https://github.com/KiiChain/kiijs-sdk/issues) for tracking requests and bugs, and for general questions and discussion.

## Usage

### Example: validateAddress

```ts
import { validateAddress } from '@kiichain/kiijs-utils';

const address = '0x1234567890abcdef1234567890abcdef12345678';
const isValid = validateAddress(address);

console.log('Valid address:', isValid); // Output: true or false
