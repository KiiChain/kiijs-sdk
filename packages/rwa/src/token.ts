import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { ExecuteResponse } from "./index";
import { SigningStargateClient } from "@cosmjs/stargate";
import { toUtf8 } from "@cosmjs/encoding";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export interface TransferMessageRequest {
  from: string;
  to: string;
  amount: number;
  signer: DirectSecp256k1HdWallet;
  gas_limit: number;
}

export interface TokenInfoRequest {
  address: string;
}

export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  total_supply: string;
}

export class TokenModule {
  private rpcClient: SigningStargateClient;
  private queryClient: CosmWasmClient;
  private tokenAddress: string;

  constructor(rpcClient: SigningStargateClient, queryClient: CosmWasmClient, tokenAddress: string) {
    this.rpcClient = rpcClient;
    this.queryClient = queryClient;
    this.tokenAddress = tokenAddress;
  }

  /**
   * Transfers tokens from one address to another.
   * @param request - A TransferMessageRequest containing transfer details
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async transfer(request: TransferMessageRequest): Promise<ExecuteResponse> {
    const msg = {
      transfer: {
        recipient: request.to,
        amount: request.amount.toString(),
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.tokenAddress,
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
      "Token Transfer",
    );

    return {
      tx_hash: result.transactionHash,
      data: result.events.toString() ? new TextEncoder().encode(result.events.toString()) : new Uint8Array(),
      gas_used: Number(result.gasUsed),
      gas_wanted: Number(result.gasWanted),
      events: result.events || [],
      height: result.height,
    };
  }

  /**
   * Queries the balance of a given address.
   * @param request - A TokenInfoRequest containing the address to query
   * @returns Promise<{ balance: number }> - The balance of the address
   */
  public async balance(request: TokenInfoRequest): Promise<{ balance: number }> {
    const queryMsg = {
      balance: {
        address: request.address,
      },
    };

    try {
      const result = await this.queryClient.queryContractSmart(
        this.tokenAddress,
        queryMsg
      );
      
      return { balance: parseInt(result.balance) || 0 };
    } catch (error) {
      console.error("Error querying balance:", error);
      return { balance: 0 };
    }
  }

  /**
   * Queries token information.
   * @returns Promise<TokenInfo> - Token information
   */
  public async tokenInfo(): Promise<TokenInfo> {
    const queryMsg = {
      token_info: {},
    };
    const result = await this.queryClient.queryContractSmart(
      this.tokenAddress,
      queryMsg
    );
    
    return {
      name: result.name || "",
      symbol: result.symbol || "",
      decimals: result.decimals || 0,
      total_supply: result.total_supply || "0",
    };
  }

  /**
   * Queries the allowance for a spender.
   * @param owner - The owner address
   * @param spender - The spender address
   * @returns Promise<{ allowance: number }> - The allowance amount
   */
  public async allowance(owner: string, spender: string): Promise<{ allowance: number }> {
    const queryMsg = {
      allowance: {
        owner: owner,
        spender: spender,
      },
    };
    
    const result = await this.queryClient.queryContractSmart(
      this.tokenAddress,
      queryMsg
    );
    
    return { allowance: parseInt(result.allowance) || 0 };
  }

  /**
   * Approves a spender to spend tokens on behalf of the owner.
   * @param request - Contains from, spender, amount, signer, and gas_limit
   * @returns Promise<ExecuteResponse> - The response data from the contract execution
   */
  public async approve(request: {
    from: string;
    spender: string;
    amount: number;
    signer: DirectSecp256k1HdWallet;
    gas_limit: number;
  }): Promise<ExecuteResponse> {
    const msg = {
      increase_allowance: {
        spender: request.spender,
        amount: request.amount.toString(),
      },
    };

    const executeContractMsg: MsgExecuteContract = {
      sender: request.from,
      contract: this.tokenAddress,
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
      "Approve Token",
    );

    return {
      tx_hash: result.transactionHash,
      data: result.events.toString() ? new TextEncoder().encode(result.events.toString()) : new Uint8Array(),
      gas_used: Number(result.gasUsed),
      gas_wanted: Number(result.gasWanted),
      events: result.events || [],
      height: result.height,
    };
  }
}

