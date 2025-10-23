export const BECH32_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000400' as const;

export const BECH32_PRECOMPILE_ABI = [
  {
    type: 'function',
    inputs: [{ name: 'bech32Address', internalType: 'string', type: 'string' }],
    name: 'bech32ToHex',
    outputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'prefix', internalType: 'string', type: 'string' },
    ],
    name: 'hexToBech32',
    outputs: [
      { name: 'bech32Address', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
] as const;
