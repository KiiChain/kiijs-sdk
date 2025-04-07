//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as evmTxRegistry from "../evm/tx.registry";
import * as oracleTxRegistry from "../oracle/tx.registry";
import * as tokenfactoryTxRegistry from "../tokenfactory/tx.registry";
import * as evmTxAmino from "../evm/tx.amino";
import * as oracleTxAmino from "../oracle/tx.amino";
import * as tokenfactoryTxAmino from "../tokenfactory/tx.amino";
export const kiichainAminoConverters = {
  ...evmTxAmino.AminoConverter,
  ...oracleTxAmino.AminoConverter,
  ...tokenfactoryTxAmino.AminoConverter
};
export const kiichainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...evmTxRegistry.registry, ...oracleTxRegistry.registry, ...tokenfactoryTxRegistry.registry];
export const getSigningKiiChainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...kiichainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...kiichainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningKiiChainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningKiiChainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};