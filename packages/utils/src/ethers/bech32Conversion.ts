import { fromBech32 } from '@cosmjs/encoding';
import { isAddress } from 'ethers';
import { toBech32 } from '@cosmjs/encoding';

/**
 * Function to turn a kii bech32 into an associated hex address
 * @category Cosmos Interoperability
 */
export function Bech32ToHex(bechAddress: string): string | null {
  if (!bechAddress || typeof bechAddress !== 'string') return null;

  const { prefix, data } = fromBech32(bechAddress);
  if (prefix !== 'kii') return null;

  const hex = '0x' + Buffer.from(data).toString('hex');
  return hex;
}
/**
 * Function to turn a hex address into a respective bech32 kii address
 * @category Cosmos Interoperability
 */
export async function HexToBech32(wallet: string) {
  if (!wallet || !wallet.startsWith('0x') || !isAddress(wallet)) {
    return null;
  }

  const bytes = Buffer.from(wallet.slice(2), 'hex');
  if (bytes.length !== 20) {
    return null;
  }

  return toBech32('kii', bytes);
}
