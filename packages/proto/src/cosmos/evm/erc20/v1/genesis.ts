//@ts-nocheck
import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the erc20 module parameters at genesis */
  params: Params;
  /** token_pairs is a slice of the registered token pairs at genesis */
  tokenPairs: TokenPair[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** params are the erc20 module parameters at genesis */
  params: ParamsAmino;
  /** token_pairs is a slice of the registered token pairs at genesis */
  token_pairs: TokenPairAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pairs: TokenPairSDKType[];
}
/** Params defines the erc20 module params */
export interface Params {
  /**
   * enable_erc20 is the parameter to enable the conversion of Cosmos coins <-->
   * ERC20 tokens.
   */
  enableErc20: boolean;
  /**
   * native_precompiles defines the slice of hex addresses of the
   * active precompiles that are used to interact with native staking coins as
   * ERC20s
   */
  nativePrecompiles: string[];
  /**
   * dynamic_precompiles defines the slice of hex addresses of the
   * active precompiles that are used to interact with Bank coins as ERC20s
   */
  dynamicPrecompiles: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.evm.erc20.v1.Params";
  value: Uint8Array;
}
/** Params defines the erc20 module params */
export interface ParamsAmino {
  /**
   * enable_erc20 is the parameter to enable the conversion of Cosmos coins <-->
   * ERC20 tokens.
   */
  enable_erc20?: boolean;
  /**
   * native_precompiles defines the slice of hex addresses of the
   * active precompiles that are used to interact with native staking coins as
   * ERC20s
   */
  native_precompiles?: string[];
  /**
   * dynamic_precompiles defines the slice of hex addresses of the
   * active precompiles that are used to interact with Bank coins as ERC20s
   */
  dynamic_precompiles?: string[];
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the erc20 module params */
export interface ParamsSDKType {
  enable_erc20: boolean;
  native_precompiles: string[];
  dynamic_precompiles: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairs: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.evm.erc20.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableErc20: false,
    nativePrecompiles: [],
    dynamicPrecompiles: []
  };
}
export const Params = {
  typeUrl: "/cosmos.evm.erc20.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableErc20 === true) {
      writer.uint32(8).bool(message.enableErc20);
    }
    for (const v of message.nativePrecompiles) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.dynamicPrecompiles) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableErc20 = reader.bool();
          break;
        case 3:
          message.nativePrecompiles.push(reader.string());
          break;
        case 4:
          message.dynamicPrecompiles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableErc20 = object.enableErc20 ?? false;
    message.nativePrecompiles = object.nativePrecompiles?.map(e => e) || [];
    message.dynamicPrecompiles = object.dynamicPrecompiles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_erc20 !== undefined && object.enable_erc20 !== null) {
      message.enableErc20 = object.enable_erc20;
    }
    message.nativePrecompiles = object.native_precompiles?.map(e => e) || [];
    message.dynamicPrecompiles = object.dynamic_precompiles?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_erc20 = message.enableErc20 === false ? undefined : message.enableErc20;
    if (message.nativePrecompiles) {
      obj.native_precompiles = message.nativePrecompiles.map(e => e);
    } else {
      obj.native_precompiles = message.nativePrecompiles;
    }
    if (message.dynamicPrecompiles) {
      obj.dynamic_precompiles = message.dynamicPrecompiles.map(e => e);
    } else {
      obj.dynamic_precompiles = message.dynamicPrecompiles;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.evm.erc20.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};