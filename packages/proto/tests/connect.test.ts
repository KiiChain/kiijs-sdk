import { TESTNET_CONFIG, setupTestClient } from './utils';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient} from '@cosmjs/stargate';
import { kiichain } from '@kiichain/kiijs-proto';
import { Bech32ToHex } from '@kiichain/kiijs-evm';

jest.setTimeout(30_000); // Total test timeout

describe('sign connection Test', () => {
  let client: SigningStargateClient; 
  let wallet: DirectSecp256k1HdWallet; 

  it('setup client and wallet failed', async () => {
    [client, wallet] = await setupTestClient();
    expect(client).toBeDefined();
    expect(wallet).toBeDefined();
  });
  
  it('setup query client and check balance', async () => {
    const { createRPCQueryClient } = kiichain.ClientFactory; 
    const queryClient = await createRPCQueryClient({ rpcEndpoint: TESTNET_CONFIG.rpcEndpoint });
    
    const accounts = await wallet.getAccounts()
    const address = accounts[0].address
    console.log("Account address:", address)
    const evmAddress = Bech32ToHex(address)
    console.log("Evm address:", evmAddress)
    const response = await queryClient.cosmos.bank.v1beta1.balance({address: address, denom: "akii"})
    console.log("Balance of akii: ", response.balance.amount)
    expect(Number(response.balance.amount)).toBeGreaterThan(0)
  });

});