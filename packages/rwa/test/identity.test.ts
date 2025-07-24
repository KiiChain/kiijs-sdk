// identity.test.ts
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from '../src/client';
import { IdentityModule } from '../src/raw-identity';

// Mock the entire RwaClient module
jest.mock('../src/client', () => {
  return {
    RwaClient: {
      new: jest.fn().mockResolvedValue({
        execute: jest.fn(),
        query: jest.fn(),
      }),
    },
  };
});

describe('IdentityModule', () => {
  let mockRwaClient: jest.Mocked<RwaClient>;
  let identityModule: IdentityModule;
  const mockIdentityAddress = 'kii1identityaddress';
  const mockFromAddress = 'kii1fromaddress';
  const mockIdentityOwner = 'kii1identityowner';
  const mockCountry = 'BR';
  const mockNewCountry = 'FR';
  const mockSigner = {} as DirectSecp256k1HdWallet;
  const mockGasLimit = 200000;

  const mockTxResponse: DeliverTxResponse = {
    transactionHash: 'mockTxHash',
    code: 0,
    height: 100,
    gasUsed: BigInt(100000),
    events: [],
    txIndex: 0,
    msgResponses: [],
    gasWanted: BigInt(100),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    // Get the mocked instance by calling the static 'new' method
    mockRwaClient = (await RwaClient.new(
      'mock-rpc-url',
      'test-chain',
      'testdenom',
      '0.025',
      mockSigner
    )) as jest.Mocked<RwaClient>;

    mockRwaClient.execute.mockResolvedValue(mockTxResponse);

    identityModule = new IdentityModule(mockRwaClient, mockIdentityAddress);
  });

  describe('addIdentity', () => {
    it('should call RwaClient.execute with correct parameters', async () => {
      const request = {
        from: mockFromAddress,
        country: mockCountry,
        gas_limit: mockGasLimit,
      };

      const result = await identityModule.addIdentity(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          add_identity: {
            from: mockFromAddress,
            country: mockCountry,
          },
        },
        mockIdentityAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if RwaClient.execute throws', async () => {
      const request = {
        from: mockFromAddress,
        country: mockCountry,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Execution failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(identityModule.addIdentity(request)).rejects.toThrow(
        mockError
      );
    });
  });

  describe('updateIdentity', () => {
    it('should call RwaClient.execute with correct parameters', async () => {
      const request = {
        from: mockFromAddress,
        new_country: mockNewCountry,
        identity_owner: mockIdentityOwner,
        gas_limit: mockGasLimit,
      };

      const result = await identityModule.updateIdentity(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          update_identity: {
            from: mockFromAddress,
            new_country: mockNewCountry,
            identity_owner: mockIdentityOwner,
          },
        },
        mockIdentityAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if RwaClient.execute throws', async () => {
      const request = {
        from: mockFromAddress,
        new_country: mockNewCountry,
        identity_owner: mockIdentityOwner,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Execution failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(identityModule.updateIdentity(request)).rejects.toThrow(
        mockError
      );
    });
  });

  describe('removeIdentity', () => {
    it('should call RwaClient.execute with correct parameters', async () => {
      const request = {
        from: mockFromAddress,
        identity_owner: mockIdentityOwner,
        gas_limit: mockGasLimit,
      };

      const result = await identityModule.removeIdentity(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          remove_identity: {
            from: mockFromAddress,
            identity_owner: mockIdentityOwner,
          },
        },
        mockIdentityAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if RwaClient.execute throws', async () => {
      const request = {
        from: mockFromAddress,
        identity_owner: mockIdentityOwner,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Execution failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(identityModule.removeIdentity(request)).rejects.toThrow(
        mockError
      );
    });
  });
});
