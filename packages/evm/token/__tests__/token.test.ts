import { describe, it, expect } from "vitest";
import {
  getTokenName,
  getTokenSymbol,
  getTokenDecimals,
} from "../../src/token";
import { createPublicClient, http } from "viem";

const token = "0xA1FDAB3f0095572E1029699Def28ea454c0478b0";

const client = createPublicClient({
  transport: http("https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/"),
});

describe("ERC20 Utils on KiiChain", () => {
  it("get name", async () => {
    const name = await getTokenName(client, token);
    expect(name).toBe("TestKiiToken");
  });

  it("get symbol", async () => {
    const symbol = await getTokenSymbol(client, token);
    expect(symbol).toBe("TKII");
  });

  it("get decimals", async () => {
    const decimals = await getTokenDecimals(client, token);
    expect(decimals).toBe(18);
  });
});

