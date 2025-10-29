/**
 * examples/utils-example.ts
 *
 * Demonstrates basic address conversions on Kiichain using kiijs-utils.
 * This file is for documentation/examples inside the repo.
 *
 * To actually RUN this example, do it in a separate test project:
 *   npm init -y
 *   npm i -D typescript ts-node
 *   npm i @kiichain/kiijs-utils @kiichain/kiijs-proto
 *   npx ts-node utils-example.ts
 */

import { HexToBech32, Bech32ToHex } from '@kiichain/kiijs-utils';

// Use simple placeholders for demo purposes:
const sampleHex = '0x0000000000000000000000000000000000000000';
const sampleBech32 = 'kii1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqe3g0r7';

console.log('Hex → Bech32:', HexToBech32(sampleHex));
console.log('Bech32 → Hex:', Bech32ToHex(sampleBech32));

// Expected: strings showing converted addresses (real addresses will differ).
