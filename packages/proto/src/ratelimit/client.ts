//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ratelimitV1TxRegistry from "./v1/tx.registry";
import * as ratelimitV1TxAmino from "./v1/tx.amino";
export const ratelimitAminoConverters = {
  ...ratelimitV1TxAmino.AminoConverter
};
export const ratelimitProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...ratelimitV1TxRegistry.registry];
export const getSigningRatelimitClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...ratelimitProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...ratelimitAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningRatelimitClient = async ({
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
  } = getSigningRatelimitClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};