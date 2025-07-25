/**
 * The address of the Governance precompile contract.
 * @category Cosmos Interoperability
 */
export const GOVERNANCE_PRECOMPILE_ADDRESS: `0x${string}` =
  '0x0000000000000000000000000000000000000805';

/**
 * The ABI for the Governance precompile contract.
 * @category Cosmos Interoperability
 */
export const GOVERNANCE_PRECOMPILE_ABI = [
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'proposalId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'depositor',
        type: 'address',
      },
    ],
    name: 'getDeposit',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'proposalId',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'depositor',
            type: 'address',
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
            name: 'amount',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct DepositData',
        name: 'deposit',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'proposalId',
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
        name: 'pagination',
        type: 'tuple',
      },
    ],
    name: 'getDeposits',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'proposalId',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'depositor',
            type: 'address',
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
            name: 'amount',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct DepositData[]',
        name: 'deposits',
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
    inputs: [],
    name: 'getParams',
    outputs: [
      {
        components: [
          {
            internalType: 'int64',
            name: 'votingPeriod',
            type: 'int64',
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
            name: 'minDeposit',
            type: 'tuple[]',
          },
          {
            internalType: 'int64',
            name: 'maxDepositPeriod',
            type: 'int64',
          },
          {
            internalType: 'string',
            name: 'quorum',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'threshold',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'vetoThreshold',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'minInitialDepositRatio',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'proposalCancelRatio',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'proposalCancelDest',
            type: 'string',
          },
          {
            internalType: 'int64',
            name: 'expeditedVotingPeriod',
            type: 'int64',
          },
          {
            internalType: 'string',
            name: 'expeditedThreshold',
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
            name: 'expeditedMinDeposit',
            type: 'tuple[]',
          },
          {
            internalType: 'bool',
            name: 'burnVoteQuorum',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'burnProposalDepositPrevote',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'burnVoteVeto',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'minDepositRatio',
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
        internalType: 'uint64',
        name: 'proposalId',
        type: 'uint64',
      },
    ],
    name: 'getProposal',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'id',
            type: 'uint64',
          },
          {
            internalType: 'string[]',
            name: 'messages',
            type: 'string[]',
          },
          {
            internalType: 'uint32',
            name: 'status',
            type: 'uint32',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'yes',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'abstain',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'no',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'noWithVeto',
                type: 'string',
              },
            ],
            internalType: 'struct TallyResultData',
            name: 'finalTallyResult',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'submitTime',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'depositEndTime',
            type: 'uint64',
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
            name: 'totalDeposit',
            type: 'tuple[]',
          },
          {
            internalType: 'uint64',
            name: 'votingStartTime',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'votingEndTime',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'summary',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'proposer',
            type: 'address',
          },
        ],
        internalType: 'struct ProposalData',
        name: 'proposal',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'proposalStatus',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'depositor',
        type: 'address',
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
        name: 'pagination',
        type: 'tuple',
      },
    ],
    name: 'getProposals',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'id',
            type: 'uint64',
          },
          {
            internalType: 'string[]',
            name: 'messages',
            type: 'string[]',
          },
          {
            internalType: 'uint32',
            name: 'status',
            type: 'uint32',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'yes',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'abstain',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'no',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'noWithVeto',
                type: 'string',
              },
            ],
            internalType: 'struct TallyResultData',
            name: 'finalTallyResult',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'submitTime',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'depositEndTime',
            type: 'uint64',
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
            name: 'totalDeposit',
            type: 'tuple[]',
          },
          {
            internalType: 'uint64',
            name: 'votingStartTime',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'votingEndTime',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'summary',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'proposer',
            type: 'address',
          },
        ],
        internalType: 'struct ProposalData[]',
        name: 'proposals',
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
        internalType: 'uint64',
        name: 'proposalId',
        type: 'uint64',
      },
    ],
    name: 'getTallyResult',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'yes',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'abstain',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'no',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'noWithVeto',
            type: 'string',
          },
        ],
        internalType: 'struct TallyResultData',
        name: 'tallyResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'proposalId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
    ],
    name: 'getVote',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'proposalId',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'voter',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'enum VoteOption',
                name: 'option',
                type: 'uint8',
              },
              {
                internalType: 'string',
                name: 'weight',
                type: 'string',
              },
            ],
            internalType: 'struct WeightedVoteOption[]',
            name: 'options',
            type: 'tuple[]',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
        ],
        internalType: 'struct WeightedVote',
        name: 'vote',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'proposalId',
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
        name: 'pagination',
        type: 'tuple',
      },
    ],
    name: 'getVotes',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'proposalId',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'voter',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'enum VoteOption',
                name: 'option',
                type: 'uint8',
              },
              {
                internalType: 'string',
                name: 'weight',
                type: 'string',
              },
            ],
            internalType: 'struct WeightedVoteOption[]',
            name: 'options',
            type: 'tuple[]',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
        ],
        internalType: 'struct WeightedVote[]',
        name: 'votes',
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
        name: 'voter',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: 'proposalId',
        type: 'uint64',
      },
      {
        internalType: 'enum VoteOption',
        name: 'option',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
    ],
    name: 'vote',
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
        name: 'voter',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: 'proposalId',
        type: 'uint64',
      },
      {
        components: [
          {
            internalType: 'enum VoteOption',
            name: 'option',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'weight',
            type: 'string',
          },
        ],
        internalType: 'struct WeightedVoteOption[]',
        name: 'options',
        type: 'tuple[]',
      },
      {
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
    ],
    name: 'voteWeighted',
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
