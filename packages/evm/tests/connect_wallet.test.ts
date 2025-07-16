import { describe, it, expect } from "vitest"
import { setupProviderAndWallet } from "./utils"
import { getBankPrecompileEthersV6Contract } from "../src"

describe("Connect Wallet Test", () => {
  it("should connect to wallet and get bank balance", async () => {
    const [provider, wallet] = await setupProviderAndWallet()
    const bankContract = getBankPrecompileEthersV6Contract(provider)
    const balance = await provider.getBalance(wallet.address)
    expect(balance).toBeDefined()
  })
})

