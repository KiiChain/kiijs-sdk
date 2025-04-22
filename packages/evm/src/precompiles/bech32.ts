/**
 * The address of the Bech32 precompile contract.
 * @category Cosmos Interoperability
 */
export const BECH32_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000000400';

/**
 * The ABI for the Bech32 precompile contract.
 * @category Cosmos Interoperability
 */
export const BECH32_PRECOMPILE_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "bech32Address",
          "type": "string"
        }
      ],
      "name": "bech32ToHex",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "prefix",
          "type": "string"
        }
      ],
      "name": "hexToBech32",
      "outputs": [
        {
          "internalType": "string",
          "name": "bech32Address",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;
