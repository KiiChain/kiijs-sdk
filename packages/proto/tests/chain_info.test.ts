import { vi, beforeAll, describe, it, expect } from 'vitest'
import { TESTNET_CONFIG, withRetry } from './utils'
import { cosmos } from '../src/'

beforeAll(() => {
  vi.setTimeout(30000)
})

describe('Chain Info Tests', () => {
  it('should have valid testnet config', () => {
    expect(TESTNET_CONFIG).toBeDefined()
    expect(TESTNET_CONFIG.rpc).toMatch(/^https?:\/\//)
  })
})

