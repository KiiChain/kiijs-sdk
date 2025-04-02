//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /** max_hooks_gas_allowed is the max gas consumption allowed on hooks execution */
  maxHooksGasAllowed: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/kiichain.kiichain3.epoch.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** max_hooks_gas_allowed is the max gas consumption allowed on hooks execution */
  max_hooks_gas_allowed?: string;
}
export interface ParamsAminoMsg {
  type: "/kiichain.kiichain3.epoch.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  max_hooks_gas_allowed: bigint;
}
function createBaseParams(): Params {
  return {
    maxHooksGasAllowed: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/kiichain.kiichain3.epoch.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxHooksGasAllowed !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxHooksGasAllowed);
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
          message.maxHooksGasAllowed = reader.uint64();
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
    message.maxHooksGasAllowed = object.maxHooksGasAllowed !== undefined && object.maxHooksGasAllowed !== null ? BigInt(object.maxHooksGasAllowed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_hooks_gas_allowed !== undefined && object.max_hooks_gas_allowed !== null) {
      message.maxHooksGasAllowed = BigInt(object.max_hooks_gas_allowed);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_hooks_gas_allowed = message.maxHooksGasAllowed !== BigInt(0) ? message.maxHooksGasAllowed?.toString() : undefined;
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
      typeUrl: "/kiichain.kiichain3.epoch.Params",
      value: Params.encode(message).finish()
    };
  }
};