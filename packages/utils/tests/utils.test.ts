import { shortenAddress } from '../src/utils';

describe('shortenAddress', () => {
  it('should shorten a long address correctly', () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    const result = shortenAddress(address);
    expect(result).toBe('0x1234...5678');
  });
});
