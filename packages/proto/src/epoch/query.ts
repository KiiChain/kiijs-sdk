//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Epoch, EpochAmino, EpochSDKType } from "./epoch";
import { BinaryReader, BinaryWriter } from "../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.epoch.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kiichain.kiichain3.epoch.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.epoch.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kiichain.kiichain3.epoch.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryEpochRequest {}
export interface QueryEpochRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.epoch.QueryEpochRequest";
  value: Uint8Array;
}
export interface QueryEpochRequestAmino {}
export interface QueryEpochRequestAminoMsg {
  type: "/kiichain.kiichain3.epoch.QueryEpochRequest";
  value: QueryEpochRequestAmino;
}
export interface QueryEpochRequestSDKType {}
export interface QueryEpochResponse {
  epoch: Epoch;
}
export interface QueryEpochResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.epoch.QueryEpochResponse";
  value: Uint8Array;
}
export interface QueryEpochResponseAmino {
  epoch?: EpochAmino;
}
export interface QueryEpochResponseAminoMsg {
  type: "/kiichain.kiichain3.epoch.QueryEpochResponse";
  value: QueryEpochResponseAmino;
}
export interface QueryEpochResponseSDKType {
  epoch: EpochSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kiichain.kiichain3.epoch.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.epoch.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kiichain.kiichain3.epoch.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.epoch.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochRequest(): QueryEpochRequest {
  return {};
}
export const QueryEpochRequest = {
  typeUrl: "/kiichain.kiichain3.epoch.QueryEpochRequest",
  encode(_: QueryEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryEpochRequest>): QueryEpochRequest {
    const message = createBaseQueryEpochRequest();
    return message;
  },
  fromAmino(_: QueryEpochRequestAmino): QueryEpochRequest {
    const message = createBaseQueryEpochRequest();
    return message;
  },
  toAmino(_: QueryEpochRequest): QueryEpochRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochRequestAminoMsg): QueryEpochRequest {
    return QueryEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochRequestProtoMsg): QueryEpochRequest {
    return QueryEpochRequest.decode(message.value);
  },
  toProto(message: QueryEpochRequest): Uint8Array {
    return QueryEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochRequest): QueryEpochRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.epoch.QueryEpochRequest",
      value: QueryEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochResponse(): QueryEpochResponse {
  return {
    epoch: Epoch.fromPartial({})
  };
}
export const QueryEpochResponse = {
  typeUrl: "/kiichain.kiichain3.epoch.QueryEpochResponse",
  encode(message: QueryEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = Epoch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEpochResponse>): QueryEpochResponse {
    const message = createBaseQueryEpochResponse();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochResponseAmino): QueryEpochResponse {
    const message = createBaseQueryEpochResponse();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = Epoch.fromAmino(object.epoch);
    }
    return message;
  },
  toAmino(message: QueryEpochResponse): QueryEpochResponseAmino {
    const obj: any = {};
    obj.epoch = message.epoch ? Epoch.toAmino(message.epoch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochResponseAminoMsg): QueryEpochResponse {
    return QueryEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochResponseProtoMsg): QueryEpochResponse {
    return QueryEpochResponse.decode(message.value);
  },
  toProto(message: QueryEpochResponse): Uint8Array {
    return QueryEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochResponse): QueryEpochResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.epoch.QueryEpochResponse",
      value: QueryEpochResponse.encode(message).finish()
    };
  }
};