// compliance.test.ts
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from '../src/client';
import { ComplianceModule } from '../src/compliance';

// Mock the entire RwaClient module
jest.mock('../src/client', () => {
  // Create a mock implementation that matches the real class
  return {
    RwaClient: {
      new: jest.fn().mockResolvedValue({
        execute: jest.fn(),
        query: jest.fn(),
      }),
    },
  };
});

describe('ComplianceModule', () => {
  let mockRwaClient: jest.Mocked<RwaClient>;
  let complianceModule: ComplianceModule;
  const mockComplianceAddress = 'kii1complianceaddress';
  const mockFromAddress = 'kii1fromaddress';
  const mockModuleAddress = 'kii1moduleaddress';
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
    gasWanted: BigInt(0),
  };

  beforeEach(async () => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Get the mocked instance by calling the static 'new' method
    mockRwaClient = (await RwaClient.new(
      'mock-rpc-url',
      'test-chain',
      'testdenom',
      '0.025',
      mockSigner
    )) as jest.Mocked<RwaClient>;

    // Mock the execute method to resolve with our test response
    mockRwaClient.execute.mockResolvedValue(mockTxResponse);

    complianceModule = new ComplianceModule(
      mockRwaClient,
      mockComplianceAddress
    );
  });

  describe('addComplianceModule', () => {
    it('should call RwaClient.execute with correct parameters', async () => {
      const request = {
        from: mockFromAddress,
        module_addr: mockModuleAddress,
        gas_limit: mockGasLimit,
      };

      const result = await complianceModule.addComplianceModule(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          add_compliance_module: {
            token_address: mockFromAddress,
            module_address: mockModuleAddress,
          },
        },
        mockComplianceAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if RwaClient.execute throws', async () => {
      const request = {
        from: mockFromAddress,
        module_addr: mockModuleAddress,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Execution failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(
        complianceModule.addComplianceModule(request)
      ).rejects.toThrow(mockError);
    });
  });

  describe('removeComplianceModule', () => {
    it('should call RwaClient.execute with correct parameters', async () => {
      const request = {
        from: mockFromAddress,
        module_addr: mockModuleAddress,
        gas_limit: mockGasLimit,
      };

      const result = await complianceModule.removeComplianceModule(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          remove_compliance_module: {
            token_address: mockFromAddress,
            module_address: mockModuleAddress,
          },
        },
        mockComplianceAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if RwaClient.execute throws', async () => {
      const request = {
        from: mockFromAddress,
        module_addr: mockModuleAddress,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Execution failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(
        complianceModule.removeComplianceModule(request)
      ).rejects.toThrow(mockError);
    });
  });
});
