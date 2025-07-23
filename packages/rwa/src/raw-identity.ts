import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { ExecuteResponse } from './index';
import { SigningStargateClient } from '@cosmjs/stargate';
import { toUtf8 } from '@cosmjs/encoding';
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';

export interface AddIdentityRequest {
  from: string;
  country: string;
  signer: DirectSecp256k1HdWallet;
  gas_limit: number;
}

export interface UpdateIdentityRequest {
  from: string;
  new_country: string;
  identity_owner: string;
  signer: DirectSecp256k1HdWallet;
  gas_limit: number;
}

export interface RemoveIdentityRequest {
  from: string;
  identity_owner: string;
  signer: DirectSecp256k1HdWallet;
  gas_limit: number;
}

export class IdentityModule {
  private rpcClient: SigningStargateClient;
  private identityAddress: string;

  constructor(rpcClient: SigningStargateClient, identityAddress: string) {
    this.rpcClient = rpcClient;
    this.identityAddress = identityAddress;
  }

  /**
   * Adds a new identity to the chain.
   * @param request - An AddIdentityRequest containing identity details
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async addIdentity(request: AddIdentityRequest): Promise<ExecuteResponse> {
    const msg = {
      add_identity: {
        from: request.from,
        country: request.country,
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.identityAddress,
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
      "Add Identity",
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
   * Updates an existing identity.
   * @param request - An UpdateIdentityRequest containing updated identity details
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async updateIdentity(request: UpdateIdentityRequest): Promise<ExecuteResponse> {
    const msg = {
      update_identity: {
        from: request.from,
        new_country: request.new_country,
        identity_owner: request.identity_owner,
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.identityAddress,
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
      "Update Identity",
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
   * Removes an identity from the chain.
   * @param request - A RemoveIdentityRequest containing identity details
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async removeIdentity(request: RemoveIdentityRequest): Promise<ExecuteResponse> {
    const msg = {
      remove_identity: {
        from: request.from,
        identity_owner: request.identity_owner,
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.identityAddress,
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
      "Remove Identity",
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

