import { TokenModule, TransferMessageRequest, TokenInfoRequest, TokenInfo } from "../src/token";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

describe("TokenModule", () => {
  let mockRpcClient: any;
  let mockQueryClient: any;
  let tokenModule: TokenModule;
  let mockSigner: DirectSecp256k1HdWallet;

  beforeEach(async () => {
    mockRpcClient = {
      signAndBroadcast: jest.fn(),
    };

    mockQueryClient = {
      queryContractSmart: jest.fn(),
    };

    mockSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      "guilt elder dance satisfy pencil chuckle bronze behave rate film tumble flash",
      { prefix: "cosmos" }
    );

    tokenModule = new TokenModule(mockRpcClient, mockQueryClient, "token_contract_address");
  });

  it("should transfer tokens", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_transfer",
      rawLog: "",
      gasUsed: BigInt(100),
      gasWanted: BigInt(200),
      events: [],
      height: 123,
      code: 0,
      txIndex: 0,
      msgResponses: [],
    };
    mockRpcClient.signAndBroadcast.mockResolvedValueOnce(mockDeliverTxResponse);

    const request: TransferMessageRequest = {
      from: "sender_address",
      to: "recipient_address",
      amount: 1000,
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await tokenModule.transfer(request);

    expect(result.tx_hash).toBe("tx_hash_transfer");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });

  it("should query token balance", async () => {
    mockQueryClient.queryContractSmart.mockResolvedValueOnce({
      balance: "5000",
    });

    const request: TokenInfoRequest = {
      address: "user_address",
    };

    const result = await tokenModule.balance(request);

    expect(result.balance).toBe(5000);
    expect(mockQueryClient.queryContractSmart).toHaveBeenCalledTimes(1);
  });

  it("should handle balance query error gracefully", async () => {
    mockQueryClient.queryContractSmart.mockRejectedValueOnce(new Error("Query failed"));

    const request: TokenInfoRequest = {
      address: "user_address",
    };

    const result = await tokenModule.balance(request);

    expect(result.balance).toBe(0);
    expect(mockQueryClient.queryContractSmart).toHaveBeenCalledTimes(1);
  });

  it("should query token info", async () => {
    const mockTokenInfo = {
      name: "Test Token",
      symbol: "TEST",
      decimals: 6,
      total_supply: "1000000000",
    };

    mockQueryClient.queryContractSmart.mockResolvedValueOnce(mockTokenInfo);

    const result = await tokenModule.tokenInfo();

    expect(result).toEqual(mockTokenInfo);
    expect(mockQueryClient.queryContractSmart).toHaveBeenCalledTimes(1);
  });

  it("should handle token info query error gracefully", async () => {
    mockQueryClient.queryContractSmart.mockRejectedValueOnce(new Error("Query failed"));

    const result = await tokenModule.tokenInfo();

    expect(result).toEqual({
      name: '',
      symbol: '',
      decimals: 0,
      total_supply: '0',
    });
    expect(mockQueryClient.queryContractSmart).toHaveBeenCalledTimes(1);
  });

  it("should query allowance", async () => {
    mockQueryClient.queryContractSmart.mockResolvedValueOnce({
      allowance: "2000",
    });

    const result = await tokenModule.allowance("owner_address", "spender_address");

    expect(result.allowance).toBe(2000);
    expect(mockQueryClient.queryContractSmart).toHaveBeenCalledTimes(1);
  });

  it("should approve tokens", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_approve",
      rawLog: "",
      gasUsed: BigInt(100),
      gasWanted: BigInt(200),
      events: [],
      height: 123,
      code: 0,
      txIndex: 0,
      msgResponses: [],
    };
    mockRpcClient.signAndBroadcast.mockResolvedValueOnce(mockDeliverTxResponse);

    const request = {
      from: "owner_address",
      spender: "spender_address",
      amount: 1500,
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await tokenModule.approve(request);

    expect(result.tx_hash).toBe("tx_hash_approve");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });
});

