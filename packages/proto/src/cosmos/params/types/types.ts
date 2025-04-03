//@ts-nocheck
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Defines fee params that are controlled through governance */
export interface FeesParams {
  globalMinimumGasPrices: DecCoin[];
}
export interface FeesParamsProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.FeesParams";
  value: Uint8Array;
}
/** Defines fee params that are controlled through governance */
export interface FeesParamsAmino {
  global_minimum_gas_prices?: DecCoinAmino[];
}
export interface FeesParamsAminoMsg {
  type: "cosmos-sdk/FeesParams";
  value: FeesParamsAmino;
}
/** Defines fee params that are controlled through governance */
export interface FeesParamsSDKType {
  global_minimum_gas_prices: DecCoinSDKType[];
}
export interface GenesisState {
  feesParams: FeesParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  fees_params?: FeesParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  fees_params: FeesParamsSDKType;
}
function createBaseFeesParams(): FeesParams {
  return {
    globalMinimumGasPrices: []
  };
}
export const FeesParams = {
  typeUrl: "/cosmos.params.v1beta1.FeesParams",
  encode(message: FeesParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.globalMinimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeesParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.globalMinimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeesParams>): FeesParams {
    const message = createBaseFeesParams();
    message.globalMinimumGasPrices = object.globalMinimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeesParamsAmino): FeesParams {
    const message = createBaseFeesParams();
    message.globalMinimumGasPrices = object.global_minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeesParams): FeesParamsAmino {
    const obj: any = {};
    if (message.globalMinimumGasPrices) {
      obj.global_minimum_gas_prices = message.globalMinimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.global_minimum_gas_prices = message.globalMinimumGasPrices;
    }
    return obj;
  },
  fromAminoMsg(object: FeesParamsAminoMsg): FeesParams {
    return FeesParams.fromAmino(object.value);
  },
  toAminoMsg(message: FeesParams): FeesParamsAminoMsg {
    return {
      type: "cosmos-sdk/FeesParams",
      value: FeesParams.toAmino(message)
    };
  },
  fromProtoMsg(message: FeesParamsProtoMsg): FeesParams {
    return FeesParams.decode(message.value);
  },
  toProto(message: FeesParams): Uint8Array {
    return FeesParams.encode(message).finish();
  },
  toProtoMsg(message: FeesParams): FeesParamsProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.FeesParams",
      value: FeesParams.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    feesParams: FeesParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.params.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feesParams !== undefined) {
      FeesParams.encode(message.feesParams, writer.uint32(10).fork()).ldelim();
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
          message.feesParams = FeesParams.decode(reader, reader.uint32());
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
    message.feesParams = object.feesParams !== undefined && object.feesParams !== null ? FeesParams.fromPartial(object.feesParams) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.fees_params !== undefined && object.fees_params !== null) {
      message.feesParams = FeesParams.fromAmino(object.fees_params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.fees_params = message.feesParams ? FeesParams.toAmino(message.feesParams) : undefined;
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
      typeUrl: "/cosmos.params.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};