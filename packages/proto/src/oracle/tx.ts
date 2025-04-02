//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../binary";
/**
 * MsgAggregateExchangeRateVote represent the message to submit
 * an aggregate exchange rate vote
 */
export interface MsgAggregateExchangeRateVote {
  exchangeRates: string;
  feeder: string;
  validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote";
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represent the message to submit
 * an aggregate exchange rate vote
 */
export interface MsgAggregateExchangeRateVoteAmino {
  exchange_rates?: string;
  feeder?: string;
  validator?: string;
}
export interface MsgAggregateExchangeRateVoteAminoMsg {
  type: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote";
  value: MsgAggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote represent the message to submit
 * an aggregate exchange rate vote
 */
export interface MsgAggregateExchangeRateVoteSDKType {
  exchange_rates: string;
  feeder: string;
  validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the MsgAggregateExchangeRateVote response */
export interface MsgAggregateExchangeRateVoteResponse {}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVoteResponse";
  value: Uint8Array;
}
/** MsgAggregateExchangeRateVoteResponse defines the MsgAggregateExchangeRateVote response */
export interface MsgAggregateExchangeRateVoteResponseAmino {}
export interface MsgAggregateExchangeRateVoteResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVoteResponse";
  value: MsgAggregateExchangeRateVoteResponseAmino;
}
/** MsgAggregateExchangeRateVoteResponse defines the MsgAggregateExchangeRateVote response */
export interface MsgAggregateExchangeRateVoteResponseSDKType {}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting
 * rights to another address
 */
export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent";
  value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting
 * rights to another address
 */
export interface MsgDelegateFeedConsentAmino {
  operator?: string;
  delegate?: string;
}
export interface MsgDelegateFeedConsentAminoMsg {
  type: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent";
  value: MsgDelegateFeedConsentAmino;
}
/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting
 * rights to another address
 */
export interface MsgDelegateFeedConsentSDKType {
  operator: string;
  delegate: string;
}
/** MsgDelegateFeedConsent defines the Msg MsgDelegateFeedConsent response type */
export interface MsgDelegateFeedConsentResponse {}
export interface MsgDelegateFeedConsentResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsentResponse";
  value: Uint8Array;
}
/** MsgDelegateFeedConsent defines the Msg MsgDelegateFeedConsent response type */
export interface MsgDelegateFeedConsentResponseAmino {}
export interface MsgDelegateFeedConsentResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsentResponse";
  value: MsgDelegateFeedConsentResponseAmino;
}
/** MsgDelegateFeedConsent defines the Msg MsgDelegateFeedConsent response type */
export interface MsgDelegateFeedConsentResponseSDKType {}
function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return {
    exchangeRates: "",
    feeder: "",
    validator: ""
  };
}
export const MsgAggregateExchangeRateVote = {
  typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote",
  encode(message: MsgAggregateExchangeRateVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRates !== "") {
      writer.uint32(10).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    message.exchangeRates = object.exchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: MsgAggregateExchangeRateVoteAmino): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
      message.exchangeRates = object.exchange_rates;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAmino {
    const obj: any = {};
    obj.exchange_rates = message.exchangeRates === "" ? undefined : message.exchangeRates;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: MsgAggregateExchangeRateVoteAminoMsg): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAggregateExchangeRateVoteProtoMsg): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVote): Uint8Array {
    return MsgAggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote",
      value: MsgAggregateExchangeRateVote.encode(message).finish()
    };
  }
};
function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVoteResponse",
  encode(_: MsgAggregateExchangeRateVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
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
  fromPartial(_: Partial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  fromAmino(_: MsgAggregateExchangeRateVoteResponseAmino): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  toAmino(_: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAggregateExchangeRateVoteResponseAminoMsg): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAggregateExchangeRateVoteResponseProtoMsg): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array {
    return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAggregateExchangeRateVoteResponse): MsgAggregateExchangeRateVoteResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVoteResponse",
      value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return {
    operator: "",
    delegate: ""
  };
}
export const MsgDelegateFeedConsent = {
  typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent",
  encode(message: MsgDelegateFeedConsent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
  fromAmino(object: MsgDelegateFeedConsentAmino): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    }
    return message;
  },
  toAmino(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.delegate = message.delegate === "" ? undefined : message.delegate;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateFeedConsentAminoMsg): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateFeedConsentProtoMsg): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsent): Uint8Array {
    return MsgDelegateFeedConsent.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent",
      value: MsgDelegateFeedConsent.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}
export const MsgDelegateFeedConsentResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsentResponse",
  encode(_: MsgDelegateFeedConsentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();
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
  fromPartial(_: Partial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  fromAmino(_: MsgDelegateFeedConsentResponseAmino): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  toAmino(_: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateFeedConsentResponseAminoMsg): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateFeedConsentResponseProtoMsg): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsentResponse): Uint8Array {
    return MsgDelegateFeedConsentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsentResponse): MsgDelegateFeedConsentResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsentResponse",
      value: MsgDelegateFeedConsentResponse.encode(message).finish()
    };
  }
};