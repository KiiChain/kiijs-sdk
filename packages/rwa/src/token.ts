import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from './client';

export interface TransferMessageRequest {
  from: string;
  to: string;
  amount: number;
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
  constructor(
    private rwaClient: RwaClient,
    private tokenAddress: string
  ) {}

  /**
   * Transfers tokens from one address to another.
   * @param request - A TransferMessageRequest containing transfer details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async transfer(
    request: TransferMessageRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      transfer: {
        recipient: request.to,
        amount: request.amount.toString(),
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.tokenAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Queries the balance of a given address.
   * @param request - A TokenInfoRequest containing the address to query
   * @returns Promise<{ balance: number }> - The balance of the address
   */
  public async balance(
    request: TokenInfoRequest
  ): Promise<{ balance: number }> {
    const queryMsg = {
      balance: {
        address: request.address,
      },
    };

    const result = await this.rwaClient.query<{ balance: string }>(
      this.tokenAddress,
      queryMsg
    );
    return { balance: parseInt(result.balance) || 0 };
  }

  /**
   * Queries token information.
   * @returns Promise<TokenInfo> - Token information
   */
  public async tokenInfo(): Promise<TokenInfo> {
    const queryMsg = { token_info: {} };

    const result = await this.rwaClient.query<{
      name: string;
      symbol: string;
      decimals: number;
      total_supply: string;
    }>(this.tokenAddress, queryMsg);

    return {
      name: result.name || '',
      symbol: result.symbol || '',
      decimals: result.decimals || 0,
      total_supply: result.total_supply || '0',
    };
  }

  /**
   * Queries the allowance for a spender.
   * @param owner - The owner address
   * @param spender - The spender address
   * @returns Promise<{ allowance: number }> - The allowance amount
   */
  public async allowance(
    owner: string,
    spender: string
  ): Promise<{ allowance: number }> {
    const queryMsg = {
      allowance: {
        owner,
        spender,
      },
    };

    const result = await this.rwaClient.query<{ allowance: string }>(
      this.tokenAddress,
      queryMsg
    );
    return { allowance: parseInt(result.allowance) || 0 };
  }

  /**
   * Approves a spender to spend tokens on behalf of the owner.
   * @param request - Contains from, spender, amount, and gas_limit
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async approve(request: {
    from: string;
    spender: string;
    amount: number;
    gas_limit: number;
  }): Promise<DeliverTxResponse> {
    const msg = {
      increase_allowance: {
        spender: request.spender,
        amount: request.amount.toString(),
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.tokenAddress,
      [],
      request.gas_limit
    );
  }
}
