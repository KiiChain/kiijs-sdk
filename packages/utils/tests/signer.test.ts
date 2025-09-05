import { Any } from 'cosmjs-types/google/protobuf/any';
import { BaseAccount } from 'cosmjs-types/cosmos/auth/v1beta1/auth';
import { PubKey } from '@kiichain/kiijs-proto/src/cosmos/evm/crypto/v1/ethsecp256k1/keys';

import { ethsecpAccountParser } from '../src/cosmjs/signer';

describe('Ethsecp Signer Tests', () => {
  // Test for ethsecpAccountParser
  describe('ethsecpAccountParser', () => {
    it('should parse BaseAccount with ethsecp256k1 pubkey', () => {
      // Create a real Any object with BaseAccount typeUrl
      const pubkeyValue = new Uint8Array([1, 2, 3]);
      const pubkeyAny = Any.fromPartial({
        typeUrl: '/cosmos.evm.crypto.v1.ethsecp256k1.PubKey',
        value: PubKey.encode({
          key: pubkeyValue,
        }).finish(),
      });

      const baseAccount = BaseAccount.fromPartial({
        address: 'kii1ver6l8fajk8se6w3dyfefx36jzu2gzn2qmu3t9',
        accountNumber: BigInt(12345),
        sequence: BigInt(67890),
        pubKey: pubkeyAny,
      });

      const accountAny = Any.fromPartial({
        typeUrl: '/cosmos.auth.v1beta1.BaseAccount',
        value: BaseAccount.encode(baseAccount).finish(),
      });

      const result = ethsecpAccountParser(accountAny);

      // Verify the result has the correct structure
      expect(result).toBeDefined();
      expect(result.address).toBe(baseAccount.address);
      expect(result.accountNumber).toBe(baseAccount.accountNumber);
      expect(result.sequence).toBe(baseAccount.sequence);
    });

    it('should throw error for unknown account type', () => {
      const accountAny: Any = {
        typeUrl: '/unknown.type',
        value: new Uint8Array([7, 8, 9]),
      };

      expect(() => ethsecpAccountParser(accountAny)).toThrow(
        `Unknown account type: ${accountAny.typeUrl}`
      );
    });
  });
});
