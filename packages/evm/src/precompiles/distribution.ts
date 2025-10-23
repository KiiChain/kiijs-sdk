export const DISTRIBUTION_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000801' as const;

export const DISTRIBUTION_PRECOMPILE_ABI = [
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
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimRewards',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositor',
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
      { name: 'denom', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DepositValidatorRewardsPool',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'denom', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FundCommunityPool',
  },
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
        name: 'withdrawerAddress',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SetWithdrawerAddress',
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
    ],
    name: 'WithdrawDelegatorReward',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validatorAddress',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      {
        name: 'commission',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawValidatorCommission',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'maxRetrieve', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'claimRewards',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'communityPool',
    outputs: [
      {
        name: 'coins',
        internalType: 'struct DecCoin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'precision', internalType: 'uint8', type: 'uint8' },
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
    name: 'delegationRewards',
    outputs: [
      {
        name: 'rewards',
        internalType: 'struct DecCoin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'precision', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'delegationTotalRewards',
    outputs: [
      {
        name: 'rewards',
        internalType: 'struct DelegationDelegatorReward[]',
        type: 'tuple[]',
        components: [
          { name: 'validatorAddress', internalType: 'string', type: 'string' },
          {
            name: 'reward',
            internalType: 'struct DecCoin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
              { name: 'precision', internalType: 'uint8', type: 'uint8' },
            ],
          },
        ],
      },
      {
        name: 'total',
        internalType: 'struct DecCoin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'precision', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'delegatorValidators',
    outputs: [
      { name: 'validators', internalType: 'string[]', type: 'string[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'delegatorWithdrawAddress',
    outputs: [
      { name: 'withdrawAddress', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositor', internalType: 'address', type: 'address' },
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
      {
        name: 'amount',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'depositValidatorRewardsPool',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositor', internalType: 'address', type: 'address' },
      {
        name: 'amount',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'fundCommunityPool',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatorAddress', internalType: 'address', type: 'address' },
      { name: 'withdrawerAddress', internalType: 'string', type: 'string' },
    ],
    name: 'setWithdrawAddress',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'validatorCommission',
    outputs: [
      {
        name: 'commission',
        internalType: 'struct DecCoin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'precision', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'validatorDistributionInfo',
    outputs: [
      {
        name: 'distributionInfo',
        internalType: 'struct ValidatorDistributionInfo',
        type: 'tuple',
        components: [
          { name: 'operatorAddress', internalType: 'string', type: 'string' },
          {
            name: 'selfBondRewards',
            internalType: 'struct DecCoin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
              { name: 'precision', internalType: 'uint8', type: 'uint8' },
            ],
          },
          {
            name: 'commission',
            internalType: 'struct DecCoin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
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
    inputs: [
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'validatorOutstandingRewards',
    outputs: [
      {
        name: 'rewards',
        internalType: 'struct DecCoin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'precision', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
      { name: 'startingHeight', internalType: 'uint64', type: 'uint64' },
      { name: 'endingHeight', internalType: 'uint64', type: 'uint64' },
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
    name: 'validatorSlashes',
    outputs: [
      {
        name: 'slashes',
        internalType: 'struct ValidatorSlashEvent[]',
        type: 'tuple[]',
        components: [
          { name: 'validatorPeriod', internalType: 'uint64', type: 'uint64' },
          {
            name: 'fraction',
            internalType: 'struct Dec',
            type: 'tuple',
            components: [
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'precision', internalType: 'uint8', type: 'uint8' },
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
    name: 'withdrawDelegatorRewards',
    outputs: [
      {
        name: 'amount',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'validatorAddress', internalType: 'string', type: 'string' },
    ],
    name: 'withdrawValidatorCommission',
    outputs: [
      {
        name: 'amount',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const;
