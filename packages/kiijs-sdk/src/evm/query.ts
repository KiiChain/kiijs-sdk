//@ts-nocheck
import { PointerType } from "./enums";
import { BinaryReader, BinaryWriter } from "../binary";
import { bytesFromBase64, base64FromBytes } from "../helpers";
export interface QueryKiiAddressByEVMAddressRequest {
  evmAddress: string;
}
export interface QueryKiiAddressByEVMAddressRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressRequest";
  value: Uint8Array;
}
export interface QueryKiiAddressByEVMAddressRequestAmino {
  evm_address?: string;
}
export interface QueryKiiAddressByEVMAddressRequestAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressRequest";
  value: QueryKiiAddressByEVMAddressRequestAmino;
}
export interface QueryKiiAddressByEVMAddressRequestSDKType {
  evm_address: string;
}
export interface QueryKiiAddressByEVMAddressResponse {
  kiiAddress: string;
  associated: boolean;
}
export interface QueryKiiAddressByEVMAddressResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressResponse";
  value: Uint8Array;
}
export interface QueryKiiAddressByEVMAddressResponseAmino {
  kii_address?: string;
  associated?: boolean;
}
export interface QueryKiiAddressByEVMAddressResponseAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressResponse";
  value: QueryKiiAddressByEVMAddressResponseAmino;
}
export interface QueryKiiAddressByEVMAddressResponseSDKType {
  kii_address: string;
  associated: boolean;
}
export interface QueryEVMAddressByKiiAddressRequest {
  kiiAddress: string;
}
export interface QueryEVMAddressByKiiAddressRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressRequest";
  value: Uint8Array;
}
export interface QueryEVMAddressByKiiAddressRequestAmino {
  kii_address?: string;
}
export interface QueryEVMAddressByKiiAddressRequestAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressRequest";
  value: QueryEVMAddressByKiiAddressRequestAmino;
}
export interface QueryEVMAddressByKiiAddressRequestSDKType {
  kii_address: string;
}
export interface QueryEVMAddressByKiiAddressResponse {
  evmAddress: string;
  associated: boolean;
}
export interface QueryEVMAddressByKiiAddressResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressResponse";
  value: Uint8Array;
}
export interface QueryEVMAddressByKiiAddressResponseAmino {
  evm_address?: string;
  associated?: boolean;
}
export interface QueryEVMAddressByKiiAddressResponseAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressResponse";
  value: QueryEVMAddressByKiiAddressResponseAmino;
}
export interface QueryEVMAddressByKiiAddressResponseSDKType {
  evm_address: string;
  associated: boolean;
}
export interface QueryStaticCallRequest {
  data: Uint8Array;
  to: string;
}
export interface QueryStaticCallRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryStaticCallRequest";
  value: Uint8Array;
}
export interface QueryStaticCallRequestAmino {
  data?: string;
  to?: string;
}
export interface QueryStaticCallRequestAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryStaticCallRequest";
  value: QueryStaticCallRequestAmino;
}
export interface QueryStaticCallRequestSDKType {
  data: Uint8Array;
  to: string;
}
export interface QueryStaticCallResponse {
  data: Uint8Array;
}
export interface QueryStaticCallResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryStaticCallResponse";
  value: Uint8Array;
}
export interface QueryStaticCallResponseAmino {
  data?: string;
}
export interface QueryStaticCallResponseAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryStaticCallResponse";
  value: QueryStaticCallResponseAmino;
}
export interface QueryStaticCallResponseSDKType {
  data: Uint8Array;
}
export interface QueryPointerRequest {
  pointerType: PointerType;
  pointee: string;
}
export interface QueryPointerRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerRequest";
  value: Uint8Array;
}
export interface QueryPointerRequestAmino {
  pointer_type?: PointerType;
  pointee?: string;
}
export interface QueryPointerRequestAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryPointerRequest";
  value: QueryPointerRequestAmino;
}
export interface QueryPointerRequestSDKType {
  pointer_type: PointerType;
  pointee: string;
}
export interface QueryPointerResponse {
  pointer: string;
  version: number;
  exists: boolean;
}
export interface QueryPointerResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerResponse";
  value: Uint8Array;
}
export interface QueryPointerResponseAmino {
  pointer?: string;
  version?: number;
  exists?: boolean;
}
export interface QueryPointerResponseAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryPointerResponse";
  value: QueryPointerResponseAmino;
}
export interface QueryPointerResponseSDKType {
  pointer: string;
  version: number;
  exists: boolean;
}
export interface QueryPointerVersionRequest {
  pointerType: PointerType;
}
export interface QueryPointerVersionRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerVersionRequest";
  value: Uint8Array;
}
export interface QueryPointerVersionRequestAmino {
  pointer_type?: PointerType;
}
export interface QueryPointerVersionRequestAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryPointerVersionRequest";
  value: QueryPointerVersionRequestAmino;
}
export interface QueryPointerVersionRequestSDKType {
  pointer_type: PointerType;
}
export interface QueryPointerVersionResponse {
  version: number;
  cwCodeId: bigint;
}
export interface QueryPointerVersionResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerVersionResponse";
  value: Uint8Array;
}
export interface QueryPointerVersionResponseAmino {
  version?: number;
  cw_code_id?: string;
}
export interface QueryPointerVersionResponseAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryPointerVersionResponse";
  value: QueryPointerVersionResponseAmino;
}
export interface QueryPointerVersionResponseSDKType {
  version: number;
  cw_code_id: bigint;
}
export interface QueryPointeeRequest {
  pointerType: PointerType;
  pointer: string;
}
export interface QueryPointeeRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointeeRequest";
  value: Uint8Array;
}
export interface QueryPointeeRequestAmino {
  pointer_type?: PointerType;
  pointer?: string;
}
export interface QueryPointeeRequestAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryPointeeRequest";
  value: QueryPointeeRequestAmino;
}
export interface QueryPointeeRequestSDKType {
  pointer_type: PointerType;
  pointer: string;
}
export interface QueryPointeeResponse {
  pointee: string;
  version: number;
  exists: boolean;
}
export interface QueryPointeeResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointeeResponse";
  value: Uint8Array;
}
export interface QueryPointeeResponseAmino {
  pointee?: string;
  version?: number;
  exists?: boolean;
}
export interface QueryPointeeResponseAminoMsg {
  type: "/kiichain.kiichain3.evm.QueryPointeeResponse";
  value: QueryPointeeResponseAmino;
}
export interface QueryPointeeResponseSDKType {
  pointee: string;
  version: number;
  exists: boolean;
}
function createBaseQueryKiiAddressByEVMAddressRequest(): QueryKiiAddressByEVMAddressRequest {
  return {
    evmAddress: ""
  };
}
export const QueryKiiAddressByEVMAddressRequest = {
  typeUrl: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressRequest",
  encode(message: QueryKiiAddressByEVMAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evmAddress !== "") {
      writer.uint32(10).string(message.evmAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryKiiAddressByEVMAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKiiAddressByEVMAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evmAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryKiiAddressByEVMAddressRequest>): QueryKiiAddressByEVMAddressRequest {
    const message = createBaseQueryKiiAddressByEVMAddressRequest();
    message.evmAddress = object.evmAddress ?? "";
    return message;
  },
  fromAmino(object: QueryKiiAddressByEVMAddressRequestAmino): QueryKiiAddressByEVMAddressRequest {
    const message = createBaseQueryKiiAddressByEVMAddressRequest();
    if (object.evm_address !== undefined && object.evm_address !== null) {
      message.evmAddress = object.evm_address;
    }
    return message;
  },
  toAmino(message: QueryKiiAddressByEVMAddressRequest): QueryKiiAddressByEVMAddressRequestAmino {
    const obj: any = {};
    obj.evm_address = message.evmAddress === "" ? undefined : message.evmAddress;
    return obj;
  },
  fromAminoMsg(object: QueryKiiAddressByEVMAddressRequestAminoMsg): QueryKiiAddressByEVMAddressRequest {
    return QueryKiiAddressByEVMAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryKiiAddressByEVMAddressRequestProtoMsg): QueryKiiAddressByEVMAddressRequest {
    return QueryKiiAddressByEVMAddressRequest.decode(message.value);
  },
  toProto(message: QueryKiiAddressByEVMAddressRequest): Uint8Array {
    return QueryKiiAddressByEVMAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryKiiAddressByEVMAddressRequest): QueryKiiAddressByEVMAddressRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressRequest",
      value: QueryKiiAddressByEVMAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryKiiAddressByEVMAddressResponse(): QueryKiiAddressByEVMAddressResponse {
  return {
    kiiAddress: "",
    associated: false
  };
}
export const QueryKiiAddressByEVMAddressResponse = {
  typeUrl: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressResponse",
  encode(message: QueryKiiAddressByEVMAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kiiAddress !== "") {
      writer.uint32(10).string(message.kiiAddress);
    }
    if (message.associated === true) {
      writer.uint32(16).bool(message.associated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryKiiAddressByEVMAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKiiAddressByEVMAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kiiAddress = reader.string();
          break;
        case 2:
          message.associated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryKiiAddressByEVMAddressResponse>): QueryKiiAddressByEVMAddressResponse {
    const message = createBaseQueryKiiAddressByEVMAddressResponse();
    message.kiiAddress = object.kiiAddress ?? "";
    message.associated = object.associated ?? false;
    return message;
  },
  fromAmino(object: QueryKiiAddressByEVMAddressResponseAmino): QueryKiiAddressByEVMAddressResponse {
    const message = createBaseQueryKiiAddressByEVMAddressResponse();
    if (object.kii_address !== undefined && object.kii_address !== null) {
      message.kiiAddress = object.kii_address;
    }
    if (object.associated !== undefined && object.associated !== null) {
      message.associated = object.associated;
    }
    return message;
  },
  toAmino(message: QueryKiiAddressByEVMAddressResponse): QueryKiiAddressByEVMAddressResponseAmino {
    const obj: any = {};
    obj.kii_address = message.kiiAddress === "" ? undefined : message.kiiAddress;
    obj.associated = message.associated === false ? undefined : message.associated;
    return obj;
  },
  fromAminoMsg(object: QueryKiiAddressByEVMAddressResponseAminoMsg): QueryKiiAddressByEVMAddressResponse {
    return QueryKiiAddressByEVMAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryKiiAddressByEVMAddressResponseProtoMsg): QueryKiiAddressByEVMAddressResponse {
    return QueryKiiAddressByEVMAddressResponse.decode(message.value);
  },
  toProto(message: QueryKiiAddressByEVMAddressResponse): Uint8Array {
    return QueryKiiAddressByEVMAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryKiiAddressByEVMAddressResponse): QueryKiiAddressByEVMAddressResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryKiiAddressByEVMAddressResponse",
      value: QueryKiiAddressByEVMAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEVMAddressByKiiAddressRequest(): QueryEVMAddressByKiiAddressRequest {
  return {
    kiiAddress: ""
  };
}
export const QueryEVMAddressByKiiAddressRequest = {
  typeUrl: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressRequest",
  encode(message: QueryEVMAddressByKiiAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kiiAddress !== "") {
      writer.uint32(10).string(message.kiiAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEVMAddressByKiiAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMAddressByKiiAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kiiAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEVMAddressByKiiAddressRequest>): QueryEVMAddressByKiiAddressRequest {
    const message = createBaseQueryEVMAddressByKiiAddressRequest();
    message.kiiAddress = object.kiiAddress ?? "";
    return message;
  },
  fromAmino(object: QueryEVMAddressByKiiAddressRequestAmino): QueryEVMAddressByKiiAddressRequest {
    const message = createBaseQueryEVMAddressByKiiAddressRequest();
    if (object.kii_address !== undefined && object.kii_address !== null) {
      message.kiiAddress = object.kii_address;
    }
    return message;
  },
  toAmino(message: QueryEVMAddressByKiiAddressRequest): QueryEVMAddressByKiiAddressRequestAmino {
    const obj: any = {};
    obj.kii_address = message.kiiAddress === "" ? undefined : message.kiiAddress;
    return obj;
  },
  fromAminoMsg(object: QueryEVMAddressByKiiAddressRequestAminoMsg): QueryEVMAddressByKiiAddressRequest {
    return QueryEVMAddressByKiiAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEVMAddressByKiiAddressRequestProtoMsg): QueryEVMAddressByKiiAddressRequest {
    return QueryEVMAddressByKiiAddressRequest.decode(message.value);
  },
  toProto(message: QueryEVMAddressByKiiAddressRequest): Uint8Array {
    return QueryEVMAddressByKiiAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEVMAddressByKiiAddressRequest): QueryEVMAddressByKiiAddressRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressRequest",
      value: QueryEVMAddressByKiiAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEVMAddressByKiiAddressResponse(): QueryEVMAddressByKiiAddressResponse {
  return {
    evmAddress: "",
    associated: false
  };
}
export const QueryEVMAddressByKiiAddressResponse = {
  typeUrl: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressResponse",
  encode(message: QueryEVMAddressByKiiAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evmAddress !== "") {
      writer.uint32(10).string(message.evmAddress);
    }
    if (message.associated === true) {
      writer.uint32(16).bool(message.associated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEVMAddressByKiiAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMAddressByKiiAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evmAddress = reader.string();
          break;
        case 2:
          message.associated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEVMAddressByKiiAddressResponse>): QueryEVMAddressByKiiAddressResponse {
    const message = createBaseQueryEVMAddressByKiiAddressResponse();
    message.evmAddress = object.evmAddress ?? "";
    message.associated = object.associated ?? false;
    return message;
  },
  fromAmino(object: QueryEVMAddressByKiiAddressResponseAmino): QueryEVMAddressByKiiAddressResponse {
    const message = createBaseQueryEVMAddressByKiiAddressResponse();
    if (object.evm_address !== undefined && object.evm_address !== null) {
      message.evmAddress = object.evm_address;
    }
    if (object.associated !== undefined && object.associated !== null) {
      message.associated = object.associated;
    }
    return message;
  },
  toAmino(message: QueryEVMAddressByKiiAddressResponse): QueryEVMAddressByKiiAddressResponseAmino {
    const obj: any = {};
    obj.evm_address = message.evmAddress === "" ? undefined : message.evmAddress;
    obj.associated = message.associated === false ? undefined : message.associated;
    return obj;
  },
  fromAminoMsg(object: QueryEVMAddressByKiiAddressResponseAminoMsg): QueryEVMAddressByKiiAddressResponse {
    return QueryEVMAddressByKiiAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEVMAddressByKiiAddressResponseProtoMsg): QueryEVMAddressByKiiAddressResponse {
    return QueryEVMAddressByKiiAddressResponse.decode(message.value);
  },
  toProto(message: QueryEVMAddressByKiiAddressResponse): Uint8Array {
    return QueryEVMAddressByKiiAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEVMAddressByKiiAddressResponse): QueryEVMAddressByKiiAddressResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryEVMAddressByKiiAddressResponse",
      value: QueryEVMAddressByKiiAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStaticCallRequest(): QueryStaticCallRequest {
  return {
    data: new Uint8Array(),
    to: ""
  };
}
export const QueryStaticCallRequest = {
  typeUrl: "/kiichain.kiichain3.evm.QueryStaticCallRequest",
  encode(message: QueryStaticCallRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticCallRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticCallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStaticCallRequest>): QueryStaticCallRequest {
    const message = createBaseQueryStaticCallRequest();
    message.data = object.data ?? new Uint8Array();
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryStaticCallRequestAmino): QueryStaticCallRequest {
    const message = createBaseQueryStaticCallRequest();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryStaticCallRequest): QueryStaticCallRequestAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryStaticCallRequestAminoMsg): QueryStaticCallRequest {
    return QueryStaticCallRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStaticCallRequestProtoMsg): QueryStaticCallRequest {
    return QueryStaticCallRequest.decode(message.value);
  },
  toProto(message: QueryStaticCallRequest): Uint8Array {
    return QueryStaticCallRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStaticCallRequest): QueryStaticCallRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryStaticCallRequest",
      value: QueryStaticCallRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStaticCallResponse(): QueryStaticCallResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryStaticCallResponse = {
  typeUrl: "/kiichain.kiichain3.evm.QueryStaticCallResponse",
  encode(message: QueryStaticCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticCallResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticCallResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStaticCallResponse>): QueryStaticCallResponse {
    const message = createBaseQueryStaticCallResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryStaticCallResponseAmino): QueryStaticCallResponse {
    const message = createBaseQueryStaticCallResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryStaticCallResponse): QueryStaticCallResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStaticCallResponseAminoMsg): QueryStaticCallResponse {
    return QueryStaticCallResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStaticCallResponseProtoMsg): QueryStaticCallResponse {
    return QueryStaticCallResponse.decode(message.value);
  },
  toProto(message: QueryStaticCallResponse): Uint8Array {
    return QueryStaticCallResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStaticCallResponse): QueryStaticCallResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryStaticCallResponse",
      value: QueryStaticCallResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPointerRequest(): QueryPointerRequest {
  return {
    pointerType: 0,
    pointee: ""
  };
}
export const QueryPointerRequest = {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerRequest",
  encode(message: QueryPointerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pointerType !== 0) {
      writer.uint32(8).int32(message.pointerType);
    }
    if (message.pointee !== "") {
      writer.uint32(18).string(message.pointee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPointerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointerType = reader.int32() as any;
          break;
        case 2:
          message.pointee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPointerRequest>): QueryPointerRequest {
    const message = createBaseQueryPointerRequest();
    message.pointerType = object.pointerType ?? 0;
    message.pointee = object.pointee ?? "";
    return message;
  },
  fromAmino(object: QueryPointerRequestAmino): QueryPointerRequest {
    const message = createBaseQueryPointerRequest();
    if (object.pointer_type !== undefined && object.pointer_type !== null) {
      message.pointerType = object.pointer_type;
    }
    if (object.pointee !== undefined && object.pointee !== null) {
      message.pointee = object.pointee;
    }
    return message;
  },
  toAmino(message: QueryPointerRequest): QueryPointerRequestAmino {
    const obj: any = {};
    obj.pointer_type = message.pointerType === 0 ? undefined : message.pointerType;
    obj.pointee = message.pointee === "" ? undefined : message.pointee;
    return obj;
  },
  fromAminoMsg(object: QueryPointerRequestAminoMsg): QueryPointerRequest {
    return QueryPointerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPointerRequestProtoMsg): QueryPointerRequest {
    return QueryPointerRequest.decode(message.value);
  },
  toProto(message: QueryPointerRequest): Uint8Array {
    return QueryPointerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPointerRequest): QueryPointerRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryPointerRequest",
      value: QueryPointerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPointerResponse(): QueryPointerResponse {
  return {
    pointer: "",
    version: 0,
    exists: false
  };
}
export const QueryPointerResponse = {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerResponse",
  encode(message: QueryPointerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pointer !== "") {
      writer.uint32(10).string(message.pointer);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    if (message.exists === true) {
      writer.uint32(24).bool(message.exists);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPointerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointer = reader.string();
          break;
        case 2:
          message.version = reader.uint32();
          break;
        case 3:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPointerResponse>): QueryPointerResponse {
    const message = createBaseQueryPointerResponse();
    message.pointer = object.pointer ?? "";
    message.version = object.version ?? 0;
    message.exists = object.exists ?? false;
    return message;
  },
  fromAmino(object: QueryPointerResponseAmino): QueryPointerResponse {
    const message = createBaseQueryPointerResponse();
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    return message;
  },
  toAmino(message: QueryPointerResponse): QueryPointerResponseAmino {
    const obj: any = {};
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    obj.version = message.version === 0 ? undefined : message.version;
    obj.exists = message.exists === false ? undefined : message.exists;
    return obj;
  },
  fromAminoMsg(object: QueryPointerResponseAminoMsg): QueryPointerResponse {
    return QueryPointerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPointerResponseProtoMsg): QueryPointerResponse {
    return QueryPointerResponse.decode(message.value);
  },
  toProto(message: QueryPointerResponse): Uint8Array {
    return QueryPointerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPointerResponse): QueryPointerResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryPointerResponse",
      value: QueryPointerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPointerVersionRequest(): QueryPointerVersionRequest {
  return {
    pointerType: 0
  };
}
export const QueryPointerVersionRequest = {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerVersionRequest",
  encode(message: QueryPointerVersionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pointerType !== 0) {
      writer.uint32(8).int32(message.pointerType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerVersionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPointerVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointerType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPointerVersionRequest>): QueryPointerVersionRequest {
    const message = createBaseQueryPointerVersionRequest();
    message.pointerType = object.pointerType ?? 0;
    return message;
  },
  fromAmino(object: QueryPointerVersionRequestAmino): QueryPointerVersionRequest {
    const message = createBaseQueryPointerVersionRequest();
    if (object.pointer_type !== undefined && object.pointer_type !== null) {
      message.pointerType = object.pointer_type;
    }
    return message;
  },
  toAmino(message: QueryPointerVersionRequest): QueryPointerVersionRequestAmino {
    const obj: any = {};
    obj.pointer_type = message.pointerType === 0 ? undefined : message.pointerType;
    return obj;
  },
  fromAminoMsg(object: QueryPointerVersionRequestAminoMsg): QueryPointerVersionRequest {
    return QueryPointerVersionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPointerVersionRequestProtoMsg): QueryPointerVersionRequest {
    return QueryPointerVersionRequest.decode(message.value);
  },
  toProto(message: QueryPointerVersionRequest): Uint8Array {
    return QueryPointerVersionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPointerVersionRequest): QueryPointerVersionRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryPointerVersionRequest",
      value: QueryPointerVersionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPointerVersionResponse(): QueryPointerVersionResponse {
  return {
    version: 0,
    cwCodeId: BigInt(0)
  };
}
export const QueryPointerVersionResponse = {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointerVersionResponse",
  encode(message: QueryPointerVersionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.cwCodeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cwCodeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerVersionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPointerVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.cwCodeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPointerVersionResponse>): QueryPointerVersionResponse {
    const message = createBaseQueryPointerVersionResponse();
    message.version = object.version ?? 0;
    message.cwCodeId = object.cwCodeId !== undefined && object.cwCodeId !== null ? BigInt(object.cwCodeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPointerVersionResponseAmino): QueryPointerVersionResponse {
    const message = createBaseQueryPointerVersionResponse();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.cw_code_id !== undefined && object.cw_code_id !== null) {
      message.cwCodeId = BigInt(object.cw_code_id);
    }
    return message;
  },
  toAmino(message: QueryPointerVersionResponse): QueryPointerVersionResponseAmino {
    const obj: any = {};
    obj.version = message.version === 0 ? undefined : message.version;
    obj.cw_code_id = message.cwCodeId !== BigInt(0) ? message.cwCodeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPointerVersionResponseAminoMsg): QueryPointerVersionResponse {
    return QueryPointerVersionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPointerVersionResponseProtoMsg): QueryPointerVersionResponse {
    return QueryPointerVersionResponse.decode(message.value);
  },
  toProto(message: QueryPointerVersionResponse): Uint8Array {
    return QueryPointerVersionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPointerVersionResponse): QueryPointerVersionResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryPointerVersionResponse",
      value: QueryPointerVersionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPointeeRequest(): QueryPointeeRequest {
  return {
    pointerType: 0,
    pointer: ""
  };
}
export const QueryPointeeRequest = {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointeeRequest",
  encode(message: QueryPointeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pointerType !== 0) {
      writer.uint32(8).int32(message.pointerType);
    }
    if (message.pointer !== "") {
      writer.uint32(18).string(message.pointer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPointeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPointeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointerType = reader.int32() as any;
          break;
        case 2:
          message.pointer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPointeeRequest>): QueryPointeeRequest {
    const message = createBaseQueryPointeeRequest();
    message.pointerType = object.pointerType ?? 0;
    message.pointer = object.pointer ?? "";
    return message;
  },
  fromAmino(object: QueryPointeeRequestAmino): QueryPointeeRequest {
    const message = createBaseQueryPointeeRequest();
    if (object.pointer_type !== undefined && object.pointer_type !== null) {
      message.pointerType = object.pointer_type;
    }
    if (object.pointer !== undefined && object.pointer !== null) {
      message.pointer = object.pointer;
    }
    return message;
  },
  toAmino(message: QueryPointeeRequest): QueryPointeeRequestAmino {
    const obj: any = {};
    obj.pointer_type = message.pointerType === 0 ? undefined : message.pointerType;
    obj.pointer = message.pointer === "" ? undefined : message.pointer;
    return obj;
  },
  fromAminoMsg(object: QueryPointeeRequestAminoMsg): QueryPointeeRequest {
    return QueryPointeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPointeeRequestProtoMsg): QueryPointeeRequest {
    return QueryPointeeRequest.decode(message.value);
  },
  toProto(message: QueryPointeeRequest): Uint8Array {
    return QueryPointeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPointeeRequest): QueryPointeeRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryPointeeRequest",
      value: QueryPointeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPointeeResponse(): QueryPointeeResponse {
  return {
    pointee: "",
    version: 0,
    exists: false
  };
}
export const QueryPointeeResponse = {
  typeUrl: "/kiichain.kiichain3.evm.QueryPointeeResponse",
  encode(message: QueryPointeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pointee !== "") {
      writer.uint32(10).string(message.pointee);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    if (message.exists === true) {
      writer.uint32(24).bool(message.exists);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPointeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPointeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointee = reader.string();
          break;
        case 2:
          message.version = reader.uint32();
          break;
        case 3:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPointeeResponse>): QueryPointeeResponse {
    const message = createBaseQueryPointeeResponse();
    message.pointee = object.pointee ?? "";
    message.version = object.version ?? 0;
    message.exists = object.exists ?? false;
    return message;
  },
  fromAmino(object: QueryPointeeResponseAmino): QueryPointeeResponse {
    const message = createBaseQueryPointeeResponse();
    if (object.pointee !== undefined && object.pointee !== null) {
      message.pointee = object.pointee;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    return message;
  },
  toAmino(message: QueryPointeeResponse): QueryPointeeResponseAmino {
    const obj: any = {};
    obj.pointee = message.pointee === "" ? undefined : message.pointee;
    obj.version = message.version === 0 ? undefined : message.version;
    obj.exists = message.exists === false ? undefined : message.exists;
    return obj;
  },
  fromAminoMsg(object: QueryPointeeResponseAminoMsg): QueryPointeeResponse {
    return QueryPointeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPointeeResponseProtoMsg): QueryPointeeResponse {
    return QueryPointeeResponse.decode(message.value);
  },
  toProto(message: QueryPointeeResponse): Uint8Array {
    return QueryPointeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPointeeResponse): QueryPointeeResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.evm.QueryPointeeResponse",
      value: QueryPointeeResponse.encode(message).finish()
    };
  }
};