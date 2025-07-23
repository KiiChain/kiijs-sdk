import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse, SigningStargateClient} from '@cosmjs/stargate';
import { Coin, StdFee } from '@cosmjs/launchpad';
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import { toUtf8 } from '@cosmjs/encoding';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

export interface AccountInfoResponse {
  account_number: number;
  sequence: number;
}

const myRegistry = new Registry(defaultRegistryTypes);
myRegistry.register("/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract);

export class RwaClient {
  private rpcClient: SigningStargateClient;
  private queryClient: CosmWasmClient;
  private chainId: string;
  private denom: string;
  private gasPrice: string;

  private constructor(
    rpcClient: SigningStargateClient,
    queryClient: CosmWasmClient,
    chainId: string,
    denom: string,
    gasPrice: string,
  ) {
    this.rpcClient = rpcClient;
    this.queryClient = queryClient;
    this.chainId = chainId;
    this.denom = denom;
    this.gasPrice = gasPrice;
  }

  /**
   * Creates a new RwaClient with a provided signer.
   * @param rpcUrl - The RPC URL of the blockchain
   * @param chainId - The chain ID
   * @param denom - The denomination for fees
   * @param gasPrice - The gas price
   * @param signer - The wallet signer
   * @returns Promise<RwaClient> - A new RwaClient instance
   */
  public static async new(
    rpcUrl: string,
    chainId: string,
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
      denom,
      gasPrice,
    );
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
  ): Promise<DeliverTxResponse> {
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

    return result;
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