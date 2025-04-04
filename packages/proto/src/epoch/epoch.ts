//@ts-nocheck
import { Timestamp } from "../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../binary";
import { toTimestamp, fromTimestamp } from "../helpers";
export interface Epoch {
  genesisTime: Date;
  epochDuration: Duration;
  currentEpoch: bigint;
  currentEpochStartTime: Date;
  currentEpochHeight: bigint;
}
export interface EpochProtoMsg {
  typeUrl: "/kiichain.kiichain3.epoch.Epoch";
  value: Uint8Array;
}
export interface EpochAmino {
  genesis_time?: string;
  epoch_duration?: DurationAmino;
  current_epoch: string;
  current_epoch_start_time?: string;
  current_epoch_height: string;
}
export interface EpochAminoMsg {
  type: "/kiichain.kiichain3.epoch.Epoch";
  value: EpochAmino;
}
export interface EpochSDKType {
  genesis_time: Date;
  epoch_duration: DurationSDKType;
  current_epoch: bigint;
  current_epoch_start_time: Date;
  current_epoch_height: bigint;
}
function createBaseEpoch(): Epoch {
  return {
    genesisTime: new Date(),
    epochDuration: Duration.fromPartial({}),
    currentEpoch: BigInt(0),
    currentEpochStartTime: new Date(),
    currentEpochHeight: BigInt(0)
  };
}
export const Epoch = {
  typeUrl: "/kiichain.kiichain3.epoch.Epoch",
  encode(message: Epoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisTime !== undefined) {
      Timestamp.encode(toTimestamp(message.genesisTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.epochDuration !== undefined) {
      Duration.encode(message.epochDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.currentEpochHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.currentEpochHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Epoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.epochDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentEpoch = reader.uint64();
          break;
        case 4:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.currentEpochHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Epoch>): Epoch {
    const message = createBaseEpoch();
    message.genesisTime = object.genesisTime ?? undefined;
    message.epochDuration = object.epochDuration !== undefined && object.epochDuration !== null ? Duration.fromPartial(object.epochDuration) : undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.currentEpochHeight = object.currentEpochHeight !== undefined && object.currentEpochHeight !== null ? BigInt(object.currentEpochHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochAmino): Epoch {
    const message = createBaseEpoch();
    if (object.genesis_time !== undefined && object.genesis_time !== null) {
      message.genesisTime = fromTimestamp(Timestamp.fromAmino(object.genesis_time));
    }
    if (object.epoch_duration !== undefined && object.epoch_duration !== null) {
      message.epochDuration = Duration.fromAmino(object.epoch_duration);
    }
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    if (object.current_epoch_start_time !== undefined && object.current_epoch_start_time !== null) {
      message.currentEpochStartTime = fromTimestamp(Timestamp.fromAmino(object.current_epoch_start_time));
    }
    if (object.current_epoch_height !== undefined && object.current_epoch_height !== null) {
      message.currentEpochHeight = BigInt(object.current_epoch_height);
    }
    return message;
  },
  toAmino(message: Epoch): EpochAmino {
    const obj: any = {};
    obj.genesis_time = message.genesisTime ? Timestamp.toAmino(toTimestamp(message.genesisTime)) : undefined;
    obj.epoch_duration = message.epochDuration ? Duration.toAmino(message.epochDuration) : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch?.toString() : "0";
    obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toAmino(toTimestamp(message.currentEpochStartTime)) : undefined;
    obj.current_epoch_height = message.currentEpochHeight ? message.currentEpochHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EpochAminoMsg): Epoch {
    return Epoch.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochProtoMsg): Epoch {
    return Epoch.decode(message.value);
  },
  toProto(message: Epoch): Uint8Array {
    return Epoch.encode(message).finish();
  },
  toProtoMsg(message: Epoch): EpochProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.epoch.Epoch",
      value: Epoch.encode(message).finish()
    };
  }
};