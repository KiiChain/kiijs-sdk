import { defineChain } from 'viem';

export const kiiLocal = defineChain({
	id: 713715,
	name: 'Kii Local',
	nativeCurrency: { name: 'Kii', symbol: 'KII', decimals: 18 },
	rpcUrls: {
		default: {
			http: ['http://localhost:8545']
		}
	}
});
