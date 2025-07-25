/**
 * The address of the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000800';

/**
 * The ABI for the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'grantee', type: 'address' },
      { internalType: 'address', name: 'granter', type: 'address' },
      { internalType: 'string', name: 'method', type: 'string' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: 'remaining', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'grantee', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'string[]', name: 'methods', type: 'string[]' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: 'approved', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'validatorAddress', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'creationHeight', type: 'uint256' },
    ],
    name: 'cancelUnbondingDelegation',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'moniker', type: 'string' },
          { internalType: 'string', name: 'identity', type: 'string' },
          { internalType: 'string', name: 'website', type: 'string' },
          { internalType: 'string', name: 'securityContact', type: 'string' },
          { internalType: 'string', name: 'details', type: 'string' },
        ],
        internalType: 'struct Description',
        name: 'description',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'rate', type: 'uint256' },
          { internalType: 'uint256', name: 'maxRate', type: 'uint256' },
          { internalType: 'uint256', name: 'maxChangeRate', type: 'uint256' },
        ],
        internalType: 'struct CommissionRates',
        name: 'commissionRates',
        type: 'tuple',
      },
      { internalType: 'uint256', name: 'minSelfDelegation', type: 'uint256' },
      { internalType: 'address', name: 'validatorAddress', type: 'address' },
      { internalType: 'string', name: 'pubkey', type: 'string' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'createValidator',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'grantee', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'string[]', name: 'methods', type: 'string[]' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: 'approved', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'validatorAddress', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'delegate',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'validatorAddress', type: 'string' },
    ],
    name: 'delegation',
    outputs: [
      { internalType: 'uint256', name: 'shares', type: 'uint256' },
      {
        components: [
          { internalType: 'string', name: 'denom', type: 'string' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        internalType: 'struct Coin',
        name: 'balance',
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
          { internalType: 'string', name: 'moniker', type: 'string' },
          { internalType: 'string', name: 'identity', type: 'string' },
          { internalType: 'string', name: 'website', type: 'string' },
          { internalType: 'string', name: 'securityContact', type: 'string' },
          { internalType: 'string', name: 'details', type: 'string' },
        ],
        internalType: 'struct Description',
        name: 'description',
        type: 'tuple',
      },
      { internalType: 'address', name: 'validatorAddress', type: 'address' },
      { internalType: 'int256', name: 'commissionRate', type: 'int256' },
      { internalType: 'int256', name: 'minSelfDelegation', type: 'int256' },
    ],
    name: 'editValidator',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'grantee', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'string[]', name: 'methods', type: 'string[]' },
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: 'approved', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'validatorSrcAddress', type: 'string' },
      { internalType: 'string', name: 'validatorDstAddress', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'redelegate',
    outputs: [{ internalType: 'int64', name: 'completionTime', type: 'int64' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'srcValidatorAddress', type: 'string' },
      { internalType: 'string', name: 'dstValidatorAddress', type: 'string' },
    ],
    name: 'redelegation',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'delegatorAddress', type: 'string' },
          {
            internalType: 'string',
            name: 'validatorSrcAddress',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'validatorDstAddress',
            type: 'string',
          },
          {
            components: [
              { internalType: 'int64', name: 'creationHeight', type: 'int64' },
              { internalType: 'int64', name: 'completionTime', type: 'int64' },
              {
                internalType: 'uint256',
                name: 'initialBalance',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'sharesDst', type: 'uint256' },
            ],
            internalType: 'struct RedelegationEntry[]',
            name: 'entries',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct RedelegationOutput',
        name: 'redelegation',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'srcValidatorAddress', type: 'string' },
      { internalType: 'string', name: 'dstValidatorAddress', type: 'string' },
      {
        components: [
          { internalType: 'bytes', name: 'key', type: 'bytes' },
          { internalType: 'uint64', name: 'offset', type: 'uint64' },
          { internalType: 'uint64', name: 'limit', type: 'uint64' },
          { internalType: 'bool', name: 'countTotal', type: 'bool' },
          { internalType: 'bool', name: 'reverse', type: 'bool' },
        ],
        internalType: 'struct PageRequest',
        name: 'pageRequest',
        type: 'tuple',
      },
    ],
    name: 'redelegations',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'string',
                name: 'delegatorAddress',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'validatorSrcAddress',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'validatorDstAddress',
                type: 'string',
              },
              {
                components: [
                  {
                    internalType: 'int64',
                    name: 'creationHeight',
                    type: 'int64',
                  },
                  {
                    internalType: 'int64',
                    name: 'completionTime',
                    type: 'int64',
                  },
                  {
                    internalType: 'uint256',
                    name: 'initialBalance',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'sharesDst',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct RedelegationEntry[]',
                name: 'entries',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct Redelegation',
            name: 'redelegation',
            type: 'tuple',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'int64',
                    name: 'creationHeight',
                    type: 'int64',
                  },
                  {
                    internalType: 'int64',
                    name: 'completionTime',
                    type: 'int64',
                  },
                  {
                    internalType: 'uint256',
                    name: 'initialBalance',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'sharesDst',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct RedelegationEntry',
                name: 'redelegationEntry',
                type: 'tuple',
              },
              { internalType: 'uint256', name: 'balance', type: 'uint256' },
            ],
            internalType: 'struct RedelegationEntryResponse[]',
            name: 'entries',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct RedelegationResponse[]',
        name: 'response',
        type: 'tuple[]',
      },
      {
        components: [
          { internalType: 'bytes', name: 'nextKey', type: 'bytes' },
          { internalType: 'uint64', name: 'total', type: 'uint64' },
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
      { internalType: 'address', name: 'grantee', type: 'address' },
      { internalType: 'string[]', name: 'methods', type: 'string[]' },
    ],
    name: 'revoke',
    outputs: [{ internalType: 'bool', name: 'revoked', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'validatorAddress', type: 'string' },
    ],
    name: 'unbondingDelegation',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'delegatorAddress', type: 'string' },
          { internalType: 'string', name: 'validatorAddress', type: 'string' },
          {
            components: [
              { internalType: 'int64', name: 'creationHeight', type: 'int64' },
              { internalType: 'int64', name: 'completionTime', type: 'int64' },
              {
                internalType: 'uint256',
                name: 'initialBalance',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'balance', type: 'uint256' },
              { internalType: 'uint64', name: 'unbondingId', type: 'uint64' },
              {
                internalType: 'int64',
                name: 'unbondingOnHoldRefCount',
                type: 'int64',
              },
            ],
            internalType: 'struct UnbondingDelegationEntry[]',
            name: 'entries',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct UnbondingDelegationOutput',
        name: 'unbondingDelegation',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatorAddress', type: 'address' },
      { internalType: 'string', name: 'validatorAddress', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'undelegate',
    outputs: [{ internalType: 'int64', name: 'completionTime', type: 'int64' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'validatorAddress', type: 'address' },
    ],
    name: 'validator',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'operatorAddress', type: 'string' },
          { internalType: 'string', name: 'consensusPubkey', type: 'string' },
          { internalType: 'bool', name: 'jailed', type: 'bool' },
          { internalType: 'enum BondStatus', name: 'status', type: 'uint8' },
          { internalType: 'uint256', name: 'tokens', type: 'uint256' },
          { internalType: 'uint256', name: 'delegatorShares', type: 'uint256' },
          { internalType: 'string', name: 'description', type: 'string' },
          { internalType: 'int64', name: 'unbondingHeight', type: 'int64' },
          { internalType: 'int64', name: 'unbondingTime', type: 'int64' },
          { internalType: 'uint256', name: 'commission', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'minSelfDelegation',
            type: 'uint256',
          },
        ],
        internalType: 'struct Validator',
        name: 'validator',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'status', type: 'string' },
      {
        components: [
          { internalType: 'bytes', name: 'key', type: 'bytes' },
          { internalType: 'uint64', name: 'offset', type: 'uint64' },
          { internalType: 'uint64', name: 'limit', type: 'uint64' },
          { internalType: 'bool', name: 'countTotal', type: 'bool' },
          { internalType: 'bool', name: 'reverse', type: 'bool' },
        ],
        internalType: 'struct PageRequest',
        name: 'pageRequest',
        type: 'tuple',
      },
    ],
    name: 'validators',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'operatorAddress', type: 'string' },
          { internalType: 'string', name: 'consensusPubkey', type: 'string' },
          { internalType: 'bool', name: 'jailed', type: 'bool' },
          { internalType: 'enum BondStatus', name: 'status', type: 'uint8' },
          { internalType: 'uint256', name: 'tokens', type: 'uint256' },
          { internalType: 'uint256', name: 'delegatorShares', type: 'uint256' },
          { internalType: 'string', name: 'description', type: 'string' },
          { internalType: 'int64', name: 'unbondingHeight', type: 'int64' },
          { internalType: 'int64', name: 'unbondingTime', type: 'int64' },
          { internalType: 'uint256', name: 'commission', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'minSelfDelegation',
            type: 'uint256',
          },
        ],
        internalType: 'struct Validator[]',
        name: 'validators',
        type: 'tuple[]',
      },
      {
        components: [
          { internalType: 'bytes', name: 'nextKey', type: 'bytes' },
          { internalType: 'uint64', name: 'total', type: 'uint64' },
        ],
        internalType: 'struct PageResponse',
        name: 'pageResponse',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
