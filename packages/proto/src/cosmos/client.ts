//@ts-nocheck
import { GeneratedType, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';

import * as cosmosAuthV1beta1TxAmino from './auth/v1beta1/tx.amino';
import * as cosmosAuthV1beta1TxRegistry from './auth/v1beta1/tx.registry';
import * as cosmosAuthzV1beta1TxAmino from './authz/v1beta1/tx.amino';
import * as cosmosAuthzV1beta1TxRegistry from './authz/v1beta1/tx.registry';
import * as cosmosBankV1beta1TxAmino from './bank/v1beta1/tx.amino';
import * as cosmosBankV1beta1TxRegistry from './bank/v1beta1/tx.registry';
import * as cosmosCircuitV1TxAmino from './circuit/v1/tx.amino';
import * as cosmosCircuitV1TxRegistry from './circuit/v1/tx.registry';
import * as cosmosConsensusV1TxAmino from './consensus/v1/tx.amino';
import * as cosmosConsensusV1TxRegistry from './consensus/v1/tx.registry';
import * as cosmosDistributionV1beta1TxAmino from './distribution/v1beta1/tx.amino';
import * as cosmosDistributionV1beta1TxRegistry from './distribution/v1beta1/tx.registry';
import * as cosmosEvmErc20V1TxAmino from './evm/erc20/v1/tx.amino';
import * as cosmosEvmErc20V1TxRegistry from './evm/erc20/v1/tx.registry';
import * as cosmosEvmFeemarketV1TxAmino from './evm/feemarket/v1/tx.amino';
import * as cosmosEvmFeemarketV1TxRegistry from './evm/feemarket/v1/tx.registry';
import * as cosmosEvmVmV1TxAmino from './evm/vm/v1/tx.amino';
import * as cosmosEvmVmV1TxRegistry from './evm/vm/v1/tx.registry';
import * as cosmosFeegrantV1beta1TxAmino from './feegrant/v1beta1/tx.amino';
import * as cosmosFeegrantV1beta1TxRegistry from './feegrant/v1beta1/tx.registry';
import * as cosmosGovV1TxAmino from './gov/v1/tx.amino';
import * as cosmosGovV1TxRegistry from './gov/v1/tx.registry';
import * as cosmosGovV1beta1TxAmino from './gov/v1beta1/tx.amino';
import * as cosmosGovV1beta1TxRegistry from './gov/v1beta1/tx.registry';
import * as cosmosGroupV1TxAmino from './group/v1/tx.amino';
import * as cosmosGroupV1TxRegistry from './group/v1/tx.registry';
import * as cosmosMintV1beta1TxAmino from './mint/v1beta1/tx.amino';
import * as cosmosMintV1beta1TxRegistry from './mint/v1beta1/tx.registry';
import * as cosmosStakingV1beta1TxAmino from './staking/v1beta1/tx.amino';
import * as cosmosStakingV1beta1TxRegistry from './staking/v1beta1/tx.registry';
import * as cosmosUpgradeV1beta1TxAmino from './upgrade/v1beta1/tx.amino';
import * as cosmosUpgradeV1beta1TxRegistry from './upgrade/v1beta1/tx.registry';
import * as cosmosVestingV1beta1TxAmino from './vesting/v1beta1/tx.amino';
import * as cosmosVestingV1beta1TxRegistry from './vesting/v1beta1/tx.registry';
export const cosmosAminoConverters = {
  ...cosmosAuthV1beta1TxAmino.AminoConverter,
  ...cosmosAuthzV1beta1TxAmino.AminoConverter,
  ...cosmosBankV1beta1TxAmino.AminoConverter,
  ...cosmosCircuitV1TxAmino.AminoConverter,
  ...cosmosConsensusV1TxAmino.AminoConverter,
  ...cosmosDistributionV1beta1TxAmino.AminoConverter,
  ...cosmosEvmErc20V1TxAmino.AminoConverter,
  ...cosmosEvmFeemarketV1TxAmino.AminoConverter,
  ...cosmosEvmVmV1TxAmino.AminoConverter,
  ...cosmosFeegrantV1beta1TxAmino.AminoConverter,
  ...cosmosGovV1TxAmino.AminoConverter,
  ...cosmosGovV1beta1TxAmino.AminoConverter,
  ...cosmosGroupV1TxAmino.AminoConverter,
  ...cosmosMintV1beta1TxAmino.AminoConverter,
  ...cosmosStakingV1beta1TxAmino.AminoConverter,
  ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
  ...cosmosVestingV1beta1TxAmino.AminoConverter,
};
export const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmosAuthV1beta1TxRegistry.registry,
  ...cosmosAuthzV1beta1TxRegistry.registry,
  ...cosmosBankV1beta1TxRegistry.registry,
  ...cosmosCircuitV1TxRegistry.registry,
  ...cosmosConsensusV1TxRegistry.registry,
  ...cosmosDistributionV1beta1TxRegistry.registry,
  ...cosmosEvmErc20V1TxRegistry.registry,
  ...cosmosEvmFeemarketV1TxRegistry.registry,
  ...cosmosEvmVmV1TxRegistry.registry,
  ...cosmosFeegrantV1beta1TxRegistry.registry,
  ...cosmosGovV1TxRegistry.registry,
  ...cosmosGovV1beta1TxRegistry.registry,
  ...cosmosGroupV1TxRegistry.registry,
  ...cosmosMintV1beta1TxRegistry.registry,
  ...cosmosStakingV1beta1TxRegistry.registry,
  ...cosmosUpgradeV1beta1TxRegistry.registry,
  ...cosmosVestingV1beta1TxRegistry.registry,
];
export const getSigningCosmosClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...cosmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningCosmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry: registry as any,
      aminoTypes,
    }
  );
  return client;
};
