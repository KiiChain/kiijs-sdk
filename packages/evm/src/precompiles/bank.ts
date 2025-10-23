//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BankPrecompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const BANK_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000804' as const;

export const BANK_PRECOMPILE_ABI = [
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balances',
    outputs: [
      {
        name: 'balances',
        internalType: 'struct Balance[]',
        type: 'tuple[]',
        components: [
          { name: 'contractAddress', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'erc20Address', internalType: 'address', type: 'address' },
    ],
    name: 'supplyOf',
    outputs: [
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: 'totalSupply',
        internalType: 'struct Balance[]',
        type: 'tuple[]',
        components: [
          { name: 'contractAddress', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const;
