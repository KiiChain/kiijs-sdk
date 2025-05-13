/**
 * The address of the wasm precompile contract.
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001001';

/**
 * The ABI for the WASM precompile contract.
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "contractAddress",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "msg",
				"type": "bytes"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "denom",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct Coin[]",
				"name": "coins",
				"type": "tuple[]"
			}
		],
		"name": "execute",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "codeID",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "label",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "msg",
				"type": "bytes"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "denom",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct Coin[]",
				"name": "coins",
				"type": "tuple[]"
			}
		],
		"name": "instantiate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "contractAddress",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "queryData",
				"type": "bytes"
			}
		],
		"name": "queryRaw",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "contractAddress",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "msg",
				"type": "bytes"
			}
		],
		"name": "querySmart",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const;
