import { ADDRESS_PRECOMPILE_ADDRESS, getAddressPrecompileEthersV6Contract } from '@kiichain/kiijs-evm';
import { ethers } from 'ethers';
import { Secp256k1 } from "@cosmjs/crypto";
import { Secp256k1HdWallet, makeCosmoshubPath } from "@cosmjs/amino";
import 'dotenv/config'

jest.setTimeout(60_000); // Total test timeout

describe('Connect Wallet Test', () => {
    let provider: ethers.JsonRpcProvider;
    let wallet: ethers.Wallet;
  
    beforeAll(async () => {
      provider = new ethers.JsonRpcProvider(
        'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/'
      );
  
      if (!process.env.TEST_PRIVATE_KEY) {
        throw new Error("Missing TEST_PRIVATE_KEY in .env");
      }    

      wallet = new ethers.Wallet(process.env.TEST_PRIVATE_KEY, provider);
    });

    it('unexpected address', async () => {
        expect(wallet.address).toEqual(process.env.TEST_HEX_ADDRESS)
      });

    it('should send test transaction', async () => {
      const tx = await wallet.sendTransaction({
        to: wallet.address, // Send to self
        value: ethers.parseEther("0.001"),
        gasLimit: 100000 // Explicit gas limit
      });
      console.log("Tx hash:", tx.hash);
      expect(tx.hash).toMatch(/^0x/);
    });
  });

