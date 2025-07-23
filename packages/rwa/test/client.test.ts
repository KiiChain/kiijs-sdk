import { RwaClient } from '../src/client';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate';
import { Coin } from '@cosmjs/launchpad';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

// Mock the external dependencies
jest.mock('@cosmjs/proto-signing');
jest.mock('@cosmjs/stargate');
jest.mock('@cosmjs/cosmwasm-stargate');

describe('RwaClient', () => {
  const mockRpcUrl = 'http://localhost:26657';
  const mockChainId = 'test-chain-1';
  const mockDenom = 'tkii';
  const mockGasPrice = '0.025';
  const mockFromAddress = 'kii1abc...';
  const mockContractAddress = 'kii123...';

  let mockSigner: jest.Mocked<DirectSecp256k1HdWallet>;
  let mockRpcClient: jest.Mocked<SigningStargateClient>;
  let mockQueryClient: jest.Mocked<CosmWasmClient>;
  let rwaClient: RwaClient;

  // Sample test data
  const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: 'mockTxHash',
      gasUsed: BigInt(100000),
      gasWanted: BigInt(200000),
      height: 12345,
      events: [],
      rawLog: '',
      txIndex: 0,
      code: 0,
      msgResponses: []
  };

  const mockAccountInfo = {
    accountNumber: 1,
    sequence: 5,
  };

  beforeEach(async () => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup mock signer
    mockSigner = {
      getAccounts: jest.fn().mockResolvedValue([{ address: mockFromAddress }]),
    } as unknown as jest.Mocked<DirectSecp256k1HdWallet>;

    // Setup mock RPC client
    mockRpcClient = {
      getAccount: jest.fn().mockResolvedValue(mockAccountInfo),
      signAndBroadcast: jest.fn().mockResolvedValue(mockDeliverTxResponse),
    } as unknown as jest.Mocked<SigningStargateClient>;

    // Setup mock query client
    mockQueryClient = {
      queryContractSmart: jest.fn().mockResolvedValue({}),
    } as unknown as jest.Mocked<CosmWasmClient>;

    // Mock the static methods
    (SigningStargateClient.connectWithSigner as jest.Mock).mockResolvedValue(mockRpcClient);
    (CosmWasmClient.connect as jest.Mock).mockResolvedValue(mockQueryClient);

    // Create a real instance with mocked dependencies
    rwaClient = await RwaClient.new(
      mockRpcUrl,
      mockChainId,
      mockDenom,
      mockGasPrice,
      mockSigner
    );
  });

  describe('initialization', () => {
    it('should initialize with correct parameters', async () => {
      expect(SigningStargateClient.connectWithSigner).toHaveBeenCalledWith(
        mockRpcUrl,
        mockSigner,
        expect.any(Object) // Registry
      );
      expect(CosmWasmClient.connect).toHaveBeenCalledWith(mockRpcUrl);
      expect(rwaClient).toBeInstanceOf(RwaClient);
    });

    it('should throw when initialization fails', async () => {
      (SigningStargateClient.connectWithSigner as jest.Mock).mockRejectedValue(new Error('Connection failed'));
      
      await expect(
        RwaClient.new(
          mockRpcUrl,
          mockChainId,
          mockDenom,
          mockGasPrice,
          mockSigner
        )
      ).rejects.toThrow('Connection failed');
    });
  });

  describe('execute()', () => {
    const mockMsg = { transfer: { recipient: 'kii1def...', amount: '1000' } };
    const mockFunds: Coin[] = [{ denom: mockDenom, amount: '1000' }];
    const mockGasLimit = 200_000;

    it('should execute contract calls correctly', async () => {
      const result = await rwaClient.execute(
        mockFromAddress,
        mockMsg,
        mockContractAddress,
        mockFunds,
        mockSigner,
        mockGasLimit
      );

      expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledWith(
        mockFromAddress,
        expect.any(Array), // msgAny array
        expect.objectContaining({
          amount: [{ denom: mockDenom, amount: '5000' }], // 200000 * 0.025
          gas: '200000',
        }),
        'Execute Contract'
      );
      expect(result).toEqual(mockDeliverTxResponse);
    });

    it('should handle execution errors', async () => {
      mockRpcClient.signAndBroadcast.mockRejectedValue(new Error('Execution failed'));

      await expect(
        rwaClient.execute(
          mockFromAddress,
          mockMsg,
          mockContractAddress,
          mockFunds,
          mockSigner,
          mockGasLimit
        )
      ).rejects.toThrow('Execution failed');
    });
  });

  describe('query()', () => {
    const mockQueryMsg = { balance: { address: mockFromAddress } };
    const mockQueryResponse = { balance: '1000' };

    it('should query contracts correctly', async () => {
      mockQueryClient.queryContractSmart.mockResolvedValue(mockQueryResponse);

      const result = await rwaClient.query<{ balance: string }>(
        mockContractAddress,
        mockQueryMsg
      );

      expect(mockQueryClient.queryContractSmart).toHaveBeenCalledWith(
        mockContractAddress,
        mockQueryMsg
      );
      expect(result).toEqual(mockQueryResponse);
    });

    it('should handle query errors', async () => {
      mockQueryClient.queryContractSmart.mockRejectedValue(new Error('Query failed'));

      await expect(
        rwaClient.query(mockContractAddress, mockQueryMsg)
      ).rejects.toThrow('Query failed');
    });
  });

  describe('getChainId()', () => {
    it('should return the chain ID', () => {
      expect(rwaClient.getChainId()).toBe(mockChainId);
    });
  });

  describe('getRpcClient()', () => {
    it('should return the RPC client instance', () => {
      expect(rwaClient.getRpcClient()).toBe(mockRpcClient);
    });
  });
});