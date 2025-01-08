import {KiiStargateQueryClient} from "../src";

async function main() {
  const rpcEndpoint = "https://rpc.dos.sentry.testnet.v3.kiivalidator.com/";

  const client = await KiiStargateQueryClient.connect(
    rpcEndpoint
  );

  const bal = await client.getBalance("0x84c86D737C4257FF5B8F42788c17D8C0b99f7A08");
  console.log("bal", bal);
}

main().catch((err) => console.error(err))