/**
 * The address of the ICS20 precompile contract.
 * @category Cosmos Interoperability
 */
export const ICS20_PRECOMPILE_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000802';

/**
 * The ABI for the ICS20 precompile contract.
 * @category Cosmos Interoperability
 */
export const ICS20_PRECOMPILE_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'grantee',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'granter',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'sourcePort',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceChannel',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'denom',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct Coin[]',
            name: 'spendLimit',
            type: 'tuple[]',
          },
          {
            internalType: 'string[]',
            name: 'allowList',
            type: 'string[]',
          },
          {
            internalType: 'string[]',
            name: 'allowedPacketData',
            type: 'string[]',
          },
        ],
        internalType: 'struct ICS20Allocation[]',
        name: 'allocations',
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
        name: 'grantee',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'sourcePort',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'sourceChannel',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'denom',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct Coin[]',
            name: 'spendLimit',
            type: 'tuple[]',
          },
          {
            internalType: 'string[]',
            name: 'allowList',
            type: 'string[]',
          },
          {
            internalType: 'string[]',
            name: 'allowedPacketData',
            type: 'string[]',
          },
        ],
        internalType: 'struct ICS20Allocation[]',
        name: 'allocations',
        type: 'tuple[]',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'grantee',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'sourcePort',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceChannel',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'denom',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'trace',
        type: 'string',
      },
    ],
    name: 'denomHash',
    outputs: [
      {
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
    ],
    name: 'denomTrace',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'path',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'baseDenom',
            type: 'string',
          },
        ],
        internalType: 'struct DenomTrace',
        name: 'denomTrace',
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
        name: 'pageRequest',
        type: 'tuple',
      },
    ],
    name: 'denomTraces',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'path',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'baseDenom',
            type: 'string',
          },
        ],
        internalType: 'struct DenomTrace[]',
        name: 'denomTraces',
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
        name: 'grantee',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'sourcePort',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceChannel',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'denom',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'grantee',
        type: 'address',
      },
    ],
    name: 'revoke',
    outputs: [
      {
        internalType: 'bool',
        name: 'revoked',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'sourcePort',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'sourceChannel',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'denom',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'receiver',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'uint64',
            name: 'revisionNumber',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'revisionHeight',
            type: 'uint64',
          },
        ],
        internalType: 'struct Height',
        name: 'timeoutHeight',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'timeoutTimestamp',
        type: 'uint64',
      },
      {
        internalType: 'string',
        name: 'memo',
        type: 'string',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'uint64',
        name: 'nextSequence',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
