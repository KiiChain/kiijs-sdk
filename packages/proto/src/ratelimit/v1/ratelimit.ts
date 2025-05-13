//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
/**
 * PacketDirection defines whether the transfer packet is being sent from
 * this chain or is being received on this chain
 */
export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}
export const PacketDirectionSDKType = PacketDirection;
export const PacketDirectionAmino = PacketDirection;
export function packetDirectionFromJSON(object: any): PacketDirection {
  switch (object) {
    case 0:
    case "PACKET_SEND":
      return PacketDirection.PACKET_SEND;
    case 1:
    case "PACKET_RECV":
      return PacketDirection.PACKET_RECV;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketDirection.UNRECOGNIZED;
  }
}
export function packetDirectionToJSON(object: PacketDirection): string {
  switch (object) {
    case PacketDirection.PACKET_SEND:
      return "PACKET_SEND";
    case PacketDirection.PACKET_RECV:
      return "PACKET_RECV";
    case PacketDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Path holds the denom and channelID that define the rate limited route */
export interface Path {
  denom: string;
  channelId: string;
}
export interface PathProtoMsg {
  typeUrl: "/ratelimit.v1.Path";
  value: Uint8Array;
}
/** Path holds the denom and channelID that define the rate limited route */
export interface PathAmino {
  denom?: string;
  channel_id?: string;
}
export interface PathAminoMsg {
  type: "/ratelimit.v1.Path";
  value: PathAmino;
}
/** Path holds the denom and channelID that define the rate limited route */
export interface PathSDKType {
  denom: string;
  channel_id: string;
}
/** Quota defines the rate limit thresholds for transfer packets */
export interface Quota {
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
export interface QuotaProtoMsg {
  typeUrl: "/ratelimit.v1.Quota";
  value: Uint8Array;
}
/** Quota defines the rate limit thresholds for transfer packets */
export interface QuotaAmino {
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
export interface QuotaAminoMsg {
  type: "/ratelimit.v1.Quota";
  value: QuotaAmino;
}
/** Quota defines the rate limit thresholds for transfer packets */
export interface QuotaSDKType {
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
export interface Flow {
  /**
   * Inflow defines the total amount of inbound transfers for the given
   * rate limit in the current window
   */
  inflow: string;
  /**
   * Outflow defines the total amount of outbound transfers for the given
   * rate limit in the current window
   */
  outflow: string;
  /**
   * ChannelValue stores the total supply of the denom at the start of
   * the rate limit. This is used as the denominator when checking
   * the rate limit threshold
   * The ChannelValue is fixed for the duration of the rate limit window
   */
  channelValue: string;
}
export interface FlowProtoMsg {
  typeUrl: "/ratelimit.v1.Flow";
  value: Uint8Array;
}
export interface FlowAmino {
  /**
   * Inflow defines the total amount of inbound transfers for the given
   * rate limit in the current window
   */
  inflow?: string;
  /**
   * Outflow defines the total amount of outbound transfers for the given
   * rate limit in the current window
   */
  outflow?: string;
  /**
   * ChannelValue stores the total supply of the denom at the start of
   * the rate limit. This is used as the denominator when checking
   * the rate limit threshold
   * The ChannelValue is fixed for the duration of the rate limit window
   */
  channel_value?: string;
}
export interface FlowAminoMsg {
  type: "/ratelimit.v1.Flow";
  value: FlowAmino;
}
export interface FlowSDKType {
  inflow: string;
  outflow: string;
  channel_value: string;
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 */
export interface RateLimit {
  path?: Path;
  quota?: Quota;
  flow?: Flow;
}
export interface RateLimitProtoMsg {
  typeUrl: "/ratelimit.v1.RateLimit";
  value: Uint8Array;
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 */
export interface RateLimitAmino {
  path?: PathAmino;
  quota?: QuotaAmino;
  flow?: FlowAmino;
}
export interface RateLimitAminoMsg {
  type: "/ratelimit.v1.RateLimit";
  value: RateLimitAmino;
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 */
export interface RateLimitSDKType {
  path?: PathSDKType;
  quota?: QuotaSDKType;
  flow?: FlowSDKType;
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 */
export interface WhitelistedAddressPair {
  sender: string;
  receiver: string;
}
export interface WhitelistedAddressPairProtoMsg {
  typeUrl: "/ratelimit.v1.WhitelistedAddressPair";
  value: Uint8Array;
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 */
export interface WhitelistedAddressPairAmino {
  sender?: string;
  receiver?: string;
}
export interface WhitelistedAddressPairAminoMsg {
  type: "/ratelimit.v1.WhitelistedAddressPair";
  value: WhitelistedAddressPairAmino;
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 */
export interface WhitelistedAddressPairSDKType {
  sender: string;
  receiver: string;
}
export interface HourEpoch {
  epochNumber: bigint;
  duration: Duration;
  epochStartTime: Date;
  epochStartHeight: bigint;
}
export interface HourEpochProtoMsg {
  typeUrl: "/ratelimit.v1.HourEpoch";
  value: Uint8Array;
}
export interface HourEpochAmino {
  epoch_number?: string;
  duration?: DurationAmino;
  epoch_start_time?: string;
  epoch_start_height?: string;
}
export interface HourEpochAminoMsg {
  type: "/ratelimit.v1.HourEpoch";
  value: HourEpochAmino;
}
export interface HourEpochSDKType {
  epoch_number: bigint;
  duration: DurationSDKType;
  epoch_start_time: Date;
  epoch_start_height: bigint;
}
function createBasePath(): Path {
  return {
    denom: "",
    channelId: ""
  };
}
export const Path = {
  typeUrl: "/ratelimit.v1.Path",
  encode(message: Path, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Path {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePath();
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
  fromPartial(object: Partial<Path>): Path {
    const message = createBasePath();
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: PathAmino): Path {
    const message = createBasePath();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: Path): PathAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: PathAminoMsg): Path {
    return Path.fromAmino(object.value);
  },
  fromProtoMsg(message: PathProtoMsg): Path {
    return Path.decode(message.value);
  },
  toProto(message: Path): Uint8Array {
    return Path.encode(message).finish();
  },
  toProtoMsg(message: Path): PathProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.Path",
      value: Path.encode(message).finish()
    };
  }
};
function createBaseQuota(): Quota {
  return {
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0)
  };
}
export const Quota = {
  typeUrl: "/ratelimit.v1.Quota",
  encode(message: Quota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(24).uint64(message.durationHours);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Quota {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPercentSend = reader.string();
          break;
        case 2:
          message.maxPercentRecv = reader.string();
          break;
        case 3:
          message.durationHours = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Quota>): Quota {
    const message = createBaseQuota();
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuotaAmino): Quota {
    const message = createBaseQuota();
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    return message;
  },
  toAmino(message: Quota): QuotaAmino {
    const obj: any = {};
    obj.max_percent_send = message.maxPercentSend === "" ? undefined : message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv === "" ? undefined : message.maxPercentRecv;
    obj.duration_hours = message.durationHours !== BigInt(0) ? message.durationHours?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuotaAminoMsg): Quota {
    return Quota.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaProtoMsg): Quota {
    return Quota.decode(message.value);
  },
  toProto(message: Quota): Uint8Array {
    return Quota.encode(message).finish();
  },
  toProtoMsg(message: Quota): QuotaProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.Quota",
      value: Quota.encode(message).finish()
    };
  }
};
function createBaseFlow(): Flow {
  return {
    inflow: "",
    outflow: "",
    channelValue: ""
  };
}
export const Flow = {
  typeUrl: "/ratelimit.v1.Flow",
  encode(message: Flow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflow !== "") {
      writer.uint32(10).string(message.inflow);
    }
    if (message.outflow !== "") {
      writer.uint32(18).string(message.outflow);
    }
    if (message.channelValue !== "") {
      writer.uint32(26).string(message.channelValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Flow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflow = reader.string();
          break;
        case 2:
          message.outflow = reader.string();
          break;
        case 3:
          message.channelValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Flow>): Flow {
    const message = createBaseFlow();
    message.inflow = object.inflow ?? "";
    message.outflow = object.outflow ?? "";
    message.channelValue = object.channelValue ?? "";
    return message;
  },
  fromAmino(object: FlowAmino): Flow {
    const message = createBaseFlow();
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = object.inflow;
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = object.outflow;
    }
    if (object.channel_value !== undefined && object.channel_value !== null) {
      message.channelValue = object.channel_value;
    }
    return message;
  },
  toAmino(message: Flow): FlowAmino {
    const obj: any = {};
    obj.inflow = message.inflow === "" ? undefined : message.inflow;
    obj.outflow = message.outflow === "" ? undefined : message.outflow;
    obj.channel_value = message.channelValue === "" ? undefined : message.channelValue;
    return obj;
  },
  fromAminoMsg(object: FlowAminoMsg): Flow {
    return Flow.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowProtoMsg): Flow {
    return Flow.decode(message.value);
  },
  toProto(message: Flow): Uint8Array {
    return Flow.encode(message).finish();
  },
  toProtoMsg(message: Flow): FlowProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.Flow",
      value: Flow.encode(message).finish()
    };
  }
};
function createBaseRateLimit(): RateLimit {
  return {
    path: undefined,
    quota: undefined,
    flow: undefined
  };
}
export const RateLimit = {
  typeUrl: "/ratelimit.v1.RateLimit",
  encode(message: RateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== undefined) {
      Path.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(18).fork()).ldelim();
    }
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = Path.decode(reader, reader.uint32());
          break;
        case 2:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 3:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.path = object.path !== undefined && object.path !== null ? Path.fromPartial(object.path) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: RateLimitAmino): RateLimit {
    const message = createBaseRateLimit();
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromAmino(object.path);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromAmino(object.quota);
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: RateLimit): RateLimitAmino {
    const obj: any = {};
    obj.path = message.path ? Path.toAmino(message.path) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.flow = message.flow ? Flow.toAmino(message.flow) : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitAminoMsg): RateLimit {
    return RateLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: RateLimitProtoMsg): RateLimit {
    return RateLimit.decode(message.value);
  },
  toProto(message: RateLimit): Uint8Array {
    return RateLimit.encode(message).finish();
  },
  toProtoMsg(message: RateLimit): RateLimitProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.RateLimit",
      value: RateLimit.encode(message).finish()
    };
  }
};
function createBaseWhitelistedAddressPair(): WhitelistedAddressPair {
  return {
    sender: "",
    receiver: ""
  };
}
export const WhitelistedAddressPair = {
  typeUrl: "/ratelimit.v1.WhitelistedAddressPair",
  encode(message: WhitelistedAddressPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistedAddressPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedAddressPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistedAddressPair>): WhitelistedAddressPair {
    const message = createBaseWhitelistedAddressPair();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: WhitelistedAddressPairAmino): WhitelistedAddressPair {
    const message = createBaseWhitelistedAddressPair();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: WhitelistedAddressPair): WhitelistedAddressPairAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: WhitelistedAddressPairAminoMsg): WhitelistedAddressPair {
    return WhitelistedAddressPair.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistedAddressPairProtoMsg): WhitelistedAddressPair {
    return WhitelistedAddressPair.decode(message.value);
  },
  toProto(message: WhitelistedAddressPair): Uint8Array {
    return WhitelistedAddressPair.encode(message).finish();
  },
  toProtoMsg(message: WhitelistedAddressPair): WhitelistedAddressPairProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.WhitelistedAddressPair",
      value: WhitelistedAddressPair.encode(message).finish()
    };
  }
};
function createBaseHourEpoch(): HourEpoch {
  return {
    epochNumber: BigInt(0),
    duration: Duration.fromPartial({}),
    epochStartTime: new Date(),
    epochStartHeight: BigInt(0)
  };
}
export const HourEpoch = {
  typeUrl: "/ratelimit.v1.HourEpoch",
  encode(message: HourEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.epochStartTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.epochStartHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.epochStartHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HourEpoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHourEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.epochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.epochStartHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HourEpoch>): HourEpoch {
    const message = createBaseHourEpoch();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.epochStartTime = object.epochStartTime ?? undefined;
    message.epochStartHeight = object.epochStartHeight !== undefined && object.epochStartHeight !== null ? BigInt(object.epochStartHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HourEpochAmino): HourEpoch {
    const message = createBaseHourEpoch();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.epoch_start_time !== undefined && object.epoch_start_time !== null) {
      message.epochStartTime = fromTimestamp(Timestamp.fromAmino(object.epoch_start_time));
    }
    if (object.epoch_start_height !== undefined && object.epoch_start_height !== null) {
      message.epochStartHeight = BigInt(object.epoch_start_height);
    }
    return message;
  },
  toAmino(message: HourEpoch): HourEpochAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.epoch_start_time = message.epochStartTime ? Timestamp.toAmino(toTimestamp(message.epochStartTime)) : undefined;
    obj.epoch_start_height = message.epochStartHeight !== BigInt(0) ? message.epochStartHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HourEpochAminoMsg): HourEpoch {
    return HourEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: HourEpochProtoMsg): HourEpoch {
    return HourEpoch.decode(message.value);
  },
  toProto(message: HourEpoch): Uint8Array {
    return HourEpoch.encode(message).finish();
  },
  toProtoMsg(message: HourEpoch): HourEpochProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.HourEpoch",
      value: HourEpoch.encode(message).finish()
    };
  }
};