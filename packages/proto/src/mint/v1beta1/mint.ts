//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Minter represents the most recent */
export interface Minter {
  /** yyyy-mm-dd */
  startDate: string;
  /** yyyy-mm-dd */
  endDate: string;
  denom: string;
  totalMintAmount: bigint;
  remainingMintAmount: bigint;
  lastMintAmount: bigint;
  lastMintDate: string;
  /** yyyy-mm-dd */
  lastMintHeight: bigint;
}
export interface MinterProtoMsg {
  typeUrl: "/kiichain.kiichain3.mint.Minter";
  value: Uint8Array;
}
/** Minter represents the most recent */
export interface MinterAmino {
  /** yyyy-mm-dd */
  start_date?: string;
  /** yyyy-mm-dd */
  end_date?: string;
  denom?: string;
  total_mint_amount?: string;
  remaining_mint_amount?: string;
  last_mint_amount?: string;
  last_mint_date?: string;
  /** yyyy-mm-dd */
  last_mint_height?: string;
}
export interface MinterAminoMsg {
  type: "/kiichain.kiichain3.mint.Minter";
  value: MinterAmino;
}
/** Minter represents the most recent */
export interface MinterSDKType {
  start_date: string;
  end_date: string;
  denom: string;
  total_mint_amount: bigint;
  remaining_mint_amount: bigint;
  last_mint_amount: bigint;
  last_mint_date: string;
  last_mint_height: bigint;
}
export interface ScheduledTokenRelease {
  /** yyyy-mm-dd */
  startDate: string;
  /** yyyy-mm-dd */
  endDate: string;
  tokenReleaseAmount: bigint;
}
export interface ScheduledTokenReleaseProtoMsg {
  typeUrl: "/kiichain.kiichain3.mint.ScheduledTokenRelease";
  value: Uint8Array;
}
export interface ScheduledTokenReleaseAmino {
  /** yyyy-mm-dd */
  start_date?: string;
  /** yyyy-mm-dd */
  end_date?: string;
  token_release_amount?: string;
}
export interface ScheduledTokenReleaseAminoMsg {
  type: "/kiichain.kiichain3.mint.ScheduledTokenRelease";
  value: ScheduledTokenReleaseAmino;
}
export interface ScheduledTokenReleaseSDKType {
  start_date: string;
  end_date: string;
  token_release_amount: bigint;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** List of token release schedules */
  tokenReleaseSchedule: ScheduledTokenRelease[];
  /** Max yearly inflation rate */
  inflationMax: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kiichain.kiichain3.mint.Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom?: string;
  /** List of token release schedules */
  token_release_schedule?: ScheduledTokenReleaseAmino[];
  /** Max yearly inflation rate */
  inflation_max?: string;
}
export interface ParamsAminoMsg {
  type: "/kiichain.kiichain3.mint.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  token_release_schedule: ScheduledTokenReleaseSDKType[];
  inflation_max: string;
}
/** Minter represents the most recent */
export interface Version2Minter {
  lastMintAmount: string;
  lastMintDate: string;
  lastMintHeight: bigint;
  denom: string;
}
export interface Version2MinterProtoMsg {
  typeUrl: "/kiichain.kiichain3.mint.Version2Minter";
  value: Uint8Array;
}
/** Minter represents the most recent */
export interface Version2MinterAmino {
  last_mint_amount?: string;
  last_mint_date?: string;
  last_mint_height?: string;
  denom?: string;
}
export interface Version2MinterAminoMsg {
  type: "/kiichain.kiichain3.mint.Version2Minter";
  value: Version2MinterAmino;
}
/** Minter represents the most recent */
export interface Version2MinterSDKType {
  last_mint_amount: string;
  last_mint_date: string;
  last_mint_height: bigint;
  denom: string;
}
export interface Version2ScheduledTokenRelease {
  /** yyyy-mm-dd */
  date: string;
  tokenReleaseAmount: bigint;
}
export interface Version2ScheduledTokenReleaseProtoMsg {
  typeUrl: "/kiichain.kiichain3.mint.Version2ScheduledTokenRelease";
  value: Uint8Array;
}
export interface Version2ScheduledTokenReleaseAmino {
  /** yyyy-mm-dd */
  date?: string;
  token_release_amount?: string;
}
export interface Version2ScheduledTokenReleaseAminoMsg {
  type: "/kiichain.kiichain3.mint.Version2ScheduledTokenRelease";
  value: Version2ScheduledTokenReleaseAmino;
}
export interface Version2ScheduledTokenReleaseSDKType {
  date: string;
  token_release_amount: bigint;
}
/** Params holds parameters for the mint module. */
export interface Version2Params {
  /** type of coin to mint */
  mintDenom: string;
  /** List of token release schedules */
  tokenReleaseSchedule: Version2ScheduledTokenRelease[];
}
export interface Version2ParamsProtoMsg {
  typeUrl: "/kiichain.kiichain3.mint.Version2Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface Version2ParamsAmino {
  /** type of coin to mint */
  mint_denom?: string;
  /** List of token release schedules */
  token_release_schedule?: Version2ScheduledTokenReleaseAmino[];
}
export interface Version2ParamsAminoMsg {
  type: "/kiichain.kiichain3.mint.Version2Params";
  value: Version2ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface Version2ParamsSDKType {
  mint_denom: string;
  token_release_schedule: Version2ScheduledTokenReleaseSDKType[];
}
function createBaseMinter(): Minter {
  return {
    startDate: "",
    endDate: "",
    denom: "",
    totalMintAmount: BigInt(0),
    remainingMintAmount: BigInt(0),
    lastMintAmount: BigInt(0),
    lastMintDate: "",
    lastMintHeight: BigInt(0)
  };
}
export const Minter = {
  typeUrl: "/kiichain.kiichain3.mint.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.totalMintAmount !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalMintAmount);
    }
    if (message.remainingMintAmount !== BigInt(0)) {
      writer.uint32(40).uint64(message.remainingMintAmount);
    }
    if (message.lastMintAmount !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastMintAmount);
    }
    if (message.lastMintDate !== "") {
      writer.uint32(58).string(message.lastMintDate);
    }
    if (message.lastMintHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.lastMintHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.totalMintAmount = reader.uint64();
          break;
        case 5:
          message.remainingMintAmount = reader.uint64();
          break;
        case 6:
          message.lastMintAmount = reader.uint64();
          break;
        case 7:
          message.lastMintDate = reader.string();
          break;
        case 8:
          message.lastMintHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.denom = object.denom ?? "";
    message.totalMintAmount = object.totalMintAmount !== undefined && object.totalMintAmount !== null ? BigInt(object.totalMintAmount.toString()) : BigInt(0);
    message.remainingMintAmount = object.remainingMintAmount !== undefined && object.remainingMintAmount !== null ? BigInt(object.remainingMintAmount.toString()) : BigInt(0);
    message.lastMintAmount = object.lastMintAmount !== undefined && object.lastMintAmount !== null ? BigInt(object.lastMintAmount.toString()) : BigInt(0);
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? BigInt(object.lastMintHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = object.start_date;
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = object.end_date;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.total_mint_amount !== undefined && object.total_mint_amount !== null) {
      message.totalMintAmount = BigInt(object.total_mint_amount);
    }
    if (object.remaining_mint_amount !== undefined && object.remaining_mint_amount !== null) {
      message.remainingMintAmount = BigInt(object.remaining_mint_amount);
    }
    if (object.last_mint_amount !== undefined && object.last_mint_amount !== null) {
      message.lastMintAmount = BigInt(object.last_mint_amount);
    }
    if (object.last_mint_date !== undefined && object.last_mint_date !== null) {
      message.lastMintDate = object.last_mint_date;
    }
    if (object.last_mint_height !== undefined && object.last_mint_height !== null) {
      message.lastMintHeight = BigInt(object.last_mint_height);
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.start_date = message.startDate === "" ? undefined : message.startDate;
    obj.end_date = message.endDate === "" ? undefined : message.endDate;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.total_mint_amount = message.totalMintAmount !== BigInt(0) ? message.totalMintAmount?.toString() : undefined;
    obj.remaining_mint_amount = message.remainingMintAmount !== BigInt(0) ? message.remainingMintAmount?.toString() : undefined;
    obj.last_mint_amount = message.lastMintAmount !== BigInt(0) ? message.lastMintAmount?.toString() : undefined;
    obj.last_mint_date = message.lastMintDate === "" ? undefined : message.lastMintDate;
    obj.last_mint_height = message.lastMintHeight !== BigInt(0) ? message.lastMintHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.mint.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseScheduledTokenRelease(): ScheduledTokenRelease {
  return {
    startDate: "",
    endDate: "",
    tokenReleaseAmount: BigInt(0)
  };
}
export const ScheduledTokenRelease = {
  typeUrl: "/kiichain.kiichain3.mint.ScheduledTokenRelease",
  encode(message: ScheduledTokenRelease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    if (message.tokenReleaseAmount !== BigInt(0)) {
      writer.uint32(24).uint64(message.tokenReleaseAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ScheduledTokenRelease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledTokenRelease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        case 3:
          message.tokenReleaseAmount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ScheduledTokenRelease>): ScheduledTokenRelease {
    const message = createBaseScheduledTokenRelease();
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? BigInt(object.tokenReleaseAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ScheduledTokenReleaseAmino): ScheduledTokenRelease {
    const message = createBaseScheduledTokenRelease();
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = object.start_date;
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = object.end_date;
    }
    if (object.token_release_amount !== undefined && object.token_release_amount !== null) {
      message.tokenReleaseAmount = BigInt(object.token_release_amount);
    }
    return message;
  },
  toAmino(message: ScheduledTokenRelease): ScheduledTokenReleaseAmino {
    const obj: any = {};
    obj.start_date = message.startDate === "" ? undefined : message.startDate;
    obj.end_date = message.endDate === "" ? undefined : message.endDate;
    obj.token_release_amount = message.tokenReleaseAmount !== BigInt(0) ? message.tokenReleaseAmount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ScheduledTokenReleaseAminoMsg): ScheduledTokenRelease {
    return ScheduledTokenRelease.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledTokenReleaseProtoMsg): ScheduledTokenRelease {
    return ScheduledTokenRelease.decode(message.value);
  },
  toProto(message: ScheduledTokenRelease): Uint8Array {
    return ScheduledTokenRelease.encode(message).finish();
  },
  toProtoMsg(message: ScheduledTokenRelease): ScheduledTokenReleaseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.mint.ScheduledTokenRelease",
      value: ScheduledTokenRelease.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    tokenReleaseSchedule: [],
    inflationMax: ""
  };
}
export const Params = {
  typeUrl: "/kiichain.kiichain3.mint.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    for (const v of message.tokenReleaseSchedule) {
      ScheduledTokenRelease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.tokenReleaseSchedule.push(ScheduledTokenRelease.decode(reader, reader.uint32()));
          break;
        case 3:
          message.inflationMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => ScheduledTokenRelease.fromPartial(e)) || [];
    message.inflationMax = object.inflationMax ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    message.tokenReleaseSchedule = object.token_release_schedule?.map(e => ScheduledTokenRelease.fromAmino(e)) || [];
    if (object.inflation_max !== undefined && object.inflation_max !== null) {
      message.inflationMax = object.inflation_max;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    if (message.tokenReleaseSchedule) {
      obj.token_release_schedule = message.tokenReleaseSchedule.map(e => e ? ScheduledTokenRelease.toAmino(e) : undefined);
    } else {
      obj.token_release_schedule = message.tokenReleaseSchedule;
    }
    obj.inflation_max = message.inflationMax === "" ? undefined : message.inflationMax;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.mint.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseVersion2Minter(): Version2Minter {
  return {
    lastMintAmount: "",
    lastMintDate: "",
    lastMintHeight: BigInt(0),
    denom: ""
  };
}
export const Version2Minter = {
  typeUrl: "/kiichain.kiichain3.mint.Version2Minter",
  encode(message: Version2Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastMintAmount !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.lastMintAmount, 18).atomics);
    }
    if (message.lastMintDate !== "") {
      writer.uint32(18).string(message.lastMintDate);
    }
    if (message.lastMintHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.lastMintHeight);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Version2Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion2Minter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastMintAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lastMintDate = reader.string();
          break;
        case 3:
          message.lastMintHeight = reader.int64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Version2Minter>): Version2Minter {
    const message = createBaseVersion2Minter();
    message.lastMintAmount = object.lastMintAmount ?? "";
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? BigInt(object.lastMintHeight.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: Version2MinterAmino): Version2Minter {
    const message = createBaseVersion2Minter();
    if (object.last_mint_amount !== undefined && object.last_mint_amount !== null) {
      message.lastMintAmount = object.last_mint_amount;
    }
    if (object.last_mint_date !== undefined && object.last_mint_date !== null) {
      message.lastMintDate = object.last_mint_date;
    }
    if (object.last_mint_height !== undefined && object.last_mint_height !== null) {
      message.lastMintHeight = BigInt(object.last_mint_height);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: Version2Minter): Version2MinterAmino {
    const obj: any = {};
    obj.last_mint_amount = message.lastMintAmount === "" ? undefined : message.lastMintAmount;
    obj.last_mint_date = message.lastMintDate === "" ? undefined : message.lastMintDate;
    obj.last_mint_height = message.lastMintHeight !== BigInt(0) ? message.lastMintHeight?.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: Version2MinterAminoMsg): Version2Minter {
    return Version2Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: Version2MinterProtoMsg): Version2Minter {
    return Version2Minter.decode(message.value);
  },
  toProto(message: Version2Minter): Uint8Array {
    return Version2Minter.encode(message).finish();
  },
  toProtoMsg(message: Version2Minter): Version2MinterProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.mint.Version2Minter",
      value: Version2Minter.encode(message).finish()
    };
  }
};
function createBaseVersion2ScheduledTokenRelease(): Version2ScheduledTokenRelease {
  return {
    date: "",
    tokenReleaseAmount: BigInt(0)
  };
}
export const Version2ScheduledTokenRelease = {
  typeUrl: "/kiichain.kiichain3.mint.Version2ScheduledTokenRelease",
  encode(message: Version2ScheduledTokenRelease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.date !== "") {
      writer.uint32(10).string(message.date);
    }
    if (message.tokenReleaseAmount !== BigInt(0)) {
      writer.uint32(16).int64(message.tokenReleaseAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Version2ScheduledTokenRelease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion2ScheduledTokenRelease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = reader.string();
          break;
        case 2:
          message.tokenReleaseAmount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Version2ScheduledTokenRelease>): Version2ScheduledTokenRelease {
    const message = createBaseVersion2ScheduledTokenRelease();
    message.date = object.date ?? "";
    message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? BigInt(object.tokenReleaseAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: Version2ScheduledTokenReleaseAmino): Version2ScheduledTokenRelease {
    const message = createBaseVersion2ScheduledTokenRelease();
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    }
    if (object.token_release_amount !== undefined && object.token_release_amount !== null) {
      message.tokenReleaseAmount = BigInt(object.token_release_amount);
    }
    return message;
  },
  toAmino(message: Version2ScheduledTokenRelease): Version2ScheduledTokenReleaseAmino {
    const obj: any = {};
    obj.date = message.date === "" ? undefined : message.date;
    obj.token_release_amount = message.tokenReleaseAmount !== BigInt(0) ? message.tokenReleaseAmount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: Version2ScheduledTokenReleaseAminoMsg): Version2ScheduledTokenRelease {
    return Version2ScheduledTokenRelease.fromAmino(object.value);
  },
  fromProtoMsg(message: Version2ScheduledTokenReleaseProtoMsg): Version2ScheduledTokenRelease {
    return Version2ScheduledTokenRelease.decode(message.value);
  },
  toProto(message: Version2ScheduledTokenRelease): Uint8Array {
    return Version2ScheduledTokenRelease.encode(message).finish();
  },
  toProtoMsg(message: Version2ScheduledTokenRelease): Version2ScheduledTokenReleaseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.mint.Version2ScheduledTokenRelease",
      value: Version2ScheduledTokenRelease.encode(message).finish()
    };
  }
};
function createBaseVersion2Params(): Version2Params {
  return {
    mintDenom: "",
    tokenReleaseSchedule: []
  };
}
export const Version2Params = {
  typeUrl: "/kiichain.kiichain3.mint.Version2Params",
  encode(message: Version2Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    for (const v of message.tokenReleaseSchedule) {
      Version2ScheduledTokenRelease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Version2Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion2Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.tokenReleaseSchedule.push(Version2ScheduledTokenRelease.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Version2Params>): Version2Params {
    const message = createBaseVersion2Params();
    message.mintDenom = object.mintDenom ?? "";
    message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => Version2ScheduledTokenRelease.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: Version2ParamsAmino): Version2Params {
    const message = createBaseVersion2Params();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    message.tokenReleaseSchedule = object.token_release_schedule?.map(e => Version2ScheduledTokenRelease.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Version2Params): Version2ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    if (message.tokenReleaseSchedule) {
      obj.token_release_schedule = message.tokenReleaseSchedule.map(e => e ? Version2ScheduledTokenRelease.toAmino(e) : undefined);
    } else {
      obj.token_release_schedule = message.tokenReleaseSchedule;
    }
    return obj;
  },
  fromAminoMsg(object: Version2ParamsAminoMsg): Version2Params {
    return Version2Params.fromAmino(object.value);
  },
  fromProtoMsg(message: Version2ParamsProtoMsg): Version2Params {
    return Version2Params.decode(message.value);
  },
  toProto(message: Version2Params): Uint8Array {
    return Version2Params.encode(message).finish();
  },
  toProtoMsg(message: Version2Params): Version2ParamsProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.mint.Version2Params",
      value: Version2Params.encode(message).finish()
    };
  }
};