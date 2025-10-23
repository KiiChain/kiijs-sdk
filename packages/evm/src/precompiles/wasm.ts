/**
 * The address of the wasm precompile contract.
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ADDRESS =
  '0x0000000000000000000000000000000000001001' as const;

/**
 * The ABI for the WASM precompile contract.
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ABI = [
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
