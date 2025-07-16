import { describe, it, expect } from "vitest"
import { getTokenName, getTokenSymbol, getTokenDecimals } from "../index"

const token = "0xA1FDAB3f0095572E1029699Def28ea454c0478b0"

describe("ERC20 Utils", () => {
  it("get name", async () => {
    const name = await getTokenName(token)
    expect(typeof name).toBe("string")
  })

  it("get symbol", async () => {
    const symbol = await getTokenSymbol(token)
    expect(typeof symbol).toBe("string")
  })

  it("get decimals", async () => {
    const decimals = await getTokenDecimals(token)
    expect(typeof decimals).toBe("number")
  })
})

