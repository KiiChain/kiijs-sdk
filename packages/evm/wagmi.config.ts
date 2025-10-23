import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import { Abi } from 'viem';

import BankPrecompileABI from './abis/precompiles/bank.json';
import Bech32PrecompileABI from './abis/precompiles/bech32.json';
import DistributionPrecompileABI from './abis/precompiles/distribution.json';
import GovernancePrecompileABI from './abis/precompiles/governance.json';
import IBCPrecompileABI from './abis/precompiles/ibc.json';
import ICS20PrecompileABI from './abis/precompiles/ics20.json';
import SlashingPrecompileABI from './abis/precompiles/slashing.json';
import StakingPrecompileABI from './abis/precompiles/staking.json';
import WasmPrecompileABI from './abis/precompiles/wasmd.json';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'BankPrecompile',
      abi: BankPrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000804',
    },
    {
      name: 'Bech32Precompile',
      abi: Bech32PrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000400',
    },
    {
      name: 'DistributionPrecompile',
      abi: DistributionPrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000801',
    },
    {
      name: 'GovernancePrecompile',
      abi: GovernancePrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000805',
    },
    {
      name: 'IBCPrecompile',
      abi: IBCPrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000001002',
    },
    {
      name: 'ICS20Precompile',
      abi: ICS20PrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000802',
    },
    {
      name: 'SlashingPrecompile',
      abi: SlashingPrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000806',
    },
    {
      name: 'StakingPrecompile',
      abi: StakingPrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000000800',
    },
    {
      name: 'WasmPrecompile',
      abi: WasmPrecompileABI.abi as Abi,
      address: '0x0000000000000000000000000000000000001001',
    },
  ],
  plugins: [react()],
});
