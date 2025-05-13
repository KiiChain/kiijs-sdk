//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as kiichainTokenfactoryV1beta1TxRegistry from "./tokenfactory/v1beta1/tx.registry";
import * as kiichainTokenfactoryV1beta1TxAmino from "./tokenfactory/v1beta1/tx.amino";
export const kiichainAminoConverters = {
  ...kiichainTokenfactoryV1beta1TxAmino.AminoConverter
};
export const kiichainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...kiichainTokenfactoryV1beta1TxRegistry.registry];
export const getSigningKiichainClientOptions = ({
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
export const getSigningKiichainClient = async ({
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
  } = getSigningKiichainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};