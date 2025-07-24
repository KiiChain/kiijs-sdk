// token.test.ts
import { TokenModule } from '../src/token';
import { RwaClient } from '../src/client';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse } from '@cosmjs/stargate';

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

describe('TokenModule', () => {
  let mockRwaClient: jest.Mocked<RwaClient>;
  let tokenModule: TokenModule;
  const mockTokenAddress = 'kii1tokenaddress';
  const mockFromAddress = 'kii1fromaddress';
  const mockToAddress = 'kii1toaddress';
  const mockOwnerAddress = 'kii1owneraddress';
  const mockSpenderAddress = 'kii1spenderaddress';
  const mockAmount = 1000;
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
      gasWanted: BigInt(1000)
  };

  const mockTokenInfo = {
    name: 'Test Token',
    symbol: 'TEST',
    decimals: 6,
    total_supply: '1000000000',
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
    
    tokenModule = new TokenModule(mockRwaClient, mockTokenAddress);
  });

  describe('transfer', () => {
    it('should call RwaClient.execute with correct parameters', async () => {
      const request = {
        from: mockFromAddress,
        to: mockToAddress,
        amount: mockAmount,
        gas_limit: mockGasLimit,
      };

      const result = await tokenModule.transfer(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          transfer: {
            recipient: mockToAddress,
            amount: mockAmount.toString(),
          },
        },
        mockTokenAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if RwaClient.execute throws', async () => {
      const request = {
        from: mockFromAddress,
        to: mockToAddress,
        amount: mockAmount,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Transfer failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(tokenModule.transfer(request))
        .rejects.toThrow(mockError);
    });
  });

  describe('balance', () => {
    it('should call RwaClient.query with correct parameters and return balance', async () => {
      const request = {
        address: mockFromAddress,
      };

      const mockBalanceResponse = { balance: '5000' };
      mockRwaClient.query.mockResolvedValue(mockBalanceResponse);

      const result = await tokenModule.balance(request);

      expect(mockRwaClient.query).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.query).toHaveBeenCalledWith(
        mockTokenAddress,
        {
          balance: {
            address: mockFromAddress,
          },
        }
      );

      expect(result).toEqual({ balance: 5000 });
    });

    it('should return 0 balance if query returns invalid value', async () => {
      const request = {
        address: mockFromAddress,
      };

      mockRwaClient.query.mockResolvedValue({ balance: 'invalid' });

      const result = await tokenModule.balance(request);
      expect(result).toEqual({ balance: 0 });
    });
  });

  describe('tokenInfo', () => {
    it('should call RwaClient.query and return token info', async () => {
      mockRwaClient.query.mockResolvedValue(mockTokenInfo);

      const result = await tokenModule.tokenInfo();

      expect(mockRwaClient.query).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.query).toHaveBeenCalledWith(
        mockTokenAddress,
        { token_info: {} }
      );

      expect(result).toEqual(mockTokenInfo);
    });

    it('should return default values if query returns empty', async () => {
      mockRwaClient.query.mockResolvedValue({});

      const result = await tokenModule.tokenInfo();
      expect(result).toEqual({
        name: '',
        symbol: '',
        decimals: 0,
        total_supply: '0',
      });
    });
  });

  describe('allowance', () => {
    it('should call RwaClient.query with correct parameters and return allowance', async () => {
      const mockAllowanceResponse = { allowance: '2000' };
      mockRwaClient.query.mockResolvedValue(mockAllowanceResponse);

      const result = await tokenModule.allowance(mockOwnerAddress, mockSpenderAddress);

      expect(mockRwaClient.query).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.query).toHaveBeenCalledWith(
        mockTokenAddress,
        {
          allowance: {
            owner: mockOwnerAddress,
            spender: mockSpenderAddress,
          },
        }
      );

      expect(result).toEqual({ allowance: 2000 });
    });

    it('should return 0 allowance if query returns invalid value', async () => {
      mockRwaClient.query.mockResolvedValue({ allowance: 'invalid' });

      const result = await tokenModule.allowance(mockOwnerAddress, mockSpenderAddress);
      expect(result).toEqual({ allowance: 0 });
    });
  });

  describe('approve', () => {
    it('should call RwaClient.execute with correct parameters for approval', async () => {
      const request = {
        from: mockFromAddress,
        spender: mockSpenderAddress,
        amount: mockAmount,
        gas_limit: mockGasLimit,
      };

      const result = await tokenModule.approve(request);

      expect(mockRwaClient.execute).toHaveBeenCalledTimes(1);
      expect(mockRwaClient.execute).toHaveBeenCalledWith(
        mockFromAddress,
        {
          increase_allowance: {
            spender: mockSpenderAddress,
            amount: mockAmount.toString(),
          },
        },
        mockTokenAddress,
        [],
        mockGasLimit
      );

      expect(result).toEqual(mockTxResponse);
    });

    it('should throw if approval fails', async () => {
      const request = {
        from: mockFromAddress,
        spender: mockSpenderAddress,
        amount: mockAmount,
        gas_limit: mockGasLimit,
      };

      const mockError = new Error('Approval failed');
      mockRwaClient.execute.mockRejectedValue(mockError);

      await expect(tokenModule.approve(request))
        .rejects.toThrow(mockError);
    });
  });
});