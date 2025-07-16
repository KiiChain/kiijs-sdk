import { vi, beforeAll, describe, it, expect } from 'vitest'
import { kiichain } from '../src/'

beforeAll(() => {
  vi.setTimeout(30000)
})

describe('sign connection Test', () => {
  it('should export kiichain modules', () => {
    expect(kiichain).toBeDefined()
  })
})

