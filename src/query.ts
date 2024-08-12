// import {
//   StargateClient,
//   StargateClientOptions,
// } from "@cosmjs/stargate";
// import { Tendermint34Client, Tendermint37Client } from "@cosmjs/tendermint-rpc";
import {Web3} from 'web3';

export class KiiStargateQueryClient {
  public web3: Web3 | undefined;
  constructor(
    web3: Web3
    // tmClient: Tendermint37Client | Tendermint34Client | undefined,
    // options: StargateClientOptions = {}
  ) {
    // super(tmClient, options);
    this.web3 = web3
  }

  public static async connect(
    endpoint: string
  ) {
    const web3Provider = new Web3.providers.HttpProvider(endpoint);
    const web3 = new Web3(web3Provider);
    return new KiiStargateQueryClient(web3);
  }

  public async getBalance(address: string):Promise<any> {
    let balance = 0;
    if (this.web3) {
      return this.web3.eth.getBalance(address);
    }
    return balance
  }

  // public static async connect(
  //   endpoint: string,
  //   options: StargateClientOptions = {}
  // ) {
  //   // Tendermint/CometBFT 0.34/0.37 auto-detection. Starting with 0.37 we seem to get reliable versions again 🎉
  //   // Using 0.34 as the fallback.
  //   let tmClient;
  //   const tm37Client = await Tendermint37Client.connect(endpoint);
  //   const version = (await tm37Client.status()).nodeInfo.version;
  //   console.log(`[sdk::client.ts] Detected Tendermint version: ${version}`);
  //   if (version.startsWith("0.37.")) {
  //     tmClient = tm37Client;
  //   } else {
  //     tm37Client.disconnect();
  //     tmClient = await Tendermint34Client.connect(endpoint);
  //   }
  //   return new KiiStargateQueryClient(tmClient, options);
  // }

}
