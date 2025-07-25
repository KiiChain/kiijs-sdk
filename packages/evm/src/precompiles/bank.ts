/**
 * The address of the Bank precompile contract.
 * @category Cosmos Interoperability
 */
export const BANK_PRECOMPILE_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000804';

/**
 * The ABI for the Bank precompile contract.
 * @category Cosmos Interoperability
 */
export const BANK_PRECOMPILE_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balances',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'contractAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct Balance[]',
        name: 'balances',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
    ],
    name: 'supplyOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'contractAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct Balance[]',
        name: 'totalSupply',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
