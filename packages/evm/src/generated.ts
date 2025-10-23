//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GovernancePrecompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const governancePrecompileAbi = [
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

export const governancePrecompileAddress =
  '0x0000000000000000000000000000000000000805' as const;

export const governancePrecompileConfig = {
  address: governancePrecompileAddress,
  abi: governancePrecompileAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBCPrecompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ibcPrecompileAbi = [
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
        name: 'receiver',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      { name: 'denom', internalType: 'string', type: 'string', indexed: true },
      { name: 'port', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'channel',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'revisionNumber',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'revisionHeight',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'timeoutTimestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      { name: 'memo', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'string', type: 'string' },
      { name: 'port', internalType: 'string', type: 'string' },
      { name: 'channel', internalType: 'string', type: 'string' },
      { name: 'denom', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'revisionNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'revisionHeight', internalType: 'uint64', type: 'uint64' },
      { name: 'timeoutTimestamp', internalType: 'uint64', type: 'uint64' },
      { name: 'memo', internalType: 'string', type: 'string' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'string', type: 'string' },
      { name: 'port', internalType: 'string', type: 'string' },
      { name: 'channel', internalType: 'string', type: 'string' },
      { name: 'denom', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'memo', internalType: 'string', type: 'string' },
    ],
    name: 'transferWithDefaultTimeout',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const;

export const ibcPrecompileAddress =
  '0x0000000000000000000000000000000000001002' as const;

export const ibcPrecompileConfig = {
  address: ibcPrecompileAddress,
  abi: ibcPrecompileAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ICS20Precompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ics20PrecompileAbi = [
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

export const ics20PrecompileAddress =
  '0x0000000000000000000000000000000000000802' as const;

export const ics20PrecompileConfig = {
  address: ics20PrecompileAddress,
  abi: ics20PrecompileAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SlashingPrecompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const slashingPrecompileAbi = [
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

export const slashingPrecompileAddress =
  '0x0000000000000000000000000000000000000806' as const;

export const slashingPrecompileConfig = {
  address: slashingPrecompileAddress,
  abi: slashingPrecompileAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StakingPrecompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stakingPrecompileAbi = [
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

export const stakingPrecompileAddress =
  '0x0000000000000000000000000000000000000800' as const;

export const stakingPrecompileConfig = {
  address: stakingPrecompileAddress,
  abi: stakingPrecompileAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WasmPrecompile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wasmPrecompileAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'contractAddress',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ContractExecuted',
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
      { name: 'codeID', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'contractAddress',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ContractInstantiated',
  },
  {
    type: 'function',
    inputs: [
      { name: 'contractAddress', internalType: 'string', type: 'string' },
      { name: 'msg', internalType: 'bytes', type: 'bytes' },
      {
        name: 'coins',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'execute',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'codeID', internalType: 'uint64', type: 'uint64' },
      { name: 'label', internalType: 'string', type: 'string' },
      { name: 'msg', internalType: 'bytes', type: 'bytes' },
      {
        name: 'coins',
        internalType: 'struct Coin[]',
        type: 'tuple[]',
        components: [
          { name: 'denom', internalType: 'string', type: 'string' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'instantiate',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'contractAddress', internalType: 'string', type: 'string' },
      { name: 'queryData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'queryRaw',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'contractAddress', internalType: 'string', type: 'string' },
      { name: 'msg', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'querySmart',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
] as const;

export const wasmPrecompileAddress =
  '0x0000000000000000000000000000000000001001' as const;

export const wasmPrecompileConfig = {
  address: wasmPrecompileAddress,
  abi: wasmPrecompileAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bankPrecompileAbi}__
 */
export const useReadBankPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: bankPrecompileAbi,
  address: bankPrecompileAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bankPrecompileAbi}__ and `functionName` set to `"balances"`
 */
export const useReadBankPrecompileBalances =
  /*#__PURE__*/ createUseReadContract({
    abi: bankPrecompileAbi,
    address: bankPrecompileAddress,
    functionName: 'balances',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bankPrecompileAbi}__ and `functionName` set to `"supplyOf"`
 */
export const useReadBankPrecompileSupplyOf =
  /*#__PURE__*/ createUseReadContract({
    abi: bankPrecompileAbi,
    address: bankPrecompileAddress,
    functionName: 'supplyOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bankPrecompileAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadBankPrecompileTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: bankPrecompileAbi,
    address: bankPrecompileAddress,
    functionName: 'totalSupply',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bech32PrecompileAbi}__
 */
export const useWriteBech32Precompile = /*#__PURE__*/ createUseWriteContract({
  abi: bech32PrecompileAbi,
  address: bech32PrecompileAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bech32PrecompileAbi}__ and `functionName` set to `"bech32ToHex"`
 */
export const useWriteBech32PrecompileBech32ToHex =
  /*#__PURE__*/ createUseWriteContract({
    abi: bech32PrecompileAbi,
    address: bech32PrecompileAddress,
    functionName: 'bech32ToHex',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bech32PrecompileAbi}__ and `functionName` set to `"hexToBech32"`
 */
export const useWriteBech32PrecompileHexToBech32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: bech32PrecompileAbi,
    address: bech32PrecompileAddress,
    functionName: 'hexToBech32',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bech32PrecompileAbi}__
 */
export const useSimulateBech32Precompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bech32PrecompileAbi,
    address: bech32PrecompileAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bech32PrecompileAbi}__ and `functionName` set to `"bech32ToHex"`
 */
export const useSimulateBech32PrecompileBech32ToHex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bech32PrecompileAbi,
    address: bech32PrecompileAddress,
    functionName: 'bech32ToHex',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bech32PrecompileAbi}__ and `functionName` set to `"hexToBech32"`
 */
export const useSimulateBech32PrecompileHexToBech32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bech32PrecompileAbi,
    address: bech32PrecompileAddress,
    functionName: 'hexToBech32',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useReadDistributionPrecompile =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"communityPool"`
 */
export const useReadDistributionPrecompileCommunityPool =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'communityPool',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegationRewards"`
 */
export const useReadDistributionPrecompileDelegationRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegationRewards',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegationTotalRewards"`
 */
export const useReadDistributionPrecompileDelegationTotalRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegationTotalRewards',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegatorValidators"`
 */
export const useReadDistributionPrecompileDelegatorValidators =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegatorValidators',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"delegatorWithdrawAddress"`
 */
export const useReadDistributionPrecompileDelegatorWithdrawAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'delegatorWithdrawAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorCommission"`
 */
export const useReadDistributionPrecompileValidatorCommission =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorCommission',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorDistributionInfo"`
 */
export const useReadDistributionPrecompileValidatorDistributionInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorDistributionInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorOutstandingRewards"`
 */
export const useReadDistributionPrecompileValidatorOutstandingRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorOutstandingRewards',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"validatorSlashes"`
 */
export const useReadDistributionPrecompileValidatorSlashes =
  /*#__PURE__*/ createUseReadContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'validatorSlashes',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useWriteDistributionPrecompile =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"claimRewards"`
 */
export const useWriteDistributionPrecompileClaimRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'claimRewards',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"depositValidatorRewardsPool"`
 */
export const useWriteDistributionPrecompileDepositValidatorRewardsPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'depositValidatorRewardsPool',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"fundCommunityPool"`
 */
export const useWriteDistributionPrecompileFundCommunityPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'fundCommunityPool',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"setWithdrawAddress"`
 */
export const useWriteDistributionPrecompileSetWithdrawAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'setWithdrawAddress',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawDelegatorRewards"`
 */
export const useWriteDistributionPrecompileWithdrawDelegatorRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawDelegatorRewards',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawValidatorCommission"`
 */
export const useWriteDistributionPrecompileWithdrawValidatorCommission =
  /*#__PURE__*/ createUseWriteContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawValidatorCommission',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useSimulateDistributionPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"claimRewards"`
 */
export const useSimulateDistributionPrecompileClaimRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'claimRewards',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"depositValidatorRewardsPool"`
 */
export const useSimulateDistributionPrecompileDepositValidatorRewardsPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'depositValidatorRewardsPool',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"fundCommunityPool"`
 */
export const useSimulateDistributionPrecompileFundCommunityPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'fundCommunityPool',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"setWithdrawAddress"`
 */
export const useSimulateDistributionPrecompileSetWithdrawAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'setWithdrawAddress',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawDelegatorRewards"`
 */
export const useSimulateDistributionPrecompileWithdrawDelegatorRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawDelegatorRewards',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `functionName` set to `"withdrawValidatorCommission"`
 */
export const useSimulateDistributionPrecompileWithdrawValidatorCommission =
  /*#__PURE__*/ createUseSimulateContract({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    functionName: 'withdrawValidatorCommission',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__
 */
export const useWatchDistributionPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"ClaimRewards"`
 */
export const useWatchDistributionPrecompileClaimRewardsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'ClaimRewards',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"DepositValidatorRewardsPool"`
 */
export const useWatchDistributionPrecompileDepositValidatorRewardsPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'DepositValidatorRewardsPool',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"FundCommunityPool"`
 */
export const useWatchDistributionPrecompileFundCommunityPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'FundCommunityPool',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"SetWithdrawerAddress"`
 */
export const useWatchDistributionPrecompileSetWithdrawerAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'SetWithdrawerAddress',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"WithdrawDelegatorReward"`
 */
export const useWatchDistributionPrecompileWithdrawDelegatorRewardEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'WithdrawDelegatorReward',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link DISTRIBUTION_PRECOMPILE_ABI}__ and `eventName` set to `"WithdrawValidatorCommission"`
 */
export const useWatchDistributionPrecompileWithdrawValidatorCommissionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: DISTRIBUTION_PRECOMPILE_ABI,
    address: DISTRIBUTION_PRECOMPILE_ADDRESS,
    eventName: 'WithdrawValidatorCommission',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__
 */
export const useReadGovernancePrecompile = /*#__PURE__*/ createUseReadContract({
  abi: governancePrecompileAbi,
  address: governancePrecompileAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getConstitution"`
 */
export const useReadGovernancePrecompileGetConstitution =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getConstitution',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getDeposit"`
 */
export const useReadGovernancePrecompileGetDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getDeposit',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getDeposits"`
 */
export const useReadGovernancePrecompileGetDeposits =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getDeposits',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getParams"`
 */
export const useReadGovernancePrecompileGetParams =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getParams',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getProposal"`
 */
export const useReadGovernancePrecompileGetProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getProposal',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getProposals"`
 */
export const useReadGovernancePrecompileGetProposals =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getProposals',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getTallyResult"`
 */
export const useReadGovernancePrecompileGetTallyResult =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getTallyResult',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getVote"`
 */
export const useReadGovernancePrecompileGetVote =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getVote',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadGovernancePrecompileGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'getVotes',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governancePrecompileAbi}__
 */
export const useWriteGovernancePrecompile =
  /*#__PURE__*/ createUseWriteContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"cancelProposal"`
 */
export const useWriteGovernancePrecompileCancelProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'cancelProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteGovernancePrecompileDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'deposit',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"submitProposal"`
 */
export const useWriteGovernancePrecompileSubmitProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'submitProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"vote"`
 */
export const useWriteGovernancePrecompileVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'vote',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"voteWeighted"`
 */
export const useWriteGovernancePrecompileVoteWeighted =
  /*#__PURE__*/ createUseWriteContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'voteWeighted',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governancePrecompileAbi}__
 */
export const useSimulateGovernancePrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"cancelProposal"`
 */
export const useSimulateGovernancePrecompileCancelProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'cancelProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateGovernancePrecompileDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'deposit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"submitProposal"`
 */
export const useSimulateGovernancePrecompileSubmitProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'submitProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"vote"`
 */
export const useSimulateGovernancePrecompileVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'vote',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link governancePrecompileAbi}__ and `functionName` set to `"voteWeighted"`
 */
export const useSimulateGovernancePrecompileVoteWeighted =
  /*#__PURE__*/ createUseSimulateContract({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    functionName: 'voteWeighted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governancePrecompileAbi}__
 */
export const useWatchGovernancePrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governancePrecompileAbi}__ and `eventName` set to `"CancelProposal"`
 */
export const useWatchGovernancePrecompileCancelProposalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    eventName: 'CancelProposal',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governancePrecompileAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchGovernancePrecompileDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    eventName: 'Deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governancePrecompileAbi}__ and `eventName` set to `"SubmitProposal"`
 */
export const useWatchGovernancePrecompileSubmitProposalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    eventName: 'SubmitProposal',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governancePrecompileAbi}__ and `eventName` set to `"Vote"`
 */
export const useWatchGovernancePrecompileVoteEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    eventName: 'Vote',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link governancePrecompileAbi}__ and `eventName` set to `"VoteWeighted"`
 */
export const useWatchGovernancePrecompileVoteWeightedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: governancePrecompileAbi,
    address: governancePrecompileAddress,
    eventName: 'VoteWeighted',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ibcPrecompileAbi}__
 */
export const useWriteIbcPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: ibcPrecompileAbi,
  address: ibcPrecompileAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ibcPrecompileAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIbcPrecompileTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ibcPrecompileAbi,
    address: ibcPrecompileAddress,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ibcPrecompileAbi}__ and `functionName` set to `"transferWithDefaultTimeout"`
 */
export const useWriteIbcPrecompileTransferWithDefaultTimeout =
  /*#__PURE__*/ createUseWriteContract({
    abi: ibcPrecompileAbi,
    address: ibcPrecompileAddress,
    functionName: 'transferWithDefaultTimeout',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ibcPrecompileAbi}__
 */
export const useSimulateIbcPrecompile = /*#__PURE__*/ createUseSimulateContract(
  { abi: ibcPrecompileAbi, address: ibcPrecompileAddress }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ibcPrecompileAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIbcPrecompileTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ibcPrecompileAbi,
    address: ibcPrecompileAddress,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ibcPrecompileAbi}__ and `functionName` set to `"transferWithDefaultTimeout"`
 */
export const useSimulateIbcPrecompileTransferWithDefaultTimeout =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ibcPrecompileAbi,
    address: ibcPrecompileAddress,
    functionName: 'transferWithDefaultTimeout',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ibcPrecompileAbi}__
 */
export const useWatchIbcPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ibcPrecompileAbi,
    address: ibcPrecompileAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ibcPrecompileAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIbcPrecompileTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ibcPrecompileAbi,
    address: ibcPrecompileAddress,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ics20PrecompileAbi}__
 */
export const useReadIcs20Precompile = /*#__PURE__*/ createUseReadContract({
  abi: ics20PrecompileAbi,
  address: ics20PrecompileAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ics20PrecompileAbi}__ and `functionName` set to `"denom"`
 */
export const useReadIcs20PrecompileDenom = /*#__PURE__*/ createUseReadContract({
  abi: ics20PrecompileAbi,
  address: ics20PrecompileAddress,
  functionName: 'denom',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ics20PrecompileAbi}__ and `functionName` set to `"denomHash"`
 */
export const useReadIcs20PrecompileDenomHash =
  /*#__PURE__*/ createUseReadContract({
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
    functionName: 'denomHash',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ics20PrecompileAbi}__ and `functionName` set to `"denoms"`
 */
export const useReadIcs20PrecompileDenoms = /*#__PURE__*/ createUseReadContract(
  {
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
    functionName: 'denoms',
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ics20PrecompileAbi}__
 */
export const useWriteIcs20Precompile = /*#__PURE__*/ createUseWriteContract({
  abi: ics20PrecompileAbi,
  address: ics20PrecompileAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ics20PrecompileAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIcs20PrecompileTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ics20PrecompileAbi}__
 */
export const useSimulateIcs20Precompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ics20PrecompileAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIcs20PrecompileTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ics20PrecompileAbi}__
 */
export const useWatchIcs20PrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ics20PrecompileAbi}__ and `eventName` set to `"IBCTransfer"`
 */
export const useWatchIcs20PrecompileIbcTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ics20PrecompileAbi,
    address: ics20PrecompileAddress,
    eventName: 'IBCTransfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link slashingPrecompileAbi}__
 */
export const useReadSlashingPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: slashingPrecompileAbi,
  address: slashingPrecompileAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link slashingPrecompileAbi}__ and `functionName` set to `"getParams"`
 */
export const useReadSlashingPrecompileGetParams =
  /*#__PURE__*/ createUseReadContract({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
    functionName: 'getParams',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link slashingPrecompileAbi}__ and `functionName` set to `"getSigningInfo"`
 */
export const useReadSlashingPrecompileGetSigningInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
    functionName: 'getSigningInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link slashingPrecompileAbi}__ and `functionName` set to `"getSigningInfos"`
 */
export const useReadSlashingPrecompileGetSigningInfos =
  /*#__PURE__*/ createUseReadContract({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
    functionName: 'getSigningInfos',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link slashingPrecompileAbi}__
 */
export const useWriteSlashingPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: slashingPrecompileAbi,
  address: slashingPrecompileAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link slashingPrecompileAbi}__ and `functionName` set to `"unjail"`
 */
export const useWriteSlashingPrecompileUnjail =
  /*#__PURE__*/ createUseWriteContract({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
    functionName: 'unjail',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link slashingPrecompileAbi}__
 */
export const useSimulateSlashingPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link slashingPrecompileAbi}__ and `functionName` set to `"unjail"`
 */
export const useSimulateSlashingPrecompileUnjail =
  /*#__PURE__*/ createUseSimulateContract({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
    functionName: 'unjail',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link slashingPrecompileAbi}__
 */
export const useWatchSlashingPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link slashingPrecompileAbi}__ and `eventName` set to `"ValidatorUnjailed"`
 */
export const useWatchSlashingPrecompileValidatorUnjailedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: slashingPrecompileAbi,
    address: slashingPrecompileAddress,
    eventName: 'ValidatorUnjailed',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__
 */
export const useReadStakingPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: stakingPrecompileAbi,
  address: stakingPrecompileAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"delegation"`
 */
export const useReadStakingPrecompileDelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'delegation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"redelegation"`
 */
export const useReadStakingPrecompileRedelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'redelegation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"redelegations"`
 */
export const useReadStakingPrecompileRedelegations =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'redelegations',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"unbondingDelegation"`
 */
export const useReadStakingPrecompileUnbondingDelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'unbondingDelegation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"validator"`
 */
export const useReadStakingPrecompileValidator =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'validator',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"validators"`
 */
export const useReadStakingPrecompileValidators =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'validators',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__
 */
export const useWriteStakingPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: stakingPrecompileAbi,
  address: stakingPrecompileAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"cancelUnbondingDelegation"`
 */
export const useWriteStakingPrecompileCancelUnbondingDelegation =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'cancelUnbondingDelegation',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"createValidator"`
 */
export const useWriteStakingPrecompileCreateValidator =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'createValidator',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteStakingPrecompileDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'delegate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"editValidator"`
 */
export const useWriteStakingPrecompileEditValidator =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'editValidator',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"redelegate"`
 */
export const useWriteStakingPrecompileRedelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'redelegate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"undelegate"`
 */
export const useWriteStakingPrecompileUndelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'undelegate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__
 */
export const useSimulateStakingPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"cancelUnbondingDelegation"`
 */
export const useSimulateStakingPrecompileCancelUnbondingDelegation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'cancelUnbondingDelegation',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"createValidator"`
 */
export const useSimulateStakingPrecompileCreateValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'createValidator',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateStakingPrecompileDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'delegate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"editValidator"`
 */
export const useSimulateStakingPrecompileEditValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'editValidator',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"redelegate"`
 */
export const useSimulateStakingPrecompileRedelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'redelegate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `functionName` set to `"undelegate"`
 */
export const useSimulateStakingPrecompileUndelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    functionName: 'undelegate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__
 */
export const useWatchStakingPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `eventName` set to `"CancelUnbondingDelegation"`
 */
export const useWatchStakingPrecompileCancelUnbondingDelegationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    eventName: 'CancelUnbondingDelegation',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `eventName` set to `"CreateValidator"`
 */
export const useWatchStakingPrecompileCreateValidatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    eventName: 'CreateValidator',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `eventName` set to `"Delegate"`
 */
export const useWatchStakingPrecompileDelegateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    eventName: 'Delegate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `eventName` set to `"EditValidator"`
 */
export const useWatchStakingPrecompileEditValidatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    eventName: 'EditValidator',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `eventName` set to `"Redelegate"`
 */
export const useWatchStakingPrecompileRedelegateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    eventName: 'Redelegate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPrecompileAbi}__ and `eventName` set to `"Unbond"`
 */
export const useWatchStakingPrecompileUnbondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPrecompileAbi,
    address: stakingPrecompileAddress,
    eventName: 'Unbond',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wasmPrecompileAbi}__
 */
export const useReadWasmPrecompile = /*#__PURE__*/ createUseReadContract({
  abi: wasmPrecompileAbi,
  address: wasmPrecompileAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `functionName` set to `"queryRaw"`
 */
export const useReadWasmPrecompileQueryRaw =
  /*#__PURE__*/ createUseReadContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    functionName: 'queryRaw',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `functionName` set to `"querySmart"`
 */
export const useReadWasmPrecompileQuerySmart =
  /*#__PURE__*/ createUseReadContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    functionName: 'querySmart',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wasmPrecompileAbi}__
 */
export const useWriteWasmPrecompile = /*#__PURE__*/ createUseWriteContract({
  abi: wasmPrecompileAbi,
  address: wasmPrecompileAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteWasmPrecompileExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    functionName: 'execute',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `functionName` set to `"instantiate"`
 */
export const useWriteWasmPrecompileInstantiate =
  /*#__PURE__*/ createUseWriteContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    functionName: 'instantiate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wasmPrecompileAbi}__
 */
export const useSimulateWasmPrecompile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateWasmPrecompileExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    functionName: 'execute',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `functionName` set to `"instantiate"`
 */
export const useSimulateWasmPrecompileInstantiate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    functionName: 'instantiate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wasmPrecompileAbi}__
 */
export const useWatchWasmPrecompileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `eventName` set to `"ContractExecuted"`
 */
export const useWatchWasmPrecompileContractExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    eventName: 'ContractExecuted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wasmPrecompileAbi}__ and `eventName` set to `"ContractInstantiated"`
 */
export const useWatchWasmPrecompileContractInstantiatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wasmPrecompileAbi,
    address: wasmPrecompileAddress,
    eventName: 'ContractInstantiated',
  });
