import {KiiStargateQueryClient} from "../src";

async function main() {
  const rpcEndpoint = "https://a.testnet.kiivalidator.com:26658/";

  const client = await KiiStargateQueryClient.connect(
    rpcEndpoint
  );

  const address = "kii1s0jekzmfy3ejmf75lh0xfc2zl3958lfk8gqtws";
  const balance = await client.getAllBalances(address);
  console.log('balance', balance);
}

main().catch((err) => console.error(err))