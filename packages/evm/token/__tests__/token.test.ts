import { describe, it, expect } from 'vitest'
import { getTokenName, getTokenSymbol, getTokenDecimals } from '../index'

const token = "0xA1FDAB3f0095572E1029699Def28ea454c0478b0"

describe("ERC20 Utils", () => {
  it("get name", async () => {
    const name = await getTokenName(token)
    expect(name).toBeDefined()
  })

  it("get symbol", async () => {
    const symbol = await getTokenSymbol(token)
    expect(symbol).toBeDefined()
  })

  it("get decimals", async () => {
    const decimals = await getTokenDecimals(token)
    expect(decimals).toBeDefined()
  })
})

