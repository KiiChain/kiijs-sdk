export const STAKING_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000800' as const;

export const STAKING_PRECOMPILE_ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'validatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'creationHeight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CancelUnbondingDelegation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CreateValidator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'validatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newShares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Delegate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'commissionRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'minSelfDelegation',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
    ],
    name: 'EditValidator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'validatorSrcAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'validatorDstAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'completionTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Redelegate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'validatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'completionTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Unbond',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'creationHeight', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'cancelUnbondingDelegation',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'description',
        internalType: 'struct Description',
        type: 'tuple',
        components: [
          { name: 'moniker', internalType: 'string', type: 'string' },
          { name: 'identity', internalType: 'string', type: 'string' },
          { name: 'website', internalType: 'string', type: 'string' },
          { name: 'securityContact', internalType: 'string', type: 'string' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'commissionRates',
        internalType: 'struct CommissionRates',
        type: 'tuple',
        components: [
          { name: 'rate', internalType: 'uint256', type: 'uint256' },
          { name: 'maxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'maxChangeRate', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'minSelfDelegation', internalType: 'uint256', type: 'uint256' },
      { name: 'validatorAddress', internalType: 'address', type: 'address' },
      { name: 'pubkey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createValidator',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'delegate',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'delegation',
    outputs: [
      { name: 'shares', internalType: 'uint256', type: 'uint256' },
      {
        name: 'balance',
        internalType: 'struct Coin',
        type: 'tuple',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'description',
        internalType: 'struct Description',
        type: 'tuple',
        components: [
          { name: 'moniker', internalType: 'string', type: 'string' },
          { name: 'identity', internalType: 'string', type: 'string' },
          { name: 'website', internalType: 'string', type: 'string' },
          { name: 'securityContact', internalType: 'string', type: 'string' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
      { name: 'validatorAddress', internalType: 'address', type: 'address' },
      { name: 'commissionRate', internalType: 'int256', type: 'int256' },
      { name: 'minSelfDelegation', internalType: 'int256', type: 'int256' },
    ],
    name: 'editValidator',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'validatorSrcAddress', internalType: 'string', type: 'string' },
      { name: 'validatorDstAddress', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'redelegate',
    outputs: [{ name: 'completionTime', internalType: 'int64', type: 'int64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'srcValidatorAddress', internalType: 'string', type: 'string' },
      { name: 'dstValidatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'redelegation',
    outputs: [
      {
        name: 'redelegation',
        internalType: 'struct RedelegationOutput',
        type: 'tuple',
        components: [
          { name: 'delegatorAddress', internalType: 'string', type: 'string' },
          {
            name: 'validatorSrcAddress',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'validatorDstAddress',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'entries',
            internalType: 'struct RedelegationEntry[]',
            type: 'tuple[]',
            components: [
              { name: 'creationHeight', internalType: 'int64', type: 'int64' },
              { name: 'completionTime', internalType: 'int64', type: 'int64' },
              {
                name: 'initialBalance',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'sharesDst', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'srcValidatorAddress', internalType: 'string', type: 'string' },
      { name: 'dstValidatorAddress', internalType: 'string', type: 'string' },
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
    name: 'redelegations',
    outputs: [
      {
        name: 'response',
        internalType: 'struct RedelegationResponse[]',
        type: 'tuple[]',
        components: [
          {
            name: 'redelegation',
            internalType: 'struct Redelegation',
            type: 'tuple',
            components: [
              {
                name: 'delegatorAddress',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'validatorSrcAddress',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'validatorDstAddress',
                internalType: 'string',
                type: 'string',
              },
              {
                name: 'entries',
                internalType: 'struct RedelegationEntry[]',
                type: 'tuple[]',
                components: [
                  {
                    name: 'creationHeight',
                    internalType: 'int64',
                    type: 'int64',
                  },
                  {
                    name: 'completionTime',
                    internalType: 'int64',
                    type: 'int64',
                  },
                  {
                    name: 'initialBalance',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  {
                    name: 'sharesDst',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'entries',
            internalType: 'struct RedelegationEntryResponse[]',
            type: 'tuple[]',
            components: [
              {
                name: 'redelegationEntry',
                internalType: 'struct RedelegationEntry',
                type: 'tuple',
                components: [
                  {
                    name: 'creationHeight',
                    internalType: 'int64',
                    type: 'int64',
                  },
                  {
                    name: 'completionTime',
                    internalType: 'int64',
                    type: 'int64',
                  },
                  {
                    name: 'initialBalance',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  {
                    name: 'sharesDst',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
              { name: 'balance', internalType: 'uint256', type: 'uint256' },
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
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'unbondingDelegation',
    outputs: [
      {
        name: 'unbondingDelegation',
        internalType: 'struct UnbondingDelegationOutput',
        type: 'tuple',
        components: [
          { name: 'delegatorAddress', internalType: 'string', type: 'string' },
          { name: 'validatorAddress', internalType: 'string', type: 'string' },
          {
            name: 'entries',
            internalType: 'struct UnbondingDelegationEntry[]',
            type: 'tuple[]',
            components: [
              { name: 'creationHeight', internalType: 'int64', type: 'int64' },
              { name: 'completionTime', internalType: 'int64', type: 'int64' },
              {
                name: 'initialBalance',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'balance', internalType: 'uint256', type: 'uint256' },
              { name: 'unbondingId', internalType: 'uint64', type: 'uint64' },
              {
                name: 'unbondingOnHoldRefCount',
                internalType: 'int64',
                type: 'int64',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'undelegate',
    outputs: [{ name: 'completionTime', internalType: 'int64', type: 'int64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'validatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'validator',
    outputs: [
      {
        name: 'validator',
        internalType: 'struct Validator',
        type: 'tuple',
        components: [
          { name: 'operatorAddress', internalType: 'string', type: 'string' },
          { name: 'consensusPubkey', internalType: 'string', type: 'string' },
          { name: 'jailed', internalType: 'bool', type: 'bool' },
          { name: 'status', internalType: 'enum BondStatus', type: 'uint8' },
          { name: 'tokens', internalType: 'uint256', type: 'uint256' },
          { name: 'delegatorShares', internalType: 'uint256', type: 'uint256' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'unbondingHeight', internalType: 'int64', type: 'int64' },
          { name: 'unbondingTime', internalType: 'int64', type: 'int64' },
          { name: 'commission', internalType: 'uint256', type: 'uint256' },
          {
            name: 'minSelfDelegation',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'status', internalType: 'string', type: 'string' },
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
    name: 'validators',
    outputs: [
      {
        name: 'validators',
        internalType: 'struct Validator[]',
        type: 'tuple[]',
        components: [
          { name: 'operatorAddress', internalType: 'string', type: 'string' },
          { name: 'consensusPubkey', internalType: 'string', type: 'string' },
          { name: 'jailed', internalType: 'bool', type: 'bool' },
          { name: 'status', internalType: 'enum BondStatus', type: 'uint8' },
          { name: 'tokens', internalType: 'uint256', type: 'uint256' },
          { name: 'delegatorShares', internalType: 'uint256', type: 'uint256' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'unbondingHeight', internalType: 'int64', type: 'int64' },
          { name: 'unbondingTime', internalType: 'int64', type: 'int64' },
          { name: 'commission', internalType: 'uint256', type: 'uint256' },
          {
            name: 'minSelfDelegation',
            internalType: 'uint256',
            type: 'uint256',
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
] as const;
