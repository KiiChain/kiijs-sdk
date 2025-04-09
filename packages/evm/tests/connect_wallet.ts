import { ADDRESS_PRECOMPILE_ADDRESS, getAddressPrecompileEthersV6Contract } from '@kiichain/kiijs-evm';
import { ethers } from 'ethers';
import { Secp256k1 } from "@cosmjs/crypto";
import { Secp256k1HdWallet, makeCosmoshubPath } from "@cosmjs/amino";
import 'dotenv/config'

jest.setTimeout(60_000); // Total test timeout

describe('Connect Wallet Test', () => {
    let provider: ethers.JsonRpcProvider;
    let signer: ethers.HDNodeWallet;
    let addressPrecompile: ethers.Contract;
    let wallet: ethers.HDNodeWallet;
    let keyring: Secp256k1HdWallet;
  
    beforeAll(async () => {
      provider = new ethers.JsonRpcProvider(
        'https://json-rpc.devnet.v3.kiivalidator.com'
      );
  
      if (!process.env.TEST_MNEMONIC) {
        throw new Error("Missing TEST_MNEMONIC in .env");
      }

      keyring = await Secp256k1HdWallet.fromMnemonic(
        process.env.TEST_MNEMONIC,
        {
          prefix: "kii",
        }
      );      

      wallet = await ethers.HDNodeWallet.fromPhrase(process.env.TEST_MNEMONIC);

      signer = wallet.connect(provider);

      addressPrecompile = getAddressPrecompileEthersV6Contract(signer);
    });

    it('unexpected address', async () => {
        expect(signer.address).toEqual("0x4E9bdC3Dd5b4be373C0C08ce675A5E215796aF84")
      });
  });

