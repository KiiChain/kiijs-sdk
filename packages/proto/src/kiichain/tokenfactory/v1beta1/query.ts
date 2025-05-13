//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
  denom?: string;
}
export interface QueryDenomAuthorityMetadataRequestAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest";
  value: QueryDenomAuthorityMetadataRequestAmino;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
  denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata: DenomAuthorityMetadata;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
  authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface QueryDenomAuthorityMetadataResponseAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse";
  value: QueryDenomAuthorityMetadataResponseAmino;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
  authority_metadata: DenomAuthorityMetadataSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestAmino {
  creator?: string;
}
export interface QueryDenomsFromCreatorRequestAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest";
  value: QueryDenomsFromCreatorRequestAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseAmino {
  denoms?: string[];
}
export interface QueryDenomsFromCreatorResponseAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse";
  value: QueryDenomsFromCreatorResponseAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
  denoms: string[];
}
/**
 * QueryDenomsFromAdminRequest defines the request structure for the
 * DenomsFromAdmin gRPC query.
 */
export interface QueryDenomsFromAdminRequest {
  admin: string;
}
export interface QueryDenomsFromAdminRequestProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminRequest";
  value: Uint8Array;
}
/**
 * QueryDenomsFromAdminRequest defines the request structure for the
 * DenomsFromAdmin gRPC query.
 */
export interface QueryDenomsFromAdminRequestAmino {
  admin?: string;
}
export interface QueryDenomsFromAdminRequestAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminRequest";
  value: QueryDenomsFromAdminRequestAmino;
}
/**
 * QueryDenomsFromAdminRequest defines the request structure for the
 * DenomsFromAdmin gRPC query.
 */
export interface QueryDenomsFromAdminRequestSDKType {
  admin: string;
}
/**
 * QueryDenomsFromAdminRequest defines the response structure for the
 * DenomsFromAdmin gRPC query.
 */
export interface QueryDenomsFromAdminResponse {
  denoms: string[];
}
export interface QueryDenomsFromAdminResponseProtoMsg {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminResponse";
  value: Uint8Array;
}
/**
 * QueryDenomsFromAdminRequest defines the response structure for the
 * DenomsFromAdmin gRPC query.
 */
export interface QueryDenomsFromAdminResponseAmino {
  denoms?: string[];
}
export interface QueryDenomsFromAdminResponseAminoMsg {
  type: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminResponse";
  value: QueryDenomsFromAdminResponseAmino;
}
/**
 * QueryDenomsFromAdminRequest defines the response structure for the
 * DenomsFromAdmin gRPC query.
 */
export interface QueryDenomsFromAdminResponseSDKType {
  denoms: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryParamsRequest",
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
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryParamsRequest",
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
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryParamsResponse",
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
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    denom: ""
  };
}
export const QueryDenomAuthorityMetadataRequest = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
  encode(message: QueryDenomAuthorityMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest {
    return QueryDenomAuthorityMetadataRequest.decode(message.value);
  },
  toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array {
    return QueryDenomAuthorityMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
      value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: DenomAuthorityMetadata.fromPartial({})
  };
}
export const QueryDenomAuthorityMetadataResponse = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
  encode(message: QueryDenomAuthorityMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino {
    const obj: any = {};
    obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse {
    return QueryDenomAuthorityMetadataResponse.decode(message.value);
  },
  toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array {
    return QueryDenomAuthorityMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
      value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: ""
  };
}
export const QueryDenomsFromCreatorRequest = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
  encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest {
    return QueryDenomsFromCreatorRequest.decode(message.value);
  },
  toProto(message: QueryDenomsFromCreatorRequest): Uint8Array {
    return QueryDenomsFromCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
      value: QueryDenomsFromCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: []
  };
}
export const QueryDenomsFromCreatorResponse = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
  encode(message: QueryDenomsFromCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse {
    return QueryDenomsFromCreatorResponse.decode(message.value);
  },
  toProto(message: QueryDenomsFromCreatorResponse): Uint8Array {
    return QueryDenomsFromCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
      value: QueryDenomsFromCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsFromAdminRequest(): QueryDenomsFromAdminRequest {
  return {
    admin: ""
  };
}
export const QueryDenomsFromAdminRequest = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminRequest",
  encode(message: QueryDenomsFromAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomsFromAdminRequest>): QueryDenomsFromAdminRequest {
    const message = createBaseQueryDenomsFromAdminRequest();
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: QueryDenomsFromAdminRequestAmino): QueryDenomsFromAdminRequest {
    const message = createBaseQueryDenomsFromAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: QueryDenomsFromAdminRequest): QueryDenomsFromAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsFromAdminRequestAminoMsg): QueryDenomsFromAdminRequest {
    return QueryDenomsFromAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsFromAdminRequestProtoMsg): QueryDenomsFromAdminRequest {
    return QueryDenomsFromAdminRequest.decode(message.value);
  },
  toProto(message: QueryDenomsFromAdminRequest): Uint8Array {
    return QueryDenomsFromAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromAdminRequest): QueryDenomsFromAdminRequestProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminRequest",
      value: QueryDenomsFromAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsFromAdminResponse(): QueryDenomsFromAdminResponse {
  return {
    denoms: []
  };
}
export const QueryDenomsFromAdminResponse = {
  typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminResponse",
  encode(message: QueryDenomsFromAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomsFromAdminResponse>): QueryDenomsFromAdminResponse {
    const message = createBaseQueryDenomsFromAdminResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDenomsFromAdminResponseAmino): QueryDenomsFromAdminResponse {
    const message = createBaseQueryDenomsFromAdminResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDenomsFromAdminResponse): QueryDenomsFromAdminResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomsFromAdminResponseAminoMsg): QueryDenomsFromAdminResponse {
    return QueryDenomsFromAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsFromAdminResponseProtoMsg): QueryDenomsFromAdminResponse {
    return QueryDenomsFromAdminResponse.decode(message.value);
  },
  toProto(message: QueryDenomsFromAdminResponse): Uint8Array {
    return QueryDenomsFromAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsFromAdminResponse): QueryDenomsFromAdminResponseProtoMsg {
    return {
      typeUrl: "/kiichain.tokenfactory.v1beta1.QueryDenomsFromAdminResponse",
      value: QueryDenomsFromAdminResponse.encode(message).finish()
    };
  }
};