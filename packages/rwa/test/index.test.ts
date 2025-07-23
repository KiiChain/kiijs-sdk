import { RwaClient } from "../src";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

// Mock the SigningStargateClient
jest.mock("@cosmjs/stargate", () => ({
  SigningStargateClient: {
    connectWithSigner: jest.fn(() =>
      Promise.resolve({
        // Mock necessary methods and properties
        signAndBroadcast: jest.fn(() => {
          const mockDeliverTxResponse: DeliverTxResponse = {
            transactionHash: "mock_tx_hash",
            rawLog: "mock_raw_log",
            gasUsed: BigInt(100),
            gasWanted: BigInt(200),
            events: [],
            height: 123,
            code: 0,
            txIndex: 0,
            msgResponses: [],
          };
          return Promise.resolve(mockDeliverTxResponse);
        }),
        getAllBalances: jest.fn(() => Promise.resolve([
          { denom: "uatom", amount: "1000000" }
        ])),
        getAccount: jest.fn(() => Promise.resolve({
          accountNumber: 1,
          sequence: 1,
        })),
        simulate: jest.fn(() => Promise.resolve({ gasUsed: BigInt(100)})),
        getSequence: jest.fn(() => Promise.resolve({ accountNumber: 1, sequence: 1})),
      })
    ),
  },
  defaultRegistryTypes: [],
}));

// Mock DirectSecp256k1HdWallet and Registry
jest.mock("@cosmjs/proto-signing", () => ({
  DirectSecp256k1HdWallet: {
    fromMnemonic: jest.fn(() =>
      Promise.resolve({
        getAccounts: jest.fn(() =>
          Promise.resolve([
            { address: "cosmos1mockaddress", algo: "secp256k1", pubkey: new Uint8Array() },
          ])
        ),
      })
    ),
  },
  Registry: jest.fn().mockImplementation(() => ({
    register: jest.fn(),
  })),
}));

// Mock CosmWasmClient
jest.mock("@cosmjs/cosmwasm-stargate", () => ({
  CosmWasmClient: {
    connect: jest.fn(() =>
      Promise.resolve({
        queryContractSmart: jest.fn(() => Promise.resolve({})),
      })
    ),
  },
}));

describe("RwaClient", () => {
  let client: RwaClient;
  let mockSigner: DirectSecp256k1HdWallet;

  beforeEach(async () => {
    mockSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      "guilt elder dance satisfy pencil chuckle bronze behave rate film tumble flash",
      { prefix: "cosmos" }
    );

    client = await RwaClient.new(
      "http://localhost:26657",
      "test-chain",
      "token_address",
      "identity_address",
      "compliance_address",
      "uatom",
      "0.0025",
    );
  });

  it("should be able to create a new client", async () => {
    expect(client).toBeInstanceOf(RwaClient);
  });

  it("should be able to create a new client with signer", async () => {
    const clientWithSigner = await RwaClient.newWithSigner(
      "http://localhost:26657",
      "test-chain",
      "token_address",
      "identity_address",
      "compliance_address",
      "uatom",
      "0.0025",
      mockSigner,
    );
    expect(clientWithSigner).toBeInstanceOf(RwaClient);
  });

  it("should have compliance module", () => {
    expect(client.compliance).toBeDefined();
  });

  it("should have identity module", () => {
    expect(client.identity).toBeDefined();
  });

  it("should have token module", () => {
    expect(client.token).toBeDefined();
  });

  it("should transfer native tokens", async () => {
    const result = await client.transfer(
      "cosmos1sender",
      "cosmos1recipient",
      1000000,
      mockSigner,
      200000
    );

    expect(result.tx_hash).toBe("mock_tx_hash");
    expect(result.height).toBe(123);
  });

  it("should get native token balance", async () => {
    const result = await client.balance("cosmos1address");

    expect(result.balance).toBe(1000000);
  });

  it("should get account info", async () => {
    const result = await client.getAccountInfo("cosmos1address");

    expect(result.account_number).toBe(1);
    expect(result.sequence).toBe(1);
  });

  it("should execute generic contract", async () => {
    const msg = { test: "message" };
    const result = await client.execute(
      "cosmos1sender",
      msg,
      "cosmos1contract",
      [],
      mockSigner,
      200000
    );

    expect(result.tx_hash).toBe("mock_tx_hash");
  });

  it("should query contract", async () => {
    const queryMsg = { get_info: {} };
    const result = await client.query("cosmos1contract", queryMsg);

    expect(result).toEqual({});
  });

  it("should get chain ID", () => {
    const chainId = client.getChainId();
    expect(chainId).toBe("test-chain");
  });

  it("should get RPC client", () => {
    const rpcClient = client.getRpcClient();
    expect(rpcClient).toBeDefined();
  });
});

