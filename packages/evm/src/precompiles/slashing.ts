/**
 * The address of the Slashing precompile contract.
 * @category Cosmos Interoperability
 */
export const SLASHING_PRECOMPILE_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000806';

/**
 * The ABI for the Slashing precompile contract.
 * @category Cosmos Interoperability
 */
export const SLASHING_PRECOMPILE_ABI = [
  {
    inputs: [],
    name: 'getParams',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'signedBlocksWindow',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'minSignedPerWindow',
            type: 'string',
          },
          {
            internalType: 'uint64',
            name: 'downtimeJailDuration',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'slashFractionDoubleSign',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'slashFractionDowntime',
            type: 'string',
          },
        ],
        internalType: 'struct Params',
        name: 'params',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'consAddress',
        type: 'address',
      },
    ],
    name: 'getSigningInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address',
          },
          {
            internalType: 'uint64',
            name: 'startHeight',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'indexOffset',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'jailedUntil',
            type: 'uint64',
          },
          {
            internalType: 'bool',
            name: 'tombstoned',
            type: 'bool',
          },
          {
            internalType: 'uint64',
            name: 'missedBlocksCounter',
            type: 'uint64',
          },
        ],
        internalType: 'struct SigningInfo',
        name: 'signingInfo',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'key',
            type: 'bytes',
          },
          {
            internalType: 'uint64',
            name: 'offset',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'limit',
            type: 'uint64',
          },
          {
            internalType: 'bool',
            name: 'countTotal',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'reverse',
            type: 'bool',
          },
        ],
        internalType: 'struct PageRequest',
        name: 'pagination',
        type: 'tuple',
      },
    ],
    name: 'getSigningInfos',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address',
          },
          {
            internalType: 'uint64',
            name: 'startHeight',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'indexOffset',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'jailedUntil',
            type: 'uint64',
          },
          {
            internalType: 'bool',
            name: 'tombstoned',
            type: 'bool',
          },
          {
            internalType: 'uint64',
            name: 'missedBlocksCounter',
            type: 'uint64',
          },
        ],
        internalType: 'struct SigningInfo[]',
        name: 'signingInfos',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'nextKey',
            type: 'bytes',
          },
          {
            internalType: 'uint64',
            name: 'total',
            type: 'uint64',
          },
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address',
      },
    ],
    name: 'unjail',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
