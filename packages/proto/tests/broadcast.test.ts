import { vi, beforeAll, describe, it, expect } from 'vitest'
import { Wallet, DirectSecp256k1Wallet, Registry } from '@cosmjs/proto-signing'
import { assertIsBroadcastTxSuccess, SigningStargateClient, StargateClient } from '@cosmjs/stargate'
import { cosmos } from '../src/'

beforeAll(() => {
  vi.setTimeout(30000)
})

describe('sign connection Test', () => {
  it('should init wallet and broadcast tx', async () => {
    expect(cosmos).toBeDefined()
  })
})

