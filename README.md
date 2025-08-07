# KiiJs

KiiJS is a monorepo that contains multiple NPM libraries for writing applications that interact with KiiChain.

## Documentation

Each package has it's own documentation under its readme file.

## Packages

KiiJS consists of smaller NPM packages within the @kiichain namespace. For more detailed documentation on each package, please refer to the table below.

| Package                                                 | Description                                                                                                                     |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [@kiichain/kiijs-evm](packages/evm)                             | Typescript library containing helper functions for interacting with the EVM on Kiichain.                                             |
| [@kiichain/kiijs-proto](packages/proto)               | Typescript support for KiiChain protofiles, generated with Telescope                                   |
| [@kiichain/kiijs-rwa](packages/rwa)               | Typescript support for KiiChain RWA transactions                                   |
| [@kiichain/kiijs-utils](packages/utils)               | Typescript support for a few generic Kiichain fucntions, like address conversion or ethscp256-1 signer                                    |

## Contributing

All contributions are very welcome! Remember, contribution is not only PRs and code, but any help with docs or helping other developers solve their issues are very appreciated!

Read below to learn how you can take part in the KiiJS-SDK project.

### Code of Conduct

Please be sure to read and follow our [Code of Conduct][coc]. By participating, you are expected to uphold this code.

### Contribution Guidelines

Read our [contribution guidelines][contributing] to learn about our issue and pull request submission processes, coding rules, and more.

### Issues, Questions and Discussions

We use [GitHub Issues][issues] for tracking requests and bugs, and for general questions and discussion.

## License

The KiiJS-SDK project is licensed under [Apache License 2.0][license].

[contributing]: ./CONTRIBUTING.md
[coc]: ./CODE_OF_CONDUCT.md
[issues]: https://github.com/KiiChain/kiijs-sdk/issues
[license]: ./LICENSE

### Example: validateAddress

```ts
import { validateAddress } from 'kiijs-sdk';

const address = '0x1234567890abcdef1234567890abcdef12345678';
const isValid = validateAddress(address);

console.log('Valid address:', isValid); // Output: true or false
