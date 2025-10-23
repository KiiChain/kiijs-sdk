/**
 * The address of the ICS20 precompile contract.
 * @category Cosmos Interoperability
 */
export const ICS20_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000802' as const;

/**
 * The ABI for the ICS20 precompile contract.
 * @category Cosmos Interoperability
 */
export const ICS20_PRECOMPILE_ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
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
      {
        name: 'sourcePort',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'sourceChannel',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'denom', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'memo', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'IBCTransfer',
  },
  {
    type: 'function',
    inputs: [{ name: 'hash', internalType: 'string', type: 'string' }],
    name: 'denom',
    outputs: [
      {
        name: 'denom',
        internalType: 'struct Denom',
        type: 'tuple',
        components: [
          { name: 'base', internalType: 'string', type: 'string' },
          {
            name: 'trace',
            internalType: 'struct Hop[]',
            type: 'tuple[]',
            components: [
              { name: 'portId', internalType: 'string', type: 'string' },
              { name: 'channelId', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'trace', internalType: 'string', type: 'string' }],
    name: 'denomHash',
    outputs: [{ name: 'hash', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pageRequest',
        internalType: 'struct PageRequest',
        type: 'tuple',
        components: [
          { name: 'key', internalType: 'bytes', type: 'bytes' },
          { name: 'offset', internalType: 'uint64', type: 'uint64' },
          { name: 'limit', internalType: 'uint64', type: 'uint64' },
          { name: 'countTotal', internalType: 'bool', type: 'bool' },
          { name: 'reverse', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'denoms',
    outputs: [
      {
        name: 'denoms',
        internalType: 'struct Denom[]',
        type: 'tuple[]',
        components: [
          { name: 'base', internalType: 'string', type: 'string' },
          {
            name: 'trace',
            internalType: 'struct Hop[]',
            type: 'tuple[]',
            components: [
              { name: 'portId', internalType: 'string', type: 'string' },
              { name: 'channelId', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
      {
        name: 'pageResponse',
        internalType: 'struct PageResponse',
        type: 'tuple',
        components: [
          { name: 'nextKey', internalType: 'bytes', type: 'bytes' },
          { name: 'total', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sourcePort', internalType: 'string', type: 'string' },
      { name: 'sourceChannel', internalType: 'string', type: 'string' },
      { name: 'denom', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'string', type: 'string' },
      {
        name: 'timeoutHeight',
        internalType: 'struct Height',
        type: 'tuple',
        components: [
          { name: 'revisionNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'revisionHeight', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: 'timeoutTimestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'memo', internalType: 'string', type: 'string' },
    ],
    name: 'transfer',
    outputs: [{ name: 'nextSequence', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
] as const;
