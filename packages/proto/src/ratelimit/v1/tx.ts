//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
/** Gov tx to add a new rate limit */
export interface MsgAddRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelId: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: bigint;
}
export interface MsgAddRateLimitProtoMsg {
  typeUrl: '/ratelimit.v1.MsgAddRateLimit';
  value: Uint8Array;
}
/** Gov tx to add a new rate limit */
export interface MsgAddRateLimitAmino {
  /** Authority defines the x/gov module account */
  authority?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channel_id?: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_send?: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_recv?: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  duration_hours?: string;
}
export interface MsgAddRateLimitAminoMsg {
  type: 'ratelimit/MsgAddRateLimit';
  value: MsgAddRateLimitAmino;
}
/** Gov tx to add a new rate limit */
export interface MsgAddRateLimitSDKType {
  authority: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
export interface MsgAddRateLimitResponse {}
export interface MsgAddRateLimitResponseProtoMsg {
  typeUrl: '/ratelimit.v1.MsgAddRateLimitResponse';
  value: Uint8Array;
}
export interface MsgAddRateLimitResponseAmino {}
export interface MsgAddRateLimitResponseAminoMsg {
  type: '/ratelimit.v1.MsgAddRateLimitResponse';
  value: MsgAddRateLimitResponseAmino;
}
export interface MsgAddRateLimitResponseSDKType {}
/** Gov tx to update an existing rate limit */
export interface MsgUpdateRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelId: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: bigint;
}
export interface MsgUpdateRateLimitProtoMsg {
  typeUrl: '/ratelimit.v1.MsgUpdateRateLimit';
  value: Uint8Array;
}
/** Gov tx to update an existing rate limit */
export interface MsgUpdateRateLimitAmino {
  /** Authority defines the x/gov module account */
  authority?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channel_id?: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_send?: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_recv?: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  duration_hours?: string;
}
export interface MsgUpdateRateLimitAminoMsg {
  type: 'ratelimit/MsgUpdateRateLimit';
  value: MsgUpdateRateLimitAmino;
}
/** Gov tx to update an existing rate limit */
export interface MsgUpdateRateLimitSDKType {
  authority: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
export interface MsgUpdateRateLimitResponse {}
export interface MsgUpdateRateLimitResponseProtoMsg {
  typeUrl: '/ratelimit.v1.MsgUpdateRateLimitResponse';
  value: Uint8Array;
}
export interface MsgUpdateRateLimitResponseAmino {}
export interface MsgUpdateRateLimitResponseAminoMsg {
  type: '/ratelimit.v1.MsgUpdateRateLimitResponse';
  value: MsgUpdateRateLimitResponseAmino;
}
export interface MsgUpdateRateLimitResponseSDKType {}
/** Gov tx to remove a rate limit */
export interface MsgRemoveRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelId: string;
}
export interface MsgRemoveRateLimitProtoMsg {
  typeUrl: '/ratelimit.v1.MsgRemoveRateLimit';
  value: Uint8Array;
}
/** Gov tx to remove a rate limit */
export interface MsgRemoveRateLimitAmino {
  /** Authority defines the x/gov module account */
  authority?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channel_id?: string;
}
export interface MsgRemoveRateLimitAminoMsg {
  type: 'ratelimit/MsgRemoveRateLimit';
  value: MsgRemoveRateLimitAmino;
}
/** Gov tx to remove a rate limit */
export interface MsgRemoveRateLimitSDKType {
  authority: string;
  denom: string;
  channel_id: string;
}
export interface MsgRemoveRateLimitResponse {}
export interface MsgRemoveRateLimitResponseProtoMsg {
  typeUrl: '/ratelimit.v1.MsgRemoveRateLimitResponse';
  value: Uint8Array;
}
export interface MsgRemoveRateLimitResponseAmino {}
export interface MsgRemoveRateLimitResponseAminoMsg {
  type: '/ratelimit.v1.MsgRemoveRateLimitResponse';
  value: MsgRemoveRateLimitResponseAmino;
}
export interface MsgRemoveRateLimitResponseSDKType {}
/** Gov tx to reset the flow on a rate limit */
export interface MsgResetRateLimit {
  /** Authority defines the x/gov module account */
  authority: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelId: string;
}
export interface MsgResetRateLimitProtoMsg {
  typeUrl: '/ratelimit.v1.MsgResetRateLimit';
  value: Uint8Array;
}
/** Gov tx to reset the flow on a rate limit */
export interface MsgResetRateLimitAmino {
  /** Authority defines the x/gov module account */
  authority?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channel_id?: string;
}
export interface MsgResetRateLimitAminoMsg {
  type: 'ratelimit/MsgResetRateLimit';
  value: MsgResetRateLimitAmino;
}
/** Gov tx to reset the flow on a rate limit */
export interface MsgResetRateLimitSDKType {
  authority: string;
  denom: string;
  channel_id: string;
}
export interface MsgResetRateLimitResponse {}
export interface MsgResetRateLimitResponseProtoMsg {
  typeUrl: '/ratelimit.v1.MsgResetRateLimitResponse';
  value: Uint8Array;
}
export interface MsgResetRateLimitResponseAmino {}
export interface MsgResetRateLimitResponseAminoMsg {
  type: '/ratelimit.v1.MsgResetRateLimitResponse';
  value: MsgResetRateLimitResponseAmino;
}
export interface MsgResetRateLimitResponseSDKType {}
function createBaseMsgAddRateLimit(): MsgAddRateLimit {
  return {
    authority: '',
    denom: '',
    channelId: '',
    maxPercentSend: '',
    maxPercentRecv: '',
    durationHours: BigInt(0),
  };
}
export const MsgAddRateLimit = {
  typeUrl: '/ratelimit.v1.MsgAddRateLimit',
  encode(
    message: MsgAddRateLimit,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelId !== '') {
      writer.uint32(26).string(message.channelId);
    }
    if (message.maxPercentSend !== '') {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== '') {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(48).uint64(message.durationHours);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddRateLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        case 6:
          message.durationHours = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddRateLimit>): MsgAddRateLimit {
    const message = createBaseMsgAddRateLimit();
    message.authority = object.authority ?? '';
    message.denom = object.denom ?? '';
    message.channelId = object.channelId ?? '';
    message.maxPercentSend = object.maxPercentSend ?? '';
    message.maxPercentRecv = object.maxPercentRecv ?? '';
    message.durationHours =
      object.durationHours !== undefined && object.durationHours !== null
        ? BigInt(object.durationHours.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddRateLimitAmino): MsgAddRateLimit {
    const message = createBaseMsgAddRateLimit();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (
      object.max_percent_send !== undefined &&
      object.max_percent_send !== null
    ) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (
      object.max_percent_recv !== undefined &&
      object.max_percent_recv !== null
    ) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    return message;
  },
  toAmino(message: MsgAddRateLimit): MsgAddRateLimitAmino {
    const obj: any = {};
    obj.authority = message.authority === '' ? undefined : message.authority;
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.channel_id = message.channelId === '' ? undefined : message.channelId;
    obj.max_percent_send =
      message.maxPercentSend === '' ? undefined : message.maxPercentSend;
    obj.max_percent_recv =
      message.maxPercentRecv === '' ? undefined : message.maxPercentRecv;
    obj.duration_hours =
      message.durationHours !== BigInt(0)
        ? message.durationHours?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddRateLimitAminoMsg): MsgAddRateLimit {
    return MsgAddRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddRateLimit): MsgAddRateLimitAminoMsg {
    return {
      type: 'ratelimit/MsgAddRateLimit',
      value: MsgAddRateLimit.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgAddRateLimitProtoMsg): MsgAddRateLimit {
    return MsgAddRateLimit.decode(message.value);
  },
  toProto(message: MsgAddRateLimit): Uint8Array {
    return MsgAddRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRateLimit): MsgAddRateLimitProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgAddRateLimit',
      value: MsgAddRateLimit.encode(message).finish(),
    };
  },
};
function createBaseMsgAddRateLimitResponse(): MsgAddRateLimitResponse {
  return {};
}
export const MsgAddRateLimitResponse = {
  typeUrl: '/ratelimit.v1.MsgAddRateLimitResponse',
  encode(
    _: MsgAddRateLimitResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgAddRateLimitResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRateLimitResponse();
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
  fromPartial(_: Partial<MsgAddRateLimitResponse>): MsgAddRateLimitResponse {
    const message = createBaseMsgAddRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgAddRateLimitResponseAmino): MsgAddRateLimitResponse {
    const message = createBaseMsgAddRateLimitResponse();
    return message;
  },
  toAmino(_: MsgAddRateLimitResponse): MsgAddRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgAddRateLimitResponseAminoMsg
  ): MsgAddRateLimitResponse {
    return MsgAddRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAddRateLimitResponseProtoMsg
  ): MsgAddRateLimitResponse {
    return MsgAddRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgAddRateLimitResponse): Uint8Array {
    return MsgAddRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAddRateLimitResponse
  ): MsgAddRateLimitResponseProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgAddRateLimitResponse',
      value: MsgAddRateLimitResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateRateLimit(): MsgUpdateRateLimit {
  return {
    authority: '',
    denom: '',
    channelId: '',
    maxPercentSend: '',
    maxPercentRecv: '',
    durationHours: BigInt(0),
  };
}
export const MsgUpdateRateLimit = {
  typeUrl: '/ratelimit.v1.MsgUpdateRateLimit',
  encode(
    message: MsgUpdateRateLimit,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelId !== '') {
      writer.uint32(26).string(message.channelId);
    }
    if (message.maxPercentSend !== '') {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== '') {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(48).uint64(message.durationHours);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgUpdateRateLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        case 6:
          message.durationHours = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateRateLimit>): MsgUpdateRateLimit {
    const message = createBaseMsgUpdateRateLimit();
    message.authority = object.authority ?? '';
    message.denom = object.denom ?? '';
    message.channelId = object.channelId ?? '';
    message.maxPercentSend = object.maxPercentSend ?? '';
    message.maxPercentRecv = object.maxPercentRecv ?? '';
    message.durationHours =
      object.durationHours !== undefined && object.durationHours !== null
        ? BigInt(object.durationHours.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateRateLimitAmino): MsgUpdateRateLimit {
    const message = createBaseMsgUpdateRateLimit();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (
      object.max_percent_send !== undefined &&
      object.max_percent_send !== null
    ) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (
      object.max_percent_recv !== undefined &&
      object.max_percent_recv !== null
    ) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    return message;
  },
  toAmino(message: MsgUpdateRateLimit): MsgUpdateRateLimitAmino {
    const obj: any = {};
    obj.authority = message.authority === '' ? undefined : message.authority;
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.channel_id = message.channelId === '' ? undefined : message.channelId;
    obj.max_percent_send =
      message.maxPercentSend === '' ? undefined : message.maxPercentSend;
    obj.max_percent_recv =
      message.maxPercentRecv === '' ? undefined : message.maxPercentRecv;
    obj.duration_hours =
      message.durationHours !== BigInt(0)
        ? message.durationHours?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRateLimitAminoMsg): MsgUpdateRateLimit {
    return MsgUpdateRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRateLimit): MsgUpdateRateLimitAminoMsg {
    return {
      type: 'ratelimit/MsgUpdateRateLimit',
      value: MsgUpdateRateLimit.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateRateLimitProtoMsg): MsgUpdateRateLimit {
    return MsgUpdateRateLimit.decode(message.value);
  },
  toProto(message: MsgUpdateRateLimit): Uint8Array {
    return MsgUpdateRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRateLimit): MsgUpdateRateLimitProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgUpdateRateLimit',
      value: MsgUpdateRateLimit.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateRateLimitResponse(): MsgUpdateRateLimitResponse {
  return {};
}
export const MsgUpdateRateLimitResponse = {
  typeUrl: '/ratelimit.v1.MsgUpdateRateLimitResponse',
  encode(
    _: MsgUpdateRateLimitResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgUpdateRateLimitResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRateLimitResponse();
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
  fromPartial(
    _: Partial<MsgUpdateRateLimitResponse>
  ): MsgUpdateRateLimitResponse {
    const message = createBaseMsgUpdateRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRateLimitResponseAmino): MsgUpdateRateLimitResponse {
    const message = createBaseMsgUpdateRateLimitResponse();
    return message;
  },
  toAmino(_: MsgUpdateRateLimitResponse): MsgUpdateRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUpdateRateLimitResponseAminoMsg
  ): MsgUpdateRateLimitResponse {
    return MsgUpdateRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUpdateRateLimitResponseProtoMsg
  ): MsgUpdateRateLimitResponse {
    return MsgUpdateRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRateLimitResponse): Uint8Array {
    return MsgUpdateRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUpdateRateLimitResponse
  ): MsgUpdateRateLimitResponseProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgUpdateRateLimitResponse',
      value: MsgUpdateRateLimitResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveRateLimit(): MsgRemoveRateLimit {
  return {
    authority: '',
    denom: '',
    channelId: '',
  };
}
export const MsgRemoveRateLimit = {
  typeUrl: '/ratelimit.v1.MsgRemoveRateLimit',
  encode(
    message: MsgRemoveRateLimit,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelId !== '') {
      writer.uint32(26).string(message.channelId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgRemoveRateLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveRateLimit>): MsgRemoveRateLimit {
    const message = createBaseMsgRemoveRateLimit();
    message.authority = object.authority ?? '';
    message.denom = object.denom ?? '';
    message.channelId = object.channelId ?? '';
    return message;
  },
  fromAmino(object: MsgRemoveRateLimitAmino): MsgRemoveRateLimit {
    const message = createBaseMsgRemoveRateLimit();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: MsgRemoveRateLimit): MsgRemoveRateLimitAmino {
    const obj: any = {};
    obj.authority = message.authority === '' ? undefined : message.authority;
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.channel_id = message.channelId === '' ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRateLimitAminoMsg): MsgRemoveRateLimit {
    return MsgRemoveRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveRateLimit): MsgRemoveRateLimitAminoMsg {
    return {
      type: 'ratelimit/MsgRemoveRateLimit',
      value: MsgRemoveRateLimit.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRemoveRateLimitProtoMsg): MsgRemoveRateLimit {
    return MsgRemoveRateLimit.decode(message.value);
  },
  toProto(message: MsgRemoveRateLimit): Uint8Array {
    return MsgRemoveRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRateLimit): MsgRemoveRateLimitProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgRemoveRateLimit',
      value: MsgRemoveRateLimit.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveRateLimitResponse(): MsgRemoveRateLimitResponse {
  return {};
}
export const MsgRemoveRateLimitResponse = {
  typeUrl: '/ratelimit.v1.MsgRemoveRateLimitResponse',
  encode(
    _: MsgRemoveRateLimitResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgRemoveRateLimitResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRateLimitResponse();
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
  fromPartial(
    _: Partial<MsgRemoveRateLimitResponse>
  ): MsgRemoveRateLimitResponse {
    const message = createBaseMsgRemoveRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgRemoveRateLimitResponseAmino): MsgRemoveRateLimitResponse {
    const message = createBaseMsgRemoveRateLimitResponse();
    return message;
  },
  toAmino(_: MsgRemoveRateLimitResponse): MsgRemoveRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRemoveRateLimitResponseAminoMsg
  ): MsgRemoveRateLimitResponse {
    return MsgRemoveRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemoveRateLimitResponseProtoMsg
  ): MsgRemoveRateLimitResponse {
    return MsgRemoveRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgRemoveRateLimitResponse): Uint8Array {
    return MsgRemoveRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemoveRateLimitResponse
  ): MsgRemoveRateLimitResponseProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgRemoveRateLimitResponse',
      value: MsgRemoveRateLimitResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgResetRateLimit(): MsgResetRateLimit {
  return {
    authority: '',
    denom: '',
    channelId: '',
  };
}
export const MsgResetRateLimit = {
  typeUrl: '/ratelimit.v1.MsgResetRateLimit',
  encode(
    message: MsgResetRateLimit,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelId !== '') {
      writer.uint32(26).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetRateLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgResetRateLimit>): MsgResetRateLimit {
    const message = createBaseMsgResetRateLimit();
    message.authority = object.authority ?? '';
    message.denom = object.denom ?? '';
    message.channelId = object.channelId ?? '';
    return message;
  },
  fromAmino(object: MsgResetRateLimitAmino): MsgResetRateLimit {
    const message = createBaseMsgResetRateLimit();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: MsgResetRateLimit): MsgResetRateLimitAmino {
    const obj: any = {};
    obj.authority = message.authority === '' ? undefined : message.authority;
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.channel_id = message.channelId === '' ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: MsgResetRateLimitAminoMsg): MsgResetRateLimit {
    return MsgResetRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetRateLimit): MsgResetRateLimitAminoMsg {
    return {
      type: 'ratelimit/MsgResetRateLimit',
      value: MsgResetRateLimit.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgResetRateLimitProtoMsg): MsgResetRateLimit {
    return MsgResetRateLimit.decode(message.value);
  },
  toProto(message: MsgResetRateLimit): Uint8Array {
    return MsgResetRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgResetRateLimit): MsgResetRateLimitProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgResetRateLimit',
      value: MsgResetRateLimit.encode(message).finish(),
    };
  },
};
function createBaseMsgResetRateLimitResponse(): MsgResetRateLimitResponse {
  return {};
}
export const MsgResetRateLimitResponse = {
  typeUrl: '/ratelimit.v1.MsgResetRateLimitResponse',
  encode(
    _: MsgResetRateLimitResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgResetRateLimitResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetRateLimitResponse();
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
  fromPartial(
    _: Partial<MsgResetRateLimitResponse>
  ): MsgResetRateLimitResponse {
    const message = createBaseMsgResetRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgResetRateLimitResponseAmino): MsgResetRateLimitResponse {
    const message = createBaseMsgResetRateLimitResponse();
    return message;
  },
  toAmino(_: MsgResetRateLimitResponse): MsgResetRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgResetRateLimitResponseAminoMsg
  ): MsgResetRateLimitResponse {
    return MsgResetRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgResetRateLimitResponseProtoMsg
  ): MsgResetRateLimitResponse {
    return MsgResetRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgResetRateLimitResponse): Uint8Array {
    return MsgResetRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgResetRateLimitResponse
  ): MsgResetRateLimitResponseProtoMsg {
    return {
      typeUrl: '/ratelimit.v1.MsgResetRateLimitResponse',
      value: MsgResetRateLimitResponse.encode(message).finish(),
    };
  },
};
