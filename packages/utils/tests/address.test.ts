import { Bech32ToHex } from '../src/ethers';

describe('Connect Wallet Test', () => {
  const hex_address = '0x6647af9d3d958f0ce9d16913949a3a90b8a40a6a';
  const kii_address = 'kii1ver6l8fajk8se6w3dyfefx36jzu2gzn2qmu3t9';

  it('convert kii to hex', async () => {
    expect(Bech32ToHex(kii_address)).toEqual(hex_address);
  });
});
