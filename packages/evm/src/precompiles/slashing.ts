/**
 * The address of the Slashing precompile contract.
 * @category Cosmos Interoperability
 */
export const SLASHING_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000806' as const;

/**
 * The ABI for the Slashing precompile contract.
 * @category Cosmos Interoperability
 */
export const SLASHING_PRECOMPILE_ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ValidatorUnjailed',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct Params',
        type: 'tuple',
        components: [
          { name: 'signedBlocksWindow', internalType: 'int64', type: 'int64' },
          {
            name: 'minSignedPerWindow',
            internalType: 'struct Dec',
            type: 'tuple',
            components: [
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'precision', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'downtimeJailDuration',
            internalType: 'int64',
            type: 'int64',
          },
          {
            name: 'slashFractionDoubleSign',
            internalType: 'struct Dec',
            type: 'tuple',
            components: [
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'precision', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'slashFractionDowntime',
            internalType: 'struct Dec',
            type: 'tuple',
            components: [
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'precision', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'consAddress', internalType: 'address', type: 'address' }],
    name: 'getSigningInfo',
    outputs: [
      {
        name: 'signingInfo',
        internalType: 'struct SigningInfo',
        type: 'tuple',
        components: [
          {
            name: 'validatorAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'startHeight', internalType: 'int64', type: 'int64' },
          { name: 'indexOffset', internalType: 'int64', type: 'int64' },
          { name: 'jailedUntil', internalType: 'int64', type: 'int64' },
          { name: 'tombstoned', internalType: 'bool', type: 'bool' },
          { name: 'missedBlocksCounter', internalType: 'int64', type: 'int64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pagination',
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
    name: 'getSigningInfos',
    outputs: [
      {
        name: 'signingInfos',
        internalType: 'struct SigningInfo[]',
        type: 'tuple[]',
        components: [
          {
            name: 'validatorAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'startHeight', internalType: 'int64', type: 'int64' },
          { name: 'indexOffset', internalType: 'int64', type: 'int64' },
          { name: 'jailedUntil', internalType: 'int64', type: 'int64' },
          { name: 'tombstoned', internalType: 'bool', type: 'bool' },
          { name: 'missedBlocksCounter', internalType: 'int64', type: 'int64' },
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
      { name: 'validatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'unjail',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const;
