import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient, DeliverTxResponse, StargateClient } from '@cosmjs/stargate';
import { Coin, StdFee } from '@cosmjs/launchpad';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { ComplianceModule } from './compliance';
import { IdentityModule } from './raw-identity';
import { TokenModule } from './token';
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import { toUtf8 } from '@cosmjs/encoding';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

export interface AccountInfoResponse {
  account_number: number;
  sequence: number;
}

export interface ExecuteResponse {
  tx_hash: string;
  data: Uint8Array;
  gas_used: number;
  gas_wanted: number;
  events: readonly any[]; // Changed to readonly
  height: number;
}

const myRegistry = new Registry(defaultRegistryTypes);
myRegistry.register("/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract);

export class RwaClient {
  private rpcClient: SigningStargateClient;
  private queryClient: CosmWasmClient;
  private chainId: string;
  private tokenAddress: string;
  private identityAddress: string;
  private complianceAddress: string;
  private denom: string;
  private gasPrice: string;

  public compliance: ComplianceModule;
  public identity: IdentityModule;
  public token: TokenModule;

  private constructor(
    rpcClient: SigningStargateClient,
    queryClient: CosmWasmClient,
    chainId: string,
    tokenAddress: string,
    identityAddress: string,
    complianceAddress: string,
    denom: string,
    gasPrice: string,
  ) {
    this.rpcClient = rpcClient;
    this.queryClient = queryClient;
    this.chainId = chainId;
    this.tokenAddress = tokenAddress;
    this.identityAddress = identityAddress;
    this.complianceAddress = complianceAddress;
    this.denom = denom;
    this.gasPrice = gasPrice;

    // Initialize modules
    this.compliance = new ComplianceModule(rpcClient, complianceAddress);
    this.identity = new IdentityModule(rpcClient, identityAddress);
    this.token = new TokenModule(rpcClient, queryClient, tokenAddress);
  }

  public static async new(
    rpcUrl: string,
    chainId: string,
    tokenAddress: string,
    identityAddress: string,
    complianceAddress: string,
    denom: string,
    gasPrice: string,
  ): Promise<RwaClient> {
    // For now, we'll create a dummy signer for the connectWithSigner method.
    // In a real application, this would come from user input or a wallet.
    const mnemonic = "guilt elder dance satisfy pencil chuckle bronze behave rate film tumble flash";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "cosmos" });
    const [firstAccount] = await wallet.getAccounts();

    const rpcClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      wallet,
      { registry: myRegistry },
    );

    const queryClient = await CosmWasmClient.connect(rpcUrl);

    return new RwaClient(
      rpcClient,
      queryClient,
      chainId,
      tokenAddress,
      identityAddress,
      complianceAddress,
      denom,
      gasPrice,
    );
  }

  /**
   * Creates a new RwaClient with a provided signer.
   * @param rpcUrl - The RPC URL of the blockchain
   * @param chainId - The chain ID
   * @param tokenAddress - The token contract address
   * @param identityAddress - The identity contract address
   * @param complianceAddress - The compliance contract address
   * @param denom - The denomination for fees
   * @param gasPrice - The gas price
   * @param signer - The wallet signer
   * @returns Promise<RwaClient> - A new RwaClient instance
   */
  public static async newWithSigner(
    rpcUrl: string,
    chainId: string,
    tokenAddress: string,
    identityAddress: string,
    complianceAddress: string,
    denom: string,
    gasPrice: string,
    signer: DirectSecp256k1HdWallet,
  ): Promise<RwaClient> {
    const rpcClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      signer,
      { registry: myRegistry },
    );

    const queryClient = await CosmWasmClient.connect(rpcUrl);

    return new RwaClient(
      rpcClient,
      queryClient,
      chainId,
      tokenAddress,
      identityAddress,
      complianceAddress,
      denom,
      gasPrice,
    );
  }

  /**
   * Transfers native tokens (not contract tokens) from one address to another.
   * For contract token transfers, use this.token.transfer() instead.
   */
  public async transfer(
    fromAddress: string,
    toAddress: string,
    amount: number,
    signer: DirectSecp256k1HdWallet,
    gasLimit: number,
  ): Promise<ExecuteResponse> {
    const msg = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: fromAddress,
        toAddress: toAddress,
        amount: [
          {
            denom: this.denom,
            amount: amount.toString(),
          },
        ],
      },
    };

    const fee: StdFee = {
      amount: [
        {
          denom: this.denom,
          amount: (gasLimit * parseFloat(this.gasPrice)).toString(),
        },
      ],
      gas: gasLimit.toString(),
    };

    const result = await this.rpcClient.signAndBroadcast(
      fromAddress,
      [msg],
      fee,
      "Token Transfer",
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
   * Gets the native token balance for an address.
   * For contract token balances, use this.token.balance() instead.
   */
  public async balance(
    address: string,
  ): Promise<{ balance: number }> {
    const allBalances = await this.rpcClient.getAllBalances(address);
    const balance = allBalances.find(coin => coin.denom === this.denom);
    return { balance: balance ? parseInt(balance.amount) : 0 };
  }

  /**
   * Gets account information for an address.
   */
  public async getAccountInfo(address: string): Promise<AccountInfoResponse> {
    try {
      const account = await this.rpcClient.getAccount(address);
      if (account) {
        return {
          account_number: account.accountNumber,
          sequence: account.sequence,
        };
      }
      return { account_number: 0, sequence: 0 };
    } catch (error) {
      console.error('Error getting account info:', error);
      return { account_number: 0, sequence: 0 };
    }
  }

  /**
   * Generic contract execution method.
   */
  public async execute<T>(
    fromAddress: string,
    msg: T,
    contractAddress: string,
    funds: Coin[],
    signer: DirectSecp256k1HdWallet,
    gasLimit: number,
  ): Promise<ExecuteResponse> {
    const executeContractMsg: MsgExecuteContract = {
      sender: fromAddress,
      contract: contractAddress,
      msg: toUtf8(JSON.stringify(msg)),
      funds: funds,
    };

    const msgAny = {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: executeContractMsg,
    };

    const fee: StdFee = {
      amount: [
        {
          denom: this.denom,
          amount: (gasLimit * parseFloat(this.gasPrice)).toString(),
        },
      ],
      gas: gasLimit.toString(),
    };

    const result = await this.rpcClient.signAndBroadcast(
      fromAddress,
      [msgAny],
      fee,
      "Execute Contract",
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
   * Generic contract query method.
   */
  public async query<T>(contractAddress: string, queryMsg: any): Promise<T> {
    return await this.queryClient.queryContractSmart(contractAddress, queryMsg);
  }

  /**
   * Gets the chain ID.
   */
  public getChainId(): string {
    return this.chainId;
  }

  /**
   * Gets the RPC client.
   */
  public getRpcClient(): SigningStargateClient {
    return this.rpcClient;
  }
}

// Export all modules and types
export * from './compliance';
export * from './raw-identity';
export * from './token';


