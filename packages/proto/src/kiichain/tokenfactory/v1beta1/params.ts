//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  denomCreationFee: Coin[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add
   * more gas consumption to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
  denom_creation_fee?: CoinAmino[];
  /**
   * if denom_creation_fee is an empty array, then this field is used to add
   * more gas consumption to the base cost.
   * https://github.com/CosmWasm/token-factory/issues/11
   */
  denom_creation_gas_consume?: string;
}
export interface ParamsAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  denom_creation_gas_consume?: bigint;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined
  };
}
export const Params = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
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
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64();
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
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.denomCreationGasConsume = object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null ? BigInt(object.denomCreationGasConsume.toString()) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denom_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.denom_creation_gas_consume !== undefined && object.denom_creation_gas_consume !== null) {
      message.denomCreationGasConsume = BigInt(object.denom_creation_gas_consume);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.denom_creation_fee = message.denomCreationFee;
    }
    obj.denom_creation_gas_consume = message.denomCreationGasConsume !== BigInt(0) ? message.denomCreationGasConsume?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};