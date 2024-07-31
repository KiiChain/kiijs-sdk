import {
  StargateClient,
  StargateClientOptions,
} from "@cosmjs/stargate";
import { Tendermint34Client, Tendermint37Client } from "@cosmjs/tendermint-rpc";

export class KiiStargateQueryClient extends StargateClient {
  constructor(
    tmClient: Tendermint37Client | Tendermint34Client | undefined,
    options: StargateClientOptions = {}
  ) {
    super(tmClient, options);
  }

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {}
  ) {
    // Tendermint/CometBFT 0.34/0.37 auto-detection. Starting with 0.37 we seem to get reliable versions again 🎉
    // Using 0.34 as the fallback.
    let tmClient;
    const tm37Client = await Tendermint37Client.connect(endpoint);
    const version = (await tm37Client.status()).nodeInfo.version;
    console.log(`[sdk::client.ts] Detected Tendermint version: ${version}`);
    if (version.startsWith("0.37.")) {
      tmClient = tm37Client;
    } else {
      tm37Client.disconnect();
      tmClient = await Tendermint34Client.connect(endpoint);
    }
    return new KiiStargateQueryClient(tmClient, options);
  }


}
