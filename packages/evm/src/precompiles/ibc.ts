/**
 * The address of the ibc precompile contract.
 * @category Cosmos Interoperability
 */
export const IBC_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000001002' as const;

/**
 * The ABI for the IBC precompile contract.
 * @category Cosmos Interoperability
 */
export const IBC_PRECOMPILE_ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      { name: 'denom', internalType: 'string', type: 'string', indexed: true },
      { name: 'port', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'channel',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'revisionNumber',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'revisionHeight',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'timeoutTimestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      { name: 'memo', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'string', type: 'string' },
      { name: 'port', internalType: 'string', type: 'string' },
      { name: 'channel', internalType: 'string', type: 'string' },
      { name: 'denom', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'revisionNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'revisionHeight', internalType: 'uint64', type: 'uint64' },
      { name: 'timeoutTimestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'memo', internalType: 'string', type: 'string' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'string', type: 'string' },
      { name: 'port', internalType: 'string', type: 'string' },
      { name: 'channel', internalType: 'string', type: 'string' },
      { name: 'denom', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'memo', internalType: 'string', type: 'string' },
    ],
    name: 'transferWithDefaultTimeout',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const;
