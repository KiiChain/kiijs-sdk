import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { ExecuteResponse } from './index';
import { SigningStargateClient } from '@cosmjs/stargate';
import { toUtf8 } from '@cosmjs/encoding';
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';

export interface ComplianceModuleRequest {
  from: string;
  module_addr: string;
  signer: DirectSecp256k1HdWallet;
  gas_limit: number;
}

export class ComplianceModule {
  private rpcClient: SigningStargateClient;
  private complianceAddress: string;

  constructor(rpcClient: SigningStargateClient, complianceAddress: string) {
    this.rpcClient = rpcClient;
    this.complianceAddress = complianceAddress;
  }

  /**
   * Adds a new compliance module.
   * @param request - A ComplianceModuleRequest containing module details
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async addComplianceModule(request: ComplianceModuleRequest): Promise<ExecuteResponse> {
    const msg = {
      add_compliance_module: {
        token_address: request.from,
        module_address: request.module_addr,
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.complianceAddress,
      msg: toUtf8(JSON.stringify(msg)),
      funds: [],
    };

    const msgAny = {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: executeContractMsg,
    };

    const result = await this.rpcClient.signAndBroadcast(
      request.from,
      [msgAny],
      "auto",
      "Add Compliance Module",
    );

    return {
      tx_hash: result.transactionHash,
      data: result.rawLog ? new TextEncoder().encode(result.rawLog) : new Uint8Array(),
      gas_used: Number(result.gasUsed),
      gas_wanted: Number(result.gasWanted),
      events: result.events || [],
      height: result.height,
    };
  }

  /**
   * Removes a compliance module.
   * @param request - A ComplianceModuleRequest containing module details
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async removeComplianceModule(request: ComplianceModuleRequest): Promise<ExecuteResponse> {
    const msg = {
      remove_compliance_module: {
        token_address: request.from,
        module_address: request.module_addr,
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.complianceAddress,
      msg: toUtf8(JSON.stringify(msg)),
      funds: [],
    };

    const msgAny = {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: executeContractMsg,
    };

    const result = await this.rpcClient.signAndBroadcast(
      request.from,
      [msgAny],
      "auto",
      "Remove Compliance Module",
    );

    return {
      tx_hash: result.transactionHash,
      data: result.rawLog ? new TextEncoder().encode(result.rawLog) : new Uint8Array(),
      gas_used: Number(result.gasUsed),
      gas_wanted: Number(result.gasWanted),
      events: result.events || [],
      height: result.height,
    };
  }
}

