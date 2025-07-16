import { describe, it, expect } from "vitest"
import { getIBCPrecompileEthersV6Contract } from "../src"
import { setupProviderAndWallet } from "./utils"

describe("IBC Contract Test", () => {
  it("should connect to IBC contract", async () => {
    const [provider] = await setupProviderAndWallet()
    const ibcContract = getIBCPrecompileEthersV6Contract(provider)
    const code = await provider.getCode(ibcContract.target)
    console.log("IBC Contract Code:", code)
    expect(code).toMatch(/^0x/)
  })
})

