/**
 * The address of the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const DISTRIBUTION_PRECOMPILE_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000801';

/**
 * The ABI for the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const DISTRIBUTION_PRECOMPILE_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'maxRetrieve',
        type: 'uint32',
      },
    ],
    name: 'claimRewards',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
    ],
    name: 'delegationRewards',
    outputs: [
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
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8',
          },
        ],
        internalType: 'struct DecCoin[]',
        name: 'rewards',
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
        name: 'delegatorAddress',
        type: 'address',
      },
    ],
    name: 'delegationTotalRewards',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'validatorAddress',
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
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct DecCoin[]',
            name: 'reward',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct DelegationDelegatorReward[]',
        name: 'rewards',
        type: 'tuple[]',
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
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8',
          },
        ],
        internalType: 'struct DecCoin[]',
        name: 'total',
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
        name: 'delegatorAddress',
        type: 'address',
      },
    ],
    name: 'delegatorValidators',
    outputs: [
      {
        internalType: 'string[]',
        name: 'validators',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address',
      },
    ],
    name: 'delegatorWithdrawAddress',
    outputs: [
      {
        internalType: 'string',
        name: 'withdrawAddress',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'depositor',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'fundCommunityPool',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'withdrawerAddress',
        type: 'string',
      },
    ],
    name: 'setWithdrawAddress',
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
  {
    inputs: [
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
    ],
    name: 'validatorCommission',
    outputs: [
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
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8',
          },
        ],
        internalType: 'struct DecCoin[]',
        name: 'commission',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
    ],
    name: 'validatorDistributionInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'operatorAddress',
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
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct DecCoin[]',
            name: 'selfBondRewards',
            type: 'tuple[]',
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
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct DecCoin[]',
            name: 'commission',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct ValidatorDistributionInfo',
        name: 'distributionInfo',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
    ],
    name: 'validatorOutstandingRewards',
    outputs: [
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
          {
            internalType: 'uint8',
            name: 'precision',
            type: 'uint8',
          },
        ],
        internalType: 'struct DecCoin[]',
        name: 'rewards',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
      {
        internalType: 'uint64',
        name: 'startingHeight',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'endingHeight',
        type: 'uint64',
      },
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
    name: 'validatorSlashes',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'validatorPeriod',
            type: 'uint64',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'uint8',
                name: 'precision',
                type: 'uint8',
              },
            ],
            internalType: 'struct Dec',
            name: 'fraction',
            type: 'tuple',
          },
        ],
        internalType: 'struct ValidatorSlashEvent[]',
        name: 'slashes',
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
        name: 'delegatorAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
    ],
    name: 'withdrawDelegatorRewards',
    outputs: [
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
        name: 'amount',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'validatorAddress',
        type: 'string',
      },
    ],
    name: 'withdrawValidatorCommission',
    outputs: [
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
        name: 'amount',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
