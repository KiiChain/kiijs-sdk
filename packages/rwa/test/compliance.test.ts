import { ComplianceModule, ComplianceModuleRequest } from "../src/compliance";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

describe("ComplianceModule", () => {
  let mockRpcClient: jest.Mocked<SigningStargateClient>;
  let complianceModule: ComplianceModule;
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

    complianceModule = new ComplianceModule(mockRpcClient, "compliance_contract_address");
  });

  it("should add a compliance module", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_add",
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

    const request: ComplianceModuleRequest = {
      from: "sender_address",
      module_addr: "new_module_address",
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await complianceModule.addComplianceModule(request);

    expect(result.tx_hash).toBe("tx_hash_add");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });

  it("should remove a compliance module", async () => {
    const mockDeliverTxResponse: DeliverTxResponse = {
      transactionHash: "tx_hash_remove",
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

    const request: ComplianceModuleRequest = {
      from: "sender_address",
      module_addr: "existing_module_address",
      signer: mockSigner,
      gas_limit: 500000,
    };

    const result = await complianceModule.removeComplianceModule(request);

    expect(result.tx_hash).toBe("tx_hash_remove");
    expect(mockRpcClient.signAndBroadcast).toHaveBeenCalledTimes(1);
  });
});


