import { validateAddress } from '../src/validateAddress';

describe('validateAddress', () => {
  it('should return true for a valid Ethereum address', () => {
    const valid = '0x000000000000000000000000000000000000dEaD';
    expect(validateAddress(valid)).toBe(true);
  });

  it('should return false for an invalid address', () => {
    const invalid = '0x123';
    expect(validateAddress(invalid)).toBe(false);
  });
});
