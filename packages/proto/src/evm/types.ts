//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../binary";
import { bytesFromBase64, base64FromBytes } from "../helpers";
export interface Whitelist {
  hashes: string[];
}
export interface WhitelistProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.Whitelist";
  value: Uint8Array;
}
export interface WhitelistAmino {
  hashes?: string[];
}
export interface WhitelistAminoMsg {
  type: "/kiichain.kiichain3.evm.Whitelist";
  value: WhitelistAmino;
}
export interface WhitelistSDKType {
  hashes: string[];
}
export interface DeferredInfo {
  txIndex: number;
  txHash: Uint8Array;
  txBloom: Uint8Array;
  surplus: string;
  error: string;
}
export interface DeferredInfoProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.DeferredInfo";
  value: Uint8Array;
}
export interface DeferredInfoAmino {
  tx_index?: number;
  tx_hash?: string;
  tx_bloom?: string;
  surplus?: string;
  error?: string;
}
export interface DeferredInfoAminoMsg {
  type: "/kiichain.kiichain3.evm.DeferredInfo";
  value: DeferredInfoAmino;
}
export interface DeferredInfoSDKType {
  tx_index: number;
  tx_hash: Uint8Array;
  tx_bloom: Uint8Array;
  surplus: string;
  error: string;
}
function createBaseWhitelist(): Whitelist {
  return {
    hashes: []
  };
}
export const Whitelist = {
  typeUrl: "/kiichain.kiichain3.evm.Whitelist",
  encode(message: Whitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hashes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Whitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Whitelist>): Whitelist {
    const message = createBaseWhitelist();
    message.hashes = object.hashes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WhitelistAmino): Whitelist {
    const message = createBaseWhitelist();
    message.hashes = object.hashes?.map(e => e) || [];
    return message;
  },
  toAmino(message: Whitelist): WhitelistAmino {
    const obj: any = {};
    if (message.hashes) {
      obj.hashes = message.hashes.map(e => e);
    } else {
      obj.hashes = message.hashes;
    }
    return obj;
  },
  fromAminoMsg(object: WhitelistAminoMsg): Whitelist {
    return Whitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistProtoMsg): Whitelist {
    return Whitelist.decode(message.value);
  },
  toProto(message: Whitelist): Uint8Array {
    return Whitelist.encode(message).finish();
  },
  toProtoMsg(message: Whitelist): WhitelistProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.Whitelist",
      value: Whitelist.encode(message).finish()
    };
  }
};
function createBaseDeferredInfo(): DeferredInfo {
  return {
    txIndex: 0,
    txHash: new Uint8Array(),
    txBloom: new Uint8Array(),
    surplus: "",
    error: ""
  };
}
export const DeferredInfo = {
  typeUrl: "/kiichain.kiichain3.evm.DeferredInfo",
  encode(message: DeferredInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txIndex !== 0) {
      writer.uint32(8).uint32(message.txIndex);
    }
    if (message.txHash.length !== 0) {
      writer.uint32(18).bytes(message.txHash);
    }
    if (message.txBloom.length !== 0) {
      writer.uint32(26).bytes(message.txBloom);
    }
    if (message.surplus !== "") {
      writer.uint32(34).string(message.surplus);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeferredInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeferredInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.uint32();
          break;
        case 2:
          message.txHash = reader.bytes();
          break;
        case 3:
          message.txBloom = reader.bytes();
          break;
        case 4:
          message.surplus = reader.string();
          break;
        case 5:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DeferredInfo>): DeferredInfo {
    const message = createBaseDeferredInfo();
    message.txIndex = object.txIndex ?? 0;
    message.txHash = object.txHash ?? new Uint8Array();
    message.txBloom = object.txBloom ?? new Uint8Array();
    message.surplus = object.surplus ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: DeferredInfoAmino): DeferredInfo {
    const message = createBaseDeferredInfo();
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.txIndex = object.tx_index;
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = bytesFromBase64(object.tx_hash);
    }
    if (object.tx_bloom !== undefined && object.tx_bloom !== null) {
      message.txBloom = bytesFromBase64(object.tx_bloom);
    }
    if (object.surplus !== undefined && object.surplus !== null) {
      message.surplus = object.surplus;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: DeferredInfo): DeferredInfoAmino {
    const obj: any = {};
    obj.tx_index = message.txIndex === 0 ? undefined : message.txIndex;
    obj.tx_hash = message.txHash ? base64FromBytes(message.txHash) : undefined;
    obj.tx_bloom = message.txBloom ? base64FromBytes(message.txBloom) : undefined;
    obj.surplus = message.surplus === "" ? undefined : message.surplus;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: DeferredInfoAminoMsg): DeferredInfo {
    return DeferredInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DeferredInfoProtoMsg): DeferredInfo {
    return DeferredInfo.decode(message.value);
  },
  toProto(message: DeferredInfo): Uint8Array {
    return DeferredInfo.encode(message).finish();
  },
  toProtoMsg(message: DeferredInfo): DeferredInfoProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.DeferredInfo",
      value: DeferredInfo.encode(message).finish()
    };
  }
};