//@ts-nocheck
import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./ratelimit";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Queries all rate limits */
export interface QueryAllRateLimitsRequest {}
export interface QueryAllRateLimitsRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsRequest";
  value: Uint8Array;
}
/** Queries all rate limits */
export interface QueryAllRateLimitsRequestAmino {}
export interface QueryAllRateLimitsRequestAminoMsg {
  type: "/ratelimit.v1.QueryAllRateLimitsRequest";
  value: QueryAllRateLimitsRequestAmino;
}
/** Queries all rate limits */
export interface QueryAllRateLimitsRequestSDKType {}
export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsResponse";
  value: Uint8Array;
}
export interface QueryAllRateLimitsResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryAllRateLimitsResponseAminoMsg {
  type: "/ratelimit.v1.QueryAllRateLimitsResponse";
  value: QueryAllRateLimitsResponseAmino;
}
export interface QueryAllRateLimitsResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/** Queries a specific rate limit by channel ID and denom */
export interface QueryRateLimitRequest {
  denom: string;
  channelId: string;
}
export interface QueryRateLimitRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitRequest";
  value: Uint8Array;
}
/** Queries a specific rate limit by channel ID and denom */
export interface QueryRateLimitRequestAmino {
  denom?: string;
  channel_id?: string;
}
export interface QueryRateLimitRequestAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitRequest";
  value: QueryRateLimitRequestAmino;
}
/** Queries a specific rate limit by channel ID and denom */
export interface QueryRateLimitRequestSDKType {
  denom: string;
  channel_id: string;
}
export interface QueryRateLimitResponse {
  rateLimit?: RateLimit;
}
export interface QueryRateLimitResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitResponse";
  value: Uint8Array;
}
export interface QueryRateLimitResponseAmino {
  rate_limit?: RateLimitAmino;
}
export interface QueryRateLimitResponseAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitResponse";
  value: QueryRateLimitResponseAmino;
}
export interface QueryRateLimitResponseSDKType {
  rate_limit?: RateLimitSDKType;
}
/** Queries all the rate limits for a given chain */
export interface QueryRateLimitsByChainIdRequest {
  chainId: string;
}
export interface QueryRateLimitsByChainIdRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdRequest";
  value: Uint8Array;
}
/** Queries all the rate limits for a given chain */
export interface QueryRateLimitsByChainIdRequestAmino {
  chain_id?: string;
}
export interface QueryRateLimitsByChainIdRequestAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChainIdRequest";
  value: QueryRateLimitsByChainIdRequestAmino;
}
/** Queries all the rate limits for a given chain */
export interface QueryRateLimitsByChainIdRequestSDKType {
  chain_id: string;
}
export interface QueryRateLimitsByChainIdResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIdResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdResponse";
  value: Uint8Array;
}
export interface QueryRateLimitsByChainIdResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChainIdResponseAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChainIdResponse";
  value: QueryRateLimitsByChainIdResponseAmino;
}
export interface QueryRateLimitsByChainIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/** Queries all the rate limits for a given channel ID */
export interface QueryRateLimitsByChannelIdRequest {
  channelId: string;
}
export interface QueryRateLimitsByChannelIdRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelIdRequest";
  value: Uint8Array;
}
/** Queries all the rate limits for a given channel ID */
export interface QueryRateLimitsByChannelIdRequestAmino {
  channel_id?: string;
}
export interface QueryRateLimitsByChannelIdRequestAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChannelIdRequest";
  value: QueryRateLimitsByChannelIdRequestAmino;
}
/** Queries all the rate limits for a given channel ID */
export interface QueryRateLimitsByChannelIdRequestSDKType {
  channel_id: string;
}
export interface QueryRateLimitsByChannelIdResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelIdResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelIdResponse";
  value: Uint8Array;
}
export interface QueryRateLimitsByChannelIdResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChannelIdResponseAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChannelIdResponse";
  value: QueryRateLimitsByChannelIdResponseAmino;
}
export interface QueryRateLimitsByChannelIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/** Queries all blacklisted denoms */
export interface QueryAllBlacklistedDenomsRequest {}
export interface QueryAllBlacklistedDenomsRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest";
  value: Uint8Array;
}
/** Queries all blacklisted denoms */
export interface QueryAllBlacklistedDenomsRequestAmino {}
export interface QueryAllBlacklistedDenomsRequestAminoMsg {
  type: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest";
  value: QueryAllBlacklistedDenomsRequestAmino;
}
/** Queries all blacklisted denoms */
export interface QueryAllBlacklistedDenomsRequestSDKType {}
export interface QueryAllBlacklistedDenomsResponse {
  denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse";
  value: Uint8Array;
}
export interface QueryAllBlacklistedDenomsResponseAmino {
  denoms?: string[];
}
export interface QueryAllBlacklistedDenomsResponseAminoMsg {
  type: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse";
  value: QueryAllBlacklistedDenomsResponseAmino;
}
export interface QueryAllBlacklistedDenomsResponseSDKType {
  denoms: string[];
}
/** Queries all whitelisted address pairs */
export interface QueryAllWhitelistedAddressesRequest {}
export interface QueryAllWhitelistedAddressesRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest";
  value: Uint8Array;
}
/** Queries all whitelisted address pairs */
export interface QueryAllWhitelistedAddressesRequestAmino {}
export interface QueryAllWhitelistedAddressesRequestAminoMsg {
  type: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest";
  value: QueryAllWhitelistedAddressesRequestAmino;
}
/** Queries all whitelisted address pairs */
export interface QueryAllWhitelistedAddressesRequestSDKType {}
export interface QueryAllWhitelistedAddressesResponse {
  addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse";
  value: Uint8Array;
}
export interface QueryAllWhitelistedAddressesResponseAmino {
  address_pairs?: WhitelistedAddressPairAmino[];
}
export interface QueryAllWhitelistedAddressesResponseAminoMsg {
  type: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse";
  value: QueryAllWhitelistedAddressesResponseAmino;
}
export interface QueryAllWhitelistedAddressesResponseSDKType {
  address_pairs: WhitelistedAddressPairSDKType[];
}
function createBaseQueryAllRateLimitsRequest(): QueryAllRateLimitsRequest {
  return {};
}
export const QueryAllRateLimitsRequest = {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsRequest",
  encode(_: QueryAllRateLimitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRateLimitsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRateLimitsRequest();
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
  fromPartial(_: Partial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  },
  fromAmino(_: QueryAllRateLimitsRequestAmino): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  },
  toAmino(_: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllRateLimitsRequestAminoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRateLimitsRequestProtoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsRequest): Uint8Array {
    return QueryAllRateLimitsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllRateLimitsRequest",
      value: QueryAllRateLimitsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRateLimitsResponse(): QueryAllRateLimitsResponse {
  return {
    rateLimits: []
  };
}
export const QueryAllRateLimitsResponse = {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsResponse",
  encode(message: QueryAllRateLimitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRateLimitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRateLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllRateLimitsResponseAmino): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllRateLimitsResponseAminoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRateLimitsResponseProtoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsResponse): Uint8Array {
    return QueryAllRateLimitsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllRateLimitsResponse",
      value: QueryAllRateLimitsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitRequest(): QueryRateLimitRequest {
  return {
    denom: "",
    channelId: ""
  };
}
export const QueryRateLimitRequest = {
  typeUrl: "/ratelimit.v1.QueryRateLimitRequest",
  encode(message: QueryRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitRequest>): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitRequestAmino): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitRequest): QueryRateLimitRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitRequestAminoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitRequestProtoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitRequest): Uint8Array {
    return QueryRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitRequest): QueryRateLimitRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitRequest",
      value: QueryRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitResponse(): QueryRateLimitResponse {
  return {
    rateLimit: undefined
  };
}
export const QueryRateLimitResponse = {
  typeUrl: "/ratelimit.v1.QueryRateLimitResponse",
  encode(message: QueryRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimit = RateLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitResponse>): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    message.rateLimit = object.rateLimit !== undefined && object.rateLimit !== null ? RateLimit.fromPartial(object.rateLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryRateLimitResponseAmino): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    if (object.rate_limit !== undefined && object.rate_limit !== null) {
      message.rateLimit = RateLimit.fromAmino(object.rate_limit);
    }
    return message;
  },
  toAmino(message: QueryRateLimitResponse): QueryRateLimitResponseAmino {
    const obj: any = {};
    obj.rate_limit = message.rateLimit ? RateLimit.toAmino(message.rateLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitResponseAminoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitResponseProtoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitResponse): Uint8Array {
    return QueryRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitResponse): QueryRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitResponse",
      value: QueryRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChainIdRequest(): QueryRateLimitsByChainIdRequest {
  return {
    chainId: ""
  };
}
export const QueryRateLimitsByChainIdRequest = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdRequest",
  encode(message: QueryRateLimitsByChainIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChainIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIdRequestAmino): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIdRequestAminoMsg): QueryRateLimitsByChainIdRequest {
    return QueryRateLimitsByChainIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChainIdRequestProtoMsg): QueryRateLimitsByChainIdRequest {
    return QueryRateLimitsByChainIdRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIdRequest): Uint8Array {
    return QueryRateLimitsByChainIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdRequest",
      value: QueryRateLimitsByChainIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChainIdResponse(): QueryRateLimitsByChainIdResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChainIdResponse = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdResponse",
  encode(message: QueryRateLimitsByChainIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChainIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIdResponseAmino): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIdResponseAminoMsg): QueryRateLimitsByChainIdResponse {
    return QueryRateLimitsByChainIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChainIdResponseProtoMsg): QueryRateLimitsByChainIdResponse {
    return QueryRateLimitsByChainIdResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIdResponse): Uint8Array {
    return QueryRateLimitsByChainIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdResponse",
      value: QueryRateLimitsByChainIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChannelIdRequest(): QueryRateLimitsByChannelIdRequest {
  return {
    channelId: ""
  };
}
export const QueryRateLimitsByChannelIdRequest = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelIdRequest",
  encode(message: QueryRateLimitsByChannelIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChannelIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest {
    const message = createBaseQueryRateLimitsByChannelIdRequest();
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelIdRequestAmino): QueryRateLimitsByChannelIdRequest {
    const message = createBaseQueryRateLimitsByChannelIdRequest();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelIdRequest): QueryRateLimitsByChannelIdRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelIdRequestAminoMsg): QueryRateLimitsByChannelIdRequest {
    return QueryRateLimitsByChannelIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChannelIdRequestProtoMsg): QueryRateLimitsByChannelIdRequest {
    return QueryRateLimitsByChannelIdRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelIdRequest): Uint8Array {
    return QueryRateLimitsByChannelIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelIdRequest): QueryRateLimitsByChannelIdRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelIdRequest",
      value: QueryRateLimitsByChannelIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChannelIdResponse(): QueryRateLimitsByChannelIdResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChannelIdResponse = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelIdResponse",
  encode(message: QueryRateLimitsByChannelIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChannelIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse {
    const message = createBaseQueryRateLimitsByChannelIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelIdResponseAmino): QueryRateLimitsByChannelIdResponse {
    const message = createBaseQueryRateLimitsByChannelIdResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelIdResponse): QueryRateLimitsByChannelIdResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelIdResponseAminoMsg): QueryRateLimitsByChannelIdResponse {
    return QueryRateLimitsByChannelIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChannelIdResponseProtoMsg): QueryRateLimitsByChannelIdResponse {
    return QueryRateLimitsByChannelIdResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelIdResponse): Uint8Array {
    return QueryRateLimitsByChannelIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelIdResponse): QueryRateLimitsByChannelIdResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelIdResponse",
      value: QueryRateLimitsByChannelIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedDenomsRequest(): QueryAllBlacklistedDenomsRequest {
  return {};
}
export const QueryAllBlacklistedDenomsRequest = {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest",
  encode(_: QueryAllBlacklistedDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBlacklistedDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlacklistedDenomsRequest();
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
  fromPartial(_: Partial<QueryAllBlacklistedDenomsRequest>): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  },
  fromAmino(_: QueryAllBlacklistedDenomsRequestAmino): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  },
  toAmino(_: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedDenomsRequestAminoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsRequestProtoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsRequest): Uint8Array {
    return QueryAllBlacklistedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest",
      value: QueryAllBlacklistedDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedDenomsResponse(): QueryAllBlacklistedDenomsResponse {
  return {
    denoms: []
  };
}
export const QueryAllBlacklistedDenomsResponse = {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse",
  encode(message: QueryAllBlacklistedDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBlacklistedDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlacklistedDenomsResponse();
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
  fromPartial(object: Partial<QueryAllBlacklistedDenomsResponse>): QueryAllBlacklistedDenomsResponse {
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllBlacklistedDenomsResponseAmino): QueryAllBlacklistedDenomsResponse {
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedDenomsResponseAminoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsResponseProtoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsResponse): Uint8Array {
    return QueryAllBlacklistedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse",
      value: QueryAllBlacklistedDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedAddressesRequest(): QueryAllWhitelistedAddressesRequest {
  return {};
}
export const QueryAllWhitelistedAddressesRequest = {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest",
  encode(_: QueryAllWhitelistedAddressesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWhitelistedAddressesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedAddressesRequest();
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
  fromPartial(_: Partial<QueryAllWhitelistedAddressesRequest>): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  },
  fromAmino(_: QueryAllWhitelistedAddressesRequestAmino): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  },
  toAmino(_: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedAddressesRequestAminoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesRequestProtoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesRequest): Uint8Array {
    return QueryAllWhitelistedAddressesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest",
      value: QueryAllWhitelistedAddressesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedAddressesResponse(): QueryAllWhitelistedAddressesResponse {
  return {
    addressPairs: []
  };
}
export const QueryAllWhitelistedAddressesResponse = {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse",
  encode(message: QueryAllWhitelistedAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWhitelistedAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressPairs.push(WhitelistedAddressPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllWhitelistedAddressesResponse>): QueryAllWhitelistedAddressesResponse {
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    message.addressPairs = object.addressPairs?.map(e => WhitelistedAddressPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllWhitelistedAddressesResponseAmino): QueryAllWhitelistedAddressesResponse {
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    message.addressPairs = object.address_pairs?.map(e => WhitelistedAddressPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseAmino {
    const obj: any = {};
    if (message.addressPairs) {
      obj.address_pairs = message.addressPairs.map(e => e ? WhitelistedAddressPair.toAmino(e) : undefined);
    } else {
      obj.address_pairs = message.addressPairs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedAddressesResponseAminoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesResponseProtoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesResponse): Uint8Array {
    return QueryAllWhitelistedAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse",
      value: QueryAllWhitelistedAddressesResponse.encode(message).finish()
    };
  }
};