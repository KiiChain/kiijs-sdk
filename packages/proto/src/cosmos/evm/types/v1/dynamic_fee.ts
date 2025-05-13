//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
/**
 * ExtensionOptionDynamicFeeTx is an extension option that specifies the
 * maxPrioPrice for cosmos tx
 */
export interface ExtensionOptionDynamicFeeTx {
  /**
   * max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559
   * spec
   */
  maxPriorityPrice: string;
}
export interface ExtensionOptionDynamicFeeTxProtoMsg {
  typeUrl: "/cosmos.evm.types.v1.ExtensionOptionDynamicFeeTx";
  value: Uint8Array;
}
/**
 * ExtensionOptionDynamicFeeTx is an extension option that specifies the
 * maxPrioPrice for cosmos tx
 */
export interface ExtensionOptionDynamicFeeTxAmino {
  /**
   * max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559
   * spec
   */
  max_priority_price: string;
}
export interface ExtensionOptionDynamicFeeTxAminoMsg {
  type: "cosmos-sdk/ExtensionOptionDynamicFeeTx";
  value: ExtensionOptionDynamicFeeTxAmino;
}
/**
 * ExtensionOptionDynamicFeeTx is an extension option that specifies the
 * maxPrioPrice for cosmos tx
 */
export interface ExtensionOptionDynamicFeeTxSDKType {
  max_priority_price: string;
}
function createBaseExtensionOptionDynamicFeeTx(): ExtensionOptionDynamicFeeTx {
  return {
    maxPriorityPrice: ""
  };
}
export const ExtensionOptionDynamicFeeTx = {
  typeUrl: "/cosmos.evm.types.v1.ExtensionOptionDynamicFeeTx",
  encode(message: ExtensionOptionDynamicFeeTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPriorityPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.maxPriorityPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionDynamicFeeTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionDynamicFeeTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPriorityPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExtensionOptionDynamicFeeTx>): ExtensionOptionDynamicFeeTx {
    const message = createBaseExtensionOptionDynamicFeeTx();
    message.maxPriorityPrice = object.maxPriorityPrice ?? "";
    return message;
  },
  fromAmino(object: ExtensionOptionDynamicFeeTxAmino): ExtensionOptionDynamicFeeTx {
    const message = createBaseExtensionOptionDynamicFeeTx();
    if (object.max_priority_price !== undefined && object.max_priority_price !== null) {
      message.maxPriorityPrice = object.max_priority_price;
    }
    return message;
  },
  toAmino(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxAmino {
    const obj: any = {};
    obj.max_priority_price = message.maxPriorityPrice ?? "";
    return obj;
  },
  fromAminoMsg(object: ExtensionOptionDynamicFeeTxAminoMsg): ExtensionOptionDynamicFeeTx {
    return ExtensionOptionDynamicFeeTx.fromAmino(object.value);
  },
  toAminoMsg(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxAminoMsg {
    return {
      type: "cosmos-sdk/ExtensionOptionDynamicFeeTx",
      value: ExtensionOptionDynamicFeeTx.toAmino(message)
    };
  },
  fromProtoMsg(message: ExtensionOptionDynamicFeeTxProtoMsg): ExtensionOptionDynamicFeeTx {
    return ExtensionOptionDynamicFeeTx.decode(message.value);
  },
  toProto(message: ExtensionOptionDynamicFeeTx): Uint8Array {
    return ExtensionOptionDynamicFeeTx.encode(message).finish();
  },
  toProtoMsg(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxProtoMsg {
    return {
      typeUrl: "/cosmos.evm.types.v1.ExtensionOptionDynamicFeeTx",
      value: ExtensionOptionDynamicFeeTx.encode(message).finish()
    };
  }
};