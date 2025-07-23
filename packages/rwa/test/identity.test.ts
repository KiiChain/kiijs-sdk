import { IdentityModule, AddIdentityRequest, UpdateIdentityRequest, RemoveIdentityRequest } from "../src/raw-identity";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

describe("IdentityModule", () => {
  let mockRpcClient: jest.Mocked<SigningStargateClient>;
  let identityModule: IdentityModule;
  let mockSigner: DirectSecp256k1HdWallet;

  beforeEach(async () => {
    mockRpcClient = {
      signAndBroadcast: jest.fn(),
      queryContractSmart: jest.fn(),
    } as any;

    mockSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      "guilt elder dance satisfy pencil chuckle bronze behave rate film tumble flash",
      { prefix: "cosmos" }
    );

    identityModule = new IdentityModule(mockRpcClient, "identity_contract_address");
  });

  it("should add an identity", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_add_identity",
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

    const request: AddIdentityRequest = {
      from: "sender_address",
      country: "US",
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await identityModule.addIdentity(request);

    expect(result.tx_hash).toBe("tx_hash_add_identity");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });

  it("should update an identity", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_update_identity",
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

    const request: UpdateIdentityRequest = {
      from: "sender_address",
      new_country: "CA",
      identity_owner: "identity_owner_address",
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await identityModule.updateIdentity(request);

    expect(result.tx_hash).toBe("tx_hash_update_identity");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });

  it("should remove an identity", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_remove_identity",
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

    const request: RemoveIdentityRequest = {
      from: "sender_address",
      identity_owner: "identity_owner_address",
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await identityModule.removeIdentity(request);

    expect(result.tx_hash).toBe("tx_hash_remove_identity");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });
});

