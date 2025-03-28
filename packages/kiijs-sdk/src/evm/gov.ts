//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../binary";
export interface AddERCNativePointerProposal {
  title: string;
  description: string;
  token: string;
  pointer: string;
  version: number;
}
export interface AddERCNativePointerProposalProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddERCNativePointerProposal";
  value: Uint8Array;
}
export interface AddERCNativePointerProposalAmino {
  title?: string;
  description?: string;
  token?: string;
  pointer?: string;
  version?: number;
}
export interface AddERCNativePointerProposalAminoMsg {
  type: "/kiichain.kiichain3.evm.AddERCNativePointerProposal";
  value: AddERCNativePointerProposalAmino;
}
export interface AddERCNativePointerProposalSDKType {
  title: string;
  description: string;
  token: string;
  pointer: string;
  version: number;
}
export interface AddERCCW20PointerProposal {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddERCCW20PointerProposalProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddERCCW20PointerProposal";
  value: Uint8Array;
}
export interface AddERCCW20PointerProposalAmino {
  title?: string;
  description?: string;
  pointee?: string;
  pointer?: string;
  version?: number;
}
export interface AddERCCW20PointerProposalAminoMsg {
  type: "/kiichain.kiichain3.evm.AddERCCW20PointerProposal";
  value: AddERCCW20PointerProposalAmino;
}
export interface AddERCCW20PointerProposalSDKType {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddERCCW721PointerProposal {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddERCCW721PointerProposalProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddERCCW721PointerProposal";
  value: Uint8Array;
}
export interface AddERCCW721PointerProposalAmino {
  title?: string;
  description?: string;
  pointee?: string;
  pointer?: string;
  version?: number;
}
export interface AddERCCW721PointerProposalAminoMsg {
  type: "/kiichain.kiichain3.evm.AddERCCW721PointerProposal";
  value: AddERCCW721PointerProposalAmino;
}
export interface AddERCCW721PointerProposalSDKType {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddCWERC20PointerProposal {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddCWERC20PointerProposalProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddCWERC20PointerProposal";
  value: Uint8Array;
}
export interface AddCWERC20PointerProposalAmino {
  title?: string;
  description?: string;
  pointee?: string;
  pointer?: string;
  version?: number;
}
export interface AddCWERC20PointerProposalAminoMsg {
  type: "/kiichain.kiichain3.evm.AddCWERC20PointerProposal";
  value: AddCWERC20PointerProposalAmino;
}
export interface AddCWERC20PointerProposalSDKType {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddCWERC721PointerProposal {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddCWERC721PointerProposalProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddCWERC721PointerProposal";
  value: Uint8Array;
}
export interface AddCWERC721PointerProposalAmino {
  title?: string;
  description?: string;
  pointee?: string;
  pointer?: string;
  version?: number;
}
export interface AddCWERC721PointerProposalAminoMsg {
  type: "/kiichain.kiichain3.evm.AddCWERC721PointerProposal";
  value: AddCWERC721PointerProposalAmino;
}
export interface AddCWERC721PointerProposalSDKType {
  title: string;
  description: string;
  pointee: string;
  pointer: string;
  version: number;
}
export interface AddERCNativePointerProposalV2 {
  title: string;
  description: string;
  token: string;
  name: string;
  symbol: string;
  decimals: number;
}
export interface AddERCNativePointerProposalV2ProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.AddERCNativePointerProposalV2";
  value: Uint8Array;
}
export interface AddERCNativePointerProposalV2Amino {
  title?: string;
  description?: string;
  token?: string;
  name?: string;
  symbol?: string;
  decimals?: number;
}
export interface AddERCNativePointerProposalV2AminoMsg {
  type: "/kiichain.kiichain3.evm.AddERCNativePointerProposalV2";
  value: AddERCNativePointerProposalV2Amino;
}
export interface AddERCNativePointerProposalV2SDKType {
  title: string;
  description: string;
  token: string;
  name: string;
  symbol: string;
  decimals: number;
}
function createBaseAddERCNativePointerProposal(): AddERCNativePointerProposal {
  return {
    title: "",
    description: "",
    token: "",
    pointer: "",
    version: 0
  };
}
export const AddERCNativePointerProposal = {
  typeUrl: "/kiichain.kiichain3.evm.AddERCNativePointerProposal",
  encode(message: AddERCNativePointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.pointer !== "") {
      writer.uint32(34).string(message.pointer);
    }
    if (message.version !== 0) {
      writer.uint32(40).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddERCNativePointerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddERCNativePointerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.pointer = reader.string();
          break;
        case 5:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddERCNativePointerProposal>): AddERCNativePointerProposal {
    const message = createBaseAddERCNativePointerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.token = object.token ?? "";
    message.pointer = object.pointer ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: AddERCNativePointerProposalAmino): AddERCNativePointerProposal {
    const message = createBaseAddERCNativePointerProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: AddERCNativePointerProposal): AddERCNativePointerProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.token = message.token === "" ? undefined : message.token;
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: AddERCNativePointerProposalAminoMsg): AddERCNativePointerProposal {
    return AddERCNativePointerProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddERCNativePointerProposalProtoMsg): AddERCNativePointerProposal {
    return AddERCNativePointerProposal.decode(message.value);
  },
  toProto(message: AddERCNativePointerProposal): Uint8Array {
    return AddERCNativePointerProposal.encode(message).finish();
  },
  toProtoMsg(message: AddERCNativePointerProposal): AddERCNativePointerProposalProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddERCNativePointerProposal",
      value: AddERCNativePointerProposal.encode(message).finish()
    };
  }
};
function createBaseAddERCCW20PointerProposal(): AddERCCW20PointerProposal {
  return {
    title: "",
    description: "",
    pointee: "",
    pointer: "",
    version: 0
  };
}
export const AddERCCW20PointerProposal = {
  typeUrl: "/kiichain.kiichain3.evm.AddERCCW20PointerProposal",
  encode(message: AddERCCW20PointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pointee !== "") {
      writer.uint32(26).string(message.pointee);
    }
    if (message.pointer !== "") {
      writer.uint32(34).string(message.pointer);
    }
    if (message.version !== 0) {
      writer.uint32(40).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddERCCW20PointerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddERCCW20PointerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pointee = reader.string();
          break;
        case 4:
          message.pointer = reader.string();
          break;
        case 5:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddERCCW20PointerProposal>): AddERCCW20PointerProposal {
    const message = createBaseAddERCCW20PointerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pointee = object.pointee ?? "";
    message.pointer = object.pointer ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: AddERCCW20PointerProposalAmino): AddERCCW20PointerProposal {
    const message = createBaseAddERCCW20PointerProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pointee !== undefined && object.pointee !== null) {
      message.pointee = object.pointee;
    }
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: AddERCCW20PointerProposal): AddERCCW20PointerProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pointee = message.pointee === "" ? undefined : message.pointee;
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: AddERCCW20PointerProposalAminoMsg): AddERCCW20PointerProposal {
    return AddERCCW20PointerProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddERCCW20PointerProposalProtoMsg): AddERCCW20PointerProposal {
    return AddERCCW20PointerProposal.decode(message.value);
  },
  toProto(message: AddERCCW20PointerProposal): Uint8Array {
    return AddERCCW20PointerProposal.encode(message).finish();
  },
  toProtoMsg(message: AddERCCW20PointerProposal): AddERCCW20PointerProposalProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddERCCW20PointerProposal",
      value: AddERCCW20PointerProposal.encode(message).finish()
    };
  }
};
function createBaseAddERCCW721PointerProposal(): AddERCCW721PointerProposal {
  return {
    title: "",
    description: "",
    pointee: "",
    pointer: "",
    version: 0
  };
}
export const AddERCCW721PointerProposal = {
  typeUrl: "/kiichain.kiichain3.evm.AddERCCW721PointerProposal",
  encode(message: AddERCCW721PointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pointee !== "") {
      writer.uint32(26).string(message.pointee);
    }
    if (message.pointer !== "") {
      writer.uint32(34).string(message.pointer);
    }
    if (message.version !== 0) {
      writer.uint32(40).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddERCCW721PointerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddERCCW721PointerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pointee = reader.string();
          break;
        case 4:
          message.pointer = reader.string();
          break;
        case 5:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddERCCW721PointerProposal>): AddERCCW721PointerProposal {
    const message = createBaseAddERCCW721PointerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pointee = object.pointee ?? "";
    message.pointer = object.pointer ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: AddERCCW721PointerProposalAmino): AddERCCW721PointerProposal {
    const message = createBaseAddERCCW721PointerProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pointee !== undefined && object.pointee !== null) {
      message.pointee = object.pointee;
    }
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: AddERCCW721PointerProposal): AddERCCW721PointerProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pointee = message.pointee === "" ? undefined : message.pointee;
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: AddERCCW721PointerProposalAminoMsg): AddERCCW721PointerProposal {
    return AddERCCW721PointerProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddERCCW721PointerProposalProtoMsg): AddERCCW721PointerProposal {
    return AddERCCW721PointerProposal.decode(message.value);
  },
  toProto(message: AddERCCW721PointerProposal): Uint8Array {
    return AddERCCW721PointerProposal.encode(message).finish();
  },
  toProtoMsg(message: AddERCCW721PointerProposal): AddERCCW721PointerProposalProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddERCCW721PointerProposal",
      value: AddERCCW721PointerProposal.encode(message).finish()
    };
  }
};
function createBaseAddCWERC20PointerProposal(): AddCWERC20PointerProposal {
  return {
    title: "",
    description: "",
    pointee: "",
    pointer: "",
    version: 0
  };
}
export const AddCWERC20PointerProposal = {
  typeUrl: "/kiichain.kiichain3.evm.AddCWERC20PointerProposal",
  encode(message: AddCWERC20PointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pointee !== "") {
      writer.uint32(26).string(message.pointee);
    }
    if (message.pointer !== "") {
      writer.uint32(34).string(message.pointer);
    }
    if (message.version !== 0) {
      writer.uint32(40).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddCWERC20PointerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCWERC20PointerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pointee = reader.string();
          break;
        case 4:
          message.pointer = reader.string();
          break;
        case 5:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddCWERC20PointerProposal>): AddCWERC20PointerProposal {
    const message = createBaseAddCWERC20PointerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pointee = object.pointee ?? "";
    message.pointer = object.pointer ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: AddCWERC20PointerProposalAmino): AddCWERC20PointerProposal {
    const message = createBaseAddCWERC20PointerProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pointee !== undefined && object.pointee !== null) {
      message.pointee = object.pointee;
    }
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: AddCWERC20PointerProposal): AddCWERC20PointerProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pointee = message.pointee === "" ? undefined : message.pointee;
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: AddCWERC20PointerProposalAminoMsg): AddCWERC20PointerProposal {
    return AddCWERC20PointerProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddCWERC20PointerProposalProtoMsg): AddCWERC20PointerProposal {
    return AddCWERC20PointerProposal.decode(message.value);
  },
  toProto(message: AddCWERC20PointerProposal): Uint8Array {
    return AddCWERC20PointerProposal.encode(message).finish();
  },
  toProtoMsg(message: AddCWERC20PointerProposal): AddCWERC20PointerProposalProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddCWERC20PointerProposal",
      value: AddCWERC20PointerProposal.encode(message).finish()
    };
  }
};
function createBaseAddCWERC721PointerProposal(): AddCWERC721PointerProposal {
  return {
    title: "",
    description: "",
    pointee: "",
    pointer: "",
    version: 0
  };
}
export const AddCWERC721PointerProposal = {
  typeUrl: "/kiichain.kiichain3.evm.AddCWERC721PointerProposal",
  encode(message: AddCWERC721PointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pointee !== "") {
      writer.uint32(26).string(message.pointee);
    }
    if (message.pointer !== "") {
      writer.uint32(34).string(message.pointer);
    }
    if (message.version !== 0) {
      writer.uint32(40).uint32(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddCWERC721PointerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCWERC721PointerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pointee = reader.string();
          break;
        case 4:
          message.pointer = reader.string();
          break;
        case 5:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddCWERC721PointerProposal>): AddCWERC721PointerProposal {
    const message = createBaseAddCWERC721PointerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pointee = object.pointee ?? "";
    message.pointer = object.pointer ?? "";
    message.version = object.version ?? 0;
    return message;
  },
  fromAmino(object: AddCWERC721PointerProposalAmino): AddCWERC721PointerProposal {
    const message = createBaseAddCWERC721PointerProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pointee !== undefined && object.pointee !== null) {
      message.pointee = object.pointee;
    }
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: AddCWERC721PointerProposal): AddCWERC721PointerProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pointee = message.pointee === "" ? undefined : message.pointee;
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    obj.version = message.version === 0 ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: AddCWERC721PointerProposalAminoMsg): AddCWERC721PointerProposal {
    return AddCWERC721PointerProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddCWERC721PointerProposalProtoMsg): AddCWERC721PointerProposal {
    return AddCWERC721PointerProposal.decode(message.value);
  },
  toProto(message: AddCWERC721PointerProposal): Uint8Array {
    return AddCWERC721PointerProposal.encode(message).finish();
  },
  toProtoMsg(message: AddCWERC721PointerProposal): AddCWERC721PointerProposalProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddCWERC721PointerProposal",
      value: AddCWERC721PointerProposal.encode(message).finish()
    };
  }
};
function createBaseAddERCNativePointerProposalV2(): AddERCNativePointerProposalV2 {
  return {
    title: "",
    description: "",
    token: "",
    name: "",
    symbol: "",
    decimals: 0
  };
}
export const AddERCNativePointerProposalV2 = {
  typeUrl: "/kiichain.kiichain3.evm.AddERCNativePointerProposalV2",
  encode(message: AddERCNativePointerProposalV2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(48).uint32(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddERCNativePointerProposalV2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddERCNativePointerProposalV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.decimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddERCNativePointerProposalV2>): AddERCNativePointerProposalV2 {
    const message = createBaseAddERCNativePointerProposalV2();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    return message;
  },
  fromAmino(object: AddERCNativePointerProposalV2Amino): AddERCNativePointerProposalV2 {
    const message = createBaseAddERCNativePointerProposalV2();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    }
    return message;
  },
  toAmino(message: AddERCNativePointerProposalV2): AddERCNativePointerProposalV2Amino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.token = message.token === "" ? undefined : message.token;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.decimals = message.decimals === 0 ? undefined : message.decimals;
    return obj;
  },
  fromAminoMsg(object: AddERCNativePointerProposalV2AminoMsg): AddERCNativePointerProposalV2 {
    return AddERCNativePointerProposalV2.fromAmino(object.value);
  },
  fromProtoMsg(message: AddERCNativePointerProposalV2ProtoMsg): AddERCNativePointerProposalV2 {
    return AddERCNativePointerProposalV2.decode(message.value);
  },
  toProto(message: AddERCNativePointerProposalV2): Uint8Array {
    return AddERCNativePointerProposalV2.encode(message).finish();
  },
  toProtoMsg(message: AddERCNativePointerProposalV2): AddERCNativePointerProposalV2ProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.AddERCNativePointerProposalV2",
      value: AddERCNativePointerProposalV2.encode(message).finish()
    };
  }
};