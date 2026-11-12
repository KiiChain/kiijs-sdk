import { Coin } from '@cosmjs/amino';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate';
import {
  beforeEach,
  describe,
  expect,
  it,
  type Mock,
  type Mocked,
  vi,
} from 'vitest';

import { RwaClient } from '../src/client';

// Mock the external dependencies
vi.mock('@cosmjs/proto-signing');
vi.mock('@cosmjs/stargate');
vi.mock('@cosmjs/cosmwasm-stargate');

describe('RwaClient', () => {
  const mockRpcUrl = 'http://localhost:26657';
  const mockChainId = 'test-chain-1';
  const mockDenom = 'tkii';
  const mockGasPrice = '0.025';
  const mockFromAddress = 'kii1abc...';
  const mockContractAddress = 'kii123...';

  let mockSigner: Mocked<DirectSecp256k1HdWallet>;
  let mockRpcClient: Mocked<SigningStargateClient>;
  let mockQueryClient: Mocked<CosmWasmClient>;
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
    msgResponses: [],
  };

  const mockAccountInfo = {
    accountNumber: 1,
    sequence: 5,
  };

  beforeEach(async () => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Setup mock signer
    mockSigner = {
      getAccounts: vi.fn().mockResolvedValue([{ address: mockFromAddress }]),
    } as unknown as Mocked<DirectSecp256k1HdWallet>;

    // Setup mock RPC client
    mockRpcClient = {
      getAccount: vi.fn().mockResolvedValue(mockAccountInfo),
      signAndBroadcast: vi.fn().mockResolvedValue(mockDeliverTxResponse),
    } as unknown as Mocked<SigningStargateClient>;

    // Setup mock query client
    mockQueryClient = {
      queryContractSmart: vi.fn().mockResolvedValue({}),
    } as unknown as Mocked<CosmWasmClient>;

    // Mock the static methods
    (SigningStargateClient.connectWithSigner as Mock).mockResolvedValue(
      mockRpcClient
    );
    (CosmWasmClient.connect as Mock).mockResolvedValue(mockQueryClient);

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
      (SigningStargateClient.connectWithSigner as Mock).mockRejectedValue(
        new Error('Connection failed')
      );

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
      mockRpcClient.signAndBroadcast.mockRejectedValue(
        new Error('Execution failed')
      );

      await expect(
        rwaClient.execute(
          mockFromAddress,
          mockMsg,
          mockContractAddress,
          mockFunds,
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
      mockQueryClient.queryContractSmart.mockRejectedValue(
        new Error('Query failed')
      );

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
