/**
 * The address of the Evidence precompile contract.
 * @category Cosmos Interoperability
 */
export const EVIDENCE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000000807';

/**
 * The ABI for the Evidence precompile contract.
 * @category Cosmos Interoperability
 */
export const EVIDENCE_PRECOMPILE_ABI = [
    {
		"inputs": [
		  {
			"internalType": "bytes",
			"name": "evidenceHash",
			"type": "bytes"
		  }
		],
		"name": "evidence",
		"outputs": [
		  {
			"components": [
			  {
				"internalType": "int64",
				"name": "height",
				"type": "int64"
			  },
			  {
				"internalType": "uint64",
				"name": "time",
				"type": "uint64"
			  },
			  {
				"internalType": "int64",
				"name": "power",
				"type": "int64"
			  },
			  {
				"internalType": "string",
				"name": "consensusAddress",
				"type": "string"
			  }
			],
			"internalType": "struct Equivocation",
			"name": "evidence",
			"type": "tuple"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"components": [
			  {
				"internalType": "bytes",
				"name": "key",
				"type": "bytes"
			  },
			  {
				"internalType": "uint64",
				"name": "offset",
				"type": "uint64"
			  },
			  {
				"internalType": "uint64",
				"name": "limit",
				"type": "uint64"
			  },
			  {
				"internalType": "bool",
				"name": "countTotal",
				"type": "bool"
			  },
			  {
				"internalType": "bool",
				"name": "reverse",
				"type": "bool"
			  }
			],
			"internalType": "struct PageRequest",
			"name": "pageRequest",
			"type": "tuple"
		  }
		],
		"name": "getAllEvidence",
		"outputs": [
		  {
			"components": [
			  {
				"internalType": "int64",
				"name": "height",
				"type": "int64"
			  },
			  {
				"internalType": "uint64",
				"name": "time",
				"type": "uint64"
			  },
			  {
				"internalType": "int64",
				"name": "power",
				"type": "int64"
			  },
			  {
				"internalType": "string",
				"name": "consensusAddress",
				"type": "string"
			  }
			],
			"internalType": "struct Equivocation[]",
			"name": "evidence",
			"type": "tuple[]"
		  },
		  {
			"components": [
			  {
				"internalType": "bytes",
				"name": "nextKey",
				"type": "bytes"
			  },
			  {
				"internalType": "uint64",
				"name": "total",
				"type": "uint64"
			  }
			],
			"internalType": "struct PageResponse",
			"name": "pageResponse",
			"type": "tuple"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"components": [
			  {
				"internalType": "int64",
				"name": "height",
				"type": "int64"
			  },
			  {
				"internalType": "uint64",
				"name": "time",
				"type": "uint64"
			  },
			  {
				"internalType": "int64",
				"name": "power",
				"type": "int64"
			  },
			  {
				"internalType": "string",
				"name": "consensusAddress",
				"type": "string"
			  }
			],
			"internalType": "struct Equivocation",
			"name": "evidence",
			"type": "tuple"
		  }
		],
		"name": "submitEvidence",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "success",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
] as const;
