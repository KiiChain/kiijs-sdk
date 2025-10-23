export const GOVERNANCE_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000000805' as const;

export const GOVERNANCE_PRECOMPILE_ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'CancelProposal',
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
        name: 'proposalId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'SubmitProposal',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      { name: 'option', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Vote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'options',
        internalType: 'struct WeightedVoteOption[]',
        type: 'tuple[]',
        components: [
          { name: 'option', internalType: 'enum VoteOption', type: 'uint8' },
          { name: 'weight', internalType: 'string', type: 'string' },
        ],
        indexed: false,
      },
    ],
    name: 'VoteWeighted',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'cancelProposal',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositor', internalType: 'address', type: 'address' },
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
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
    name: 'deposit',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getConstitution',
    outputs: [{ name: 'constitution', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
      { name: 'depositor', internalType: 'address', type: 'address' },
    ],
    name: 'getDeposit',
    outputs: [
      {
        name: 'deposit',
        internalType: 'struct DepositData',
        type: 'tuple',
        components: [
          { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
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
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
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
    name: 'getDeposits',
    outputs: [
      {
        name: 'deposits',
        internalType: 'struct DepositData[]',
        type: 'tuple[]',
        components: [
          { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
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
    inputs: [],
    name: 'getParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct Params',
        type: 'tuple',
        components: [
          { name: 'votingPeriod', internalType: 'int64', type: 'int64' },
          {
            name: 'minDeposit',
            internalType: 'struct Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'maxDepositPeriod', internalType: 'int64', type: 'int64' },
          { name: 'quorum', internalType: 'string', type: 'string' },
          { name: 'threshold', internalType: 'string', type: 'string' },
          { name: 'vetoThreshold', internalType: 'string', type: 'string' },
          {
            name: 'minInitialDepositRatio',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'proposalCancelRatio',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'proposalCancelDest',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'expeditedVotingPeriod',
            internalType: 'int64',
            type: 'int64',
          },
          {
            name: 'expeditedThreshold',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'expeditedMinDeposit',
            internalType: 'struct Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'burnVoteQuorum', internalType: 'bool', type: 'bool' },
          {
            name: 'burnProposalDepositPrevote',
            internalType: 'bool',
            type: 'bool',
          },
          { name: 'burnVoteVeto', internalType: 'bool', type: 'bool' },
          { name: 'minDepositRatio', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint64', type: 'uint64' }],
    name: 'getProposal',
    outputs: [
      {
        name: 'proposal',
        internalType: 'struct ProposalData',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'messages', internalType: 'string[]', type: 'string[]' },
          { name: 'status', internalType: 'uint32', type: 'uint32' },
          {
            name: 'finalTallyResult',
            internalType: 'struct TallyResultData',
            type: 'tuple',
            components: [
              { name: 'yes', internalType: 'string', type: 'string' },
              { name: 'abstain', internalType: 'string', type: 'string' },
              { name: 'no', internalType: 'string', type: 'string' },
              { name: 'noWithVeto', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'submitTime', internalType: 'uint64', type: 'uint64' },
          { name: 'depositEndTime', internalType: 'uint64', type: 'uint64' },
          {
            name: 'totalDeposit',
            internalType: 'struct Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'votingStartTime', internalType: 'uint64', type: 'uint64' },
          { name: 'votingEndTime', internalType: 'uint64', type: 'uint64' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'summary', internalType: 'string', type: 'string' },
          { name: 'proposer', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalStatus', internalType: 'uint32', type: 'uint32' },
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'depositor', internalType: 'address', type: 'address' },
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
    name: 'getProposals',
    outputs: [
      {
        name: 'proposals',
        internalType: 'struct ProposalData[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'messages', internalType: 'string[]', type: 'string[]' },
          { name: 'status', internalType: 'uint32', type: 'uint32' },
          {
            name: 'finalTallyResult',
            internalType: 'struct TallyResultData',
            type: 'tuple',
            components: [
              { name: 'yes', internalType: 'string', type: 'string' },
              { name: 'abstain', internalType: 'string', type: 'string' },
              { name: 'no', internalType: 'string', type: 'string' },
              { name: 'noWithVeto', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'submitTime', internalType: 'uint64', type: 'uint64' },
          { name: 'depositEndTime', internalType: 'uint64', type: 'uint64' },
          {
            name: 'totalDeposit',
            internalType: 'struct Coin[]',
            type: 'tuple[]',
            components: [
              { name: 'denom', internalType: 'string', type: 'string' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'votingStartTime', internalType: 'uint64', type: 'uint64' },
          { name: 'votingEndTime', internalType: 'uint64', type: 'uint64' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'summary', internalType: 'string', type: 'string' },
          { name: 'proposer', internalType: 'address', type: 'address' },
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
    inputs: [{ name: 'proposalId', internalType: 'uint64', type: 'uint64' }],
    name: 'getTallyResult',
    outputs: [
      {
        name: 'tallyResult',
        internalType: 'struct TallyResultData',
        type: 'tuple',
        components: [
          { name: 'yes', internalType: 'string', type: 'string' },
          { name: 'abstain', internalType: 'string', type: 'string' },
          { name: 'no', internalType: 'string', type: 'string' },
          { name: 'noWithVeto', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
      { name: 'voter', internalType: 'address', type: 'address' },
    ],
    name: 'getVote',
    outputs: [
      {
        name: 'vote',
        internalType: 'struct WeightedVote',
        type: 'tuple',
        components: [
          { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
          { name: 'voter', internalType: 'address', type: 'address' },
          {
            name: 'options',
            internalType: 'struct WeightedVoteOption[]',
            type: 'tuple[]',
            components: [
              {
                name: 'option',
                internalType: 'enum VoteOption',
                type: 'uint8',
              },
              { name: 'weight', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
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
    name: 'getVotes',
    outputs: [
      {
        name: 'votes',
        internalType: 'struct WeightedVote[]',
        type: 'tuple[]',
        components: [
          { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
          { name: 'voter', internalType: 'address', type: 'address' },
          {
            name: 'options',
            internalType: 'struct WeightedVoteOption[]',
            type: 'tuple[]',
            components: [
              {
                name: 'option',
                internalType: 'enum VoteOption',
                type: 'uint8',
              },
              { name: 'weight', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'metadata', internalType: 'string', type: 'string' },
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
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'jsonProposal', internalType: 'bytes', type: 'bytes' },
      {
        name: 'deposit',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'submitProposal',
    outputs: [{ name: 'proposalId', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
      { name: 'option', internalType: 'enum VoteOption', type: 'uint8' },
      { name: 'metadata', internalType: 'string', type: 'string' },
    ],
    name: 'vote',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'voter', internalType: 'address', type: 'address' },
      { name: 'proposalId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'options',
        internalType: 'struct WeightedVoteOption[]',
        type: 'tuple[]',
        components: [
          { name: 'option', internalType: 'enum VoteOption', type: 'uint8' },
          { name: 'weight', internalType: 'string', type: 'string' },
        ],
      },
      { name: 'metadata', internalType: 'string', type: 'string' },
    ],
    name: 'voteWeighted',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const;
