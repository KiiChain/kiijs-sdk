//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { Any, AnyAmino, AnySDKType } from '../../../../google/protobuf/any';
import { base64FromBytes, bytesFromBase64 } from '../../../../helpers';
import {
  Event,
  EventAmino,
  EventSDKType,
} from '../../../../tendermint/abci/types';
import {
  Block,
  BlockAmino,
  BlockSDKType,
} from '../../../../tendermint/types/block';
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
  /** The block height */
  height: bigint;
  /** The transaction hash. */
  txhash: string;
  /** Namespace for the Code */
  codespace: string;
  /** Response code. */
  code: number;
  /** Result bytes, if any. */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  rawLog: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs: ABCIMessageLog[];
  /** Additional information. May be non-deterministic. */
  info: string;
  /** Amount of gas requested for transaction. */
  gasWanted: bigint;
  /** Amount of gas consumed by transaction. */
  gasUsed: bigint;
  /** The request transaction bytes. */
  tx?: Any;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events: Event[];
}
export interface TxResponseProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.TxResponse';
  value: Uint8Array;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseAmino {
  /** The block height */
  height?: string;
  /** The transaction hash. */
  txhash?: string;
  /** Namespace for the Code */
  codespace?: string;
  /** Response code. */
  code?: number;
  /** Result bytes, if any. */
  data?: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  raw_log?: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs?: ABCIMessageLogAmino[];
  /** Additional information. May be non-deterministic. */
  info?: string;
  /** Amount of gas requested for transaction. */
  gas_wanted?: string;
  /** Amount of gas consumed by transaction. */
  gas_used?: string;
  /** The request transaction bytes. */
  tx?: AnyAmino;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp?: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events?: EventAmino[];
}
export interface TxResponseAminoMsg {
  type: 'cosmos-sdk/TxResponse';
  value: TxResponseAmino;
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponseSDKType {
  height: bigint;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: ABCIMessageLogSDKType[];
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  tx?: AnySDKType;
  timestamp: string;
  events: EventSDKType[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
  msgIndex: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEvent[];
}
export interface ABCIMessageLogProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.ABCIMessageLog';
  value: Uint8Array;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogAmino {
  msg_index: number;
  log?: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events?: StringEventAmino[];
}
export interface ABCIMessageLogAminoMsg {
  type: 'cosmos-sdk/ABCIMessageLog';
  value: ABCIMessageLogAmino;
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLogSDKType {
  msg_index: number;
  log: string;
  events: StringEventSDKType[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
  type: string;
  attributes: Attribute[];
}
export interface StringEventProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.StringEvent';
  value: Uint8Array;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventAmino {
  type?: string;
  attributes?: AttributeAmino[];
}
export interface StringEventAminoMsg {
  type: 'cosmos-sdk/StringEvent';
  value: StringEventAmino;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEventSDKType {
  type: string;
  attributes: AttributeSDKType[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
  key: string;
  value: string;
}
export interface AttributeProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.Attribute';
  value: Uint8Array;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeAmino {
  key?: string;
  value?: string;
}
export interface AttributeAminoMsg {
  type: 'cosmos-sdk/Attribute';
  value: AttributeAmino;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface AttributeSDKType {
  key: string;
  value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gasWanted: bigint;
  /** GasUsed is the amount of gas actually consumed. */
  gasUsed: bigint;
}
export interface GasInfoProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.GasInfo';
  value: Uint8Array;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoAmino {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gas_wanted?: string;
  /** GasUsed is the amount of gas actually consumed. */
  gas_used?: string;
}
export interface GasInfoAminoMsg {
  type: 'cosmos-sdk/GasInfo';
  value: GasInfoAmino;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfoSDKType {
  gas_wanted: bigint;
  gas_used: bigint;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */
  /** @deprecated */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}
export interface ResultProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.Result';
  value: Uint8Array;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultAmino {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */
  /** @deprecated */
  data?: string;
  /** Log contains the log information from message or handler execution. */
  log?: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events?: EventAmino[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msg_responses?: AnyAmino[];
}
export interface ResultAminoMsg {
  type: 'cosmos-sdk/Result';
  value: ResultAmino;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface ResultSDKType {
  /** @deprecated */
  data: Uint8Array;
  log: string;
  events: EventSDKType[];
  msg_responses: AnySDKType[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
  gasInfo: GasInfo;
  result?: Result;
}
export interface SimulationResponseProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.SimulationResponse';
  value: Uint8Array;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseAmino {
  gas_info?: GasInfoAmino;
  result?: ResultAmino;
}
export interface SimulationResponseAminoMsg {
  type: 'cosmos-sdk/SimulationResponse';
  value: SimulationResponseAmino;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponseSDKType {
  gas_info: GasInfoSDKType;
  result?: ResultSDKType;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgData {
  msgType: string;
  data: Uint8Array;
}
export interface MsgDataProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.MsgData';
  value: Uint8Array;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgDataAmino {
  msg_type?: string;
  data?: string;
}
export interface MsgDataAminoMsg {
  type: 'cosmos-sdk/MsgData';
  value: MsgDataAmino;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
export interface MsgDataSDKType {
  msg_type: string;
  data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  /** data field is deprecated and not populated. */
  /** @deprecated */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}
export interface TxMsgDataProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.TxMsgData';
  value: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataAmino {
  /** data field is deprecated and not populated. */
  /** @deprecated */
  data?: MsgDataAmino[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msg_responses?: AnyAmino[];
}
export interface TxMsgDataAminoMsg {
  type: 'cosmos-sdk/TxMsgData';
  value: TxMsgDataAmino;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgDataSDKType {
  /** @deprecated */
  data: MsgDataSDKType[];
  msg_responses: AnySDKType[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
  /** Count of all txs */
  totalCount: bigint;
  /** Count of txs in current page */
  count: bigint;
  /** Index of current page, start from 1 */
  pageNumber: bigint;
  /** Count of total pages */
  pageTotal: bigint;
  /** Max count txs per page */
  limit: bigint;
  /** List of txs in current page */
  txs: TxResponse[];
}
export interface SearchTxsResultProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.SearchTxsResult';
  value: Uint8Array;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultAmino {
  /** Count of all txs */
  total_count?: string;
  /** Count of txs in current page */
  count?: string;
  /** Index of current page, start from 1 */
  page_number?: string;
  /** Count of total pages */
  page_total?: string;
  /** Max count txs per page */
  limit?: string;
  /** List of txs in current page */
  txs?: TxResponseAmino[];
}
export interface SearchTxsResultAminoMsg {
  type: 'cosmos-sdk/SearchTxsResult';
  value: SearchTxsResultAmino;
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResultSDKType {
  total_count: bigint;
  count: bigint;
  page_number: bigint;
  page_total: bigint;
  limit: bigint;
  txs: TxResponseSDKType[];
}
/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResult {
  /** Count of all blocks */
  totalCount: bigint;
  /** Count of blocks in current page */
  count: bigint;
  /** Index of current page, start from 1 */
  pageNumber: bigint;
  /** Count of total pages */
  pageTotal: bigint;
  /** Max count blocks per page */
  limit: bigint;
  /** List of blocks in current page */
  blocks: Block[];
}
export interface SearchBlocksResultProtoMsg {
  typeUrl: '/cosmos.base.abci.v1beta1.SearchBlocksResult';
  value: Uint8Array;
}
/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResultAmino {
  /** Count of all blocks */
  total_count?: string;
  /** Count of blocks in current page */
  count?: string;
  /** Index of current page, start from 1 */
  page_number?: string;
  /** Count of total pages */
  page_total?: string;
  /** Max count blocks per page */
  limit?: string;
  /** List of blocks in current page */
  blocks?: BlockAmino[];
}
export interface SearchBlocksResultAminoMsg {
  type: 'cosmos-sdk/SearchBlocksResult';
  value: SearchBlocksResultAmino;
}
/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResultSDKType {
  total_count: bigint;
  count: bigint;
  page_number: bigint;
  page_total: bigint;
  limit: bigint;
  blocks: BlockSDKType[];
}
function createBaseTxResponse(): TxResponse {
  return {
    height: BigInt(0),
    txhash: '',
    codespace: '',
    code: 0,
    data: '',
    rawLog: '',
    logs: [],
    info: '',
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    tx: undefined,
    timestamp: '',
    events: [],
  };
}
export const TxResponse = {
  typeUrl: '/cosmos.base.abci.v1beta1.TxResponse',
  encode(
    message: TxResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== '') {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== '') {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== '') {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== '') {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== '') {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== '') {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64();
          break;
        case 10:
          message.gasUsed = reader.int64();
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TxResponse>): TxResponse {
    const message = createBaseTxResponse();
    message.height =
      object.height !== undefined && object.height !== null
        ? BigInt(object.height.toString())
        : BigInt(0);
    message.txhash = object.txhash ?? '';
    message.codespace = object.codespace ?? '';
    message.code = object.code ?? 0;
    message.data = object.data ?? '';
    message.rawLog = object.rawLog ?? '';
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? '';
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? BigInt(object.gasWanted.toString())
        : BigInt(0);
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? BigInt(object.gasUsed.toString())
        : BigInt(0);
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Any.fromPartial(object.tx)
        : undefined;
    message.timestamp = object.timestamp ?? '';
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TxResponseAmino): TxResponse {
    const message = createBaseTxResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash;
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.raw_log !== undefined && object.raw_log !== null) {
      message.rawLog = object.raw_log;
    }
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Any.fromAmino(object.tx);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxResponse): TxResponseAmino {
    const obj: any = {};
    obj.height =
      message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.txhash = message.txhash === '' ? undefined : message.txhash;
    obj.codespace = message.codespace === '' ? undefined : message.codespace;
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data === '' ? undefined : message.data;
    obj.raw_log = message.rawLog === '' ? undefined : message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map((e) =>
        e ? ABCIMessageLog.toAmino(e) : undefined
      );
    } else {
      obj.logs = message.logs;
    }
    obj.info = message.info === '' ? undefined : message.info;
    obj.gas_wanted =
      message.gasWanted !== BigInt(0)
        ? message.gasWanted?.toString()
        : undefined;
    obj.gas_used =
      message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    obj.tx = message.tx ? Any.toAmino(message.tx) : undefined;
    obj.timestamp = message.timestamp === '' ? undefined : message.timestamp;
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? Event.toAmino(e) : undefined
      );
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object: TxResponseAminoMsg): TxResponse {
    return TxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxResponse): TxResponseAminoMsg {
    return {
      type: 'cosmos-sdk/TxResponse',
      value: TxResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: TxResponseProtoMsg): TxResponse {
    return TxResponse.decode(message.value);
  },
  toProto(message: TxResponse): Uint8Array {
    return TxResponse.encode(message).finish();
  },
  toProtoMsg(message: TxResponse): TxResponseProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.TxResponse',
      value: TxResponse.encode(message).finish(),
    };
  },
};
function createBaseABCIMessageLog(): ABCIMessageLog {
  return {
    msgIndex: 0,
    log: '',
    events: [],
  };
}
export const ABCIMessageLog = {
  typeUrl: '/cosmos.base.abci.v1beta1.ABCIMessageLog',
  encode(
    message: ABCIMessageLog,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== '') {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ABCIMessageLog {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ABCIMessageLog>): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? '';
    message.events =
      object.events?.map((e) => StringEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ABCIMessageLogAmino): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msgIndex = object.msg_index;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    message.events = object.events?.map((e) => StringEvent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ABCIMessageLog): ABCIMessageLogAmino {
    const obj: any = {};
    obj.msg_index = message.msgIndex ?? 0;
    obj.log = message.log === '' ? undefined : message.log;
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? StringEvent.toAmino(e) : undefined
      );
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object: ABCIMessageLogAminoMsg): ABCIMessageLog {
    return ABCIMessageLog.fromAmino(object.value);
  },
  toAminoMsg(message: ABCIMessageLog): ABCIMessageLogAminoMsg {
    return {
      type: 'cosmos-sdk/ABCIMessageLog',
      value: ABCIMessageLog.toAmino(message),
    };
  },
  fromProtoMsg(message: ABCIMessageLogProtoMsg): ABCIMessageLog {
    return ABCIMessageLog.decode(message.value);
  },
  toProto(message: ABCIMessageLog): Uint8Array {
    return ABCIMessageLog.encode(message).finish();
  },
  toProtoMsg(message: ABCIMessageLog): ABCIMessageLogProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.ABCIMessageLog',
      value: ABCIMessageLog.encode(message).finish(),
    };
  },
};
function createBaseStringEvent(): StringEvent {
  return {
    type: '',
    attributes: [],
  };
}
export const StringEvent = {
  typeUrl: '/cosmos.base.abci.v1beta1.StringEvent',
  encode(
    message: StringEvent,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.type !== '') {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StringEvent>): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? '';
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StringEventAmino): StringEvent {
    const message = createBaseStringEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes =
      object.attributes?.map((e) => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: StringEvent): StringEventAmino {
    const obj: any = {};
    obj.type = message.type === '' ? undefined : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toAmino(e) : undefined
      );
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: StringEventAminoMsg): StringEvent {
    return StringEvent.fromAmino(object.value);
  },
  toAminoMsg(message: StringEvent): StringEventAminoMsg {
    return {
      type: 'cosmos-sdk/StringEvent',
      value: StringEvent.toAmino(message),
    };
  },
  fromProtoMsg(message: StringEventProtoMsg): StringEvent {
    return StringEvent.decode(message.value);
  },
  toProto(message: StringEvent): Uint8Array {
    return StringEvent.encode(message).finish();
  },
  toProtoMsg(message: StringEvent): StringEventProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.StringEvent',
      value: StringEvent.encode(message).finish(),
    };
  },
};
function createBaseAttribute(): Attribute {
  return {
    key: '',
    value: '',
  };
}
export const Attribute = {
  typeUrl: '/cosmos.base.abci.v1beta1.Attribute',
  encode(
    message: Attribute,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Attribute {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: AttributeAmino): Attribute {
    const message = createBaseAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Attribute): AttributeAmino {
    const obj: any = {};
    obj.key = message.key === '' ? undefined : message.key;
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeAminoMsg): Attribute {
    return Attribute.fromAmino(object.value);
  },
  toAminoMsg(message: Attribute): AttributeAminoMsg {
    return {
      type: 'cosmos-sdk/Attribute',
      value: Attribute.toAmino(message),
    };
  },
  fromProtoMsg(message: AttributeProtoMsg): Attribute {
    return Attribute.decode(message.value);
  },
  toProto(message: Attribute): Uint8Array {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message: Attribute): AttributeProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.Attribute',
      value: Attribute.encode(message).finish(),
    };
  },
};
function createBaseGasInfo(): GasInfo {
  return {
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
  };
}
export const GasInfo = {
  typeUrl: '/cosmos.base.abci.v1beta1.GasInfo',
  encode(
    message: GasInfo,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasInfo {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64();
          break;
        case 2:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GasInfo>): GasInfo {
    const message = createBaseGasInfo();
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? BigInt(object.gasWanted.toString())
        : BigInt(0);
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? BigInt(object.gasUsed.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: GasInfoAmino): GasInfo {
    const message = createBaseGasInfo();
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message: GasInfo): GasInfoAmino {
    const obj: any = {};
    obj.gas_wanted =
      message.gasWanted !== BigInt(0)
        ? message.gasWanted?.toString()
        : undefined;
    obj.gas_used =
      message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasInfoAminoMsg): GasInfo {
    return GasInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GasInfo): GasInfoAminoMsg {
    return {
      type: 'cosmos-sdk/GasInfo',
      value: GasInfo.toAmino(message),
    };
  },
  fromProtoMsg(message: GasInfoProtoMsg): GasInfo {
    return GasInfo.decode(message.value);
  },
  toProto(message: GasInfo): Uint8Array {
    return GasInfo.encode(message).finish();
  },
  toProtoMsg(message: GasInfo): GasInfoProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.GasInfo',
      value: GasInfo.encode(message).finish(),
    };
  },
};
function createBaseResult(): Result {
  return {
    data: new Uint8Array(),
    log: '',
    events: [],
    msgResponses: [],
  };
}
export const Result = {
  typeUrl: '/cosmos.base.abci.v1beta1.Result',
  encode(
    message: Result,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== '') {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Result {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Result>): Result {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? '';
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.msgResponses =
      object.msgResponses?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResultAmino): Result {
    const message = createBaseResult();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    message.events = object.events?.map((e) => Event.fromAmino(e)) || [];
    message.msgResponses =
      object.msg_responses?.map((e) => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Result): ResultAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === '' ? undefined : message.log;
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? Event.toAmino(e) : undefined
      );
    } else {
      obj.events = message.events;
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map((e) =>
        e ? Any.toAmino(e) : undefined
      );
    } else {
      obj.msg_responses = message.msgResponses;
    }
    return obj;
  },
  fromAminoMsg(object: ResultAminoMsg): Result {
    return Result.fromAmino(object.value);
  },
  toAminoMsg(message: Result): ResultAminoMsg {
    return {
      type: 'cosmos-sdk/Result',
      value: Result.toAmino(message),
    };
  },
  fromProtoMsg(message: ResultProtoMsg): Result {
    return Result.decode(message.value);
  },
  toProto(message: Result): Uint8Array {
    return Result.encode(message).finish();
  },
  toProtoMsg(message: Result): ResultProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.Result',
      value: Result.encode(message).finish(),
    };
  },
};
function createBaseSimulationResponse(): SimulationResponse {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: undefined,
  };
}
export const SimulationResponse = {
  typeUrl: '/cosmos.base.abci.v1beta1.SimulationResponse',
  encode(
    message: SimulationResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): SimulationResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SimulationResponse>): SimulationResponse {
    const message = createBaseSimulationResponse();
    message.gasInfo =
      object.gasInfo !== undefined && object.gasInfo !== null
        ? GasInfo.fromPartial(object.gasInfo)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromPartial(object.result)
        : undefined;
    return message;
  },
  fromAmino(object: SimulationResponseAmino): SimulationResponse {
    const message = createBaseSimulationResponse();
    if (object.gas_info !== undefined && object.gas_info !== null) {
      message.gasInfo = GasInfo.fromAmino(object.gas_info);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: SimulationResponse): SimulationResponseAmino {
    const obj: any = {};
    obj.gas_info = message.gasInfo
      ? GasInfo.toAmino(message.gasInfo)
      : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulationResponseAminoMsg): SimulationResponse {
    return SimulationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SimulationResponse): SimulationResponseAminoMsg {
    return {
      type: 'cosmos-sdk/SimulationResponse',
      value: SimulationResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: SimulationResponseProtoMsg): SimulationResponse {
    return SimulationResponse.decode(message.value);
  },
  toProto(message: SimulationResponse): Uint8Array {
    return SimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulationResponse): SimulationResponseProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.SimulationResponse',
      value: SimulationResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgData(): MsgData {
  return {
    msgType: '',
    data: new Uint8Array(),
  };
}
export const MsgData = {
  typeUrl: '/cosmos.base.abci.v1beta1.MsgData',
  encode(
    message: MsgData,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.msgType !== '') {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgData>): MsgData {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? '';
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDataAmino): MsgData {
    const message = createBaseMsgData();
    if (object.msg_type !== undefined && object.msg_type !== null) {
      message.msgType = object.msg_type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgData): MsgDataAmino {
    const obj: any = {};
    obj.msg_type = message.msgType === '' ? undefined : message.msgType;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDataAminoMsg): MsgData {
    return MsgData.fromAmino(object.value);
  },
  toAminoMsg(message: MsgData): MsgDataAminoMsg {
    return {
      type: 'cosmos-sdk/MsgData',
      value: MsgData.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgDataProtoMsg): MsgData {
    return MsgData.decode(message.value);
  },
  toProto(message: MsgData): Uint8Array {
    return MsgData.encode(message).finish();
  },
  toProtoMsg(message: MsgData): MsgDataProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.MsgData',
      value: MsgData.encode(message).finish(),
    };
  },
};
function createBaseTxMsgData(): TxMsgData {
  return {
    data: [],
    msgResponses: [],
  };
}
export const TxMsgData = {
  typeUrl: '/cosmos.base.abci.v1beta1.TxMsgData',
  encode(
    message: TxMsgData,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxMsgData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TxMsgData>): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
    message.msgResponses =
      object.msgResponses?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TxMsgDataAmino): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromAmino(e)) || [];
    message.msgResponses =
      object.msg_responses?.map((e) => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxMsgData): TxMsgDataAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? MsgData.toAmino(e) : undefined));
    } else {
      obj.data = message.data;
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map((e) =>
        e ? Any.toAmino(e) : undefined
      );
    } else {
      obj.msg_responses = message.msgResponses;
    }
    return obj;
  },
  fromAminoMsg(object: TxMsgDataAminoMsg): TxMsgData {
    return TxMsgData.fromAmino(object.value);
  },
  toAminoMsg(message: TxMsgData): TxMsgDataAminoMsg {
    return {
      type: 'cosmos-sdk/TxMsgData',
      value: TxMsgData.toAmino(message),
    };
  },
  fromProtoMsg(message: TxMsgDataProtoMsg): TxMsgData {
    return TxMsgData.decode(message.value);
  },
  toProto(message: TxMsgData): Uint8Array {
    return TxMsgData.encode(message).finish();
  },
  toProtoMsg(message: TxMsgData): TxMsgDataProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.TxMsgData',
      value: TxMsgData.encode(message).finish(),
    };
  },
};
function createBaseSearchTxsResult(): SearchTxsResult {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    txs: [],
  };
}
export const SearchTxsResult = {
  typeUrl: '/cosmos.base.abci.v1beta1.SearchTxsResult',
  encode(
    message: SearchTxsResult,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SearchTxsResult {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.pageNumber = reader.uint64();
          break;
        case 4:
          message.pageTotal = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SearchTxsResult>): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? BigInt(object.totalCount.toString())
        : BigInt(0);
    message.count =
      object.count !== undefined && object.count !== null
        ? BigInt(object.count.toString())
        : BigInt(0);
    message.pageNumber =
      object.pageNumber !== undefined && object.pageNumber !== null
        ? BigInt(object.pageNumber.toString())
        : BigInt(0);
    message.pageTotal =
      object.pageTotal !== undefined && object.pageTotal !== null
        ? BigInt(object.pageTotal.toString())
        : BigInt(0);
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? BigInt(object.limit.toString())
        : BigInt(0);
    message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SearchTxsResultAmino): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.page_number !== undefined && object.page_number !== null) {
      message.pageNumber = BigInt(object.page_number);
    }
    if (object.page_total !== undefined && object.page_total !== null) {
      message.pageTotal = BigInt(object.page_total);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    message.txs = object.txs?.map((e) => TxResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SearchTxsResult): SearchTxsResultAmino {
    const obj: any = {};
    obj.total_count =
      message.totalCount !== BigInt(0)
        ? message.totalCount?.toString()
        : undefined;
    obj.count =
      message.count !== BigInt(0) ? message.count?.toString() : undefined;
    obj.page_number =
      message.pageNumber !== BigInt(0)
        ? message.pageNumber?.toString()
        : undefined;
    obj.page_total =
      message.pageTotal !== BigInt(0)
        ? message.pageTotal?.toString()
        : undefined;
    obj.limit =
      message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map((e) => (e ? TxResponse.toAmino(e) : undefined));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: SearchTxsResultAminoMsg): SearchTxsResult {
    return SearchTxsResult.fromAmino(object.value);
  },
  toAminoMsg(message: SearchTxsResult): SearchTxsResultAminoMsg {
    return {
      type: 'cosmos-sdk/SearchTxsResult',
      value: SearchTxsResult.toAmino(message),
    };
  },
  fromProtoMsg(message: SearchTxsResultProtoMsg): SearchTxsResult {
    return SearchTxsResult.decode(message.value);
  },
  toProto(message: SearchTxsResult): Uint8Array {
    return SearchTxsResult.encode(message).finish();
  },
  toProtoMsg(message: SearchTxsResult): SearchTxsResultProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.SearchTxsResult',
      value: SearchTxsResult.encode(message).finish(),
    };
  },
};
function createBaseSearchBlocksResult(): SearchBlocksResult {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    blocks: [],
  };
}
export const SearchBlocksResult = {
  typeUrl: '/cosmos.base.abci.v1beta1.SearchBlocksResult',
  encode(
    message: SearchBlocksResult,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).int64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).int64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).int64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).int64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).int64(message.limit);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): SearchBlocksResult {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchBlocksResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.int64();
          break;
        case 2:
          message.count = reader.int64();
          break;
        case 3:
          message.pageNumber = reader.int64();
          break;
        case 4:
          message.pageTotal = reader.int64();
          break;
        case 5:
          message.limit = reader.int64();
          break;
        case 6:
          message.blocks.push(Block.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SearchBlocksResult>): SearchBlocksResult {
    const message = createBaseSearchBlocksResult();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? BigInt(object.totalCount.toString())
        : BigInt(0);
    message.count =
      object.count !== undefined && object.count !== null
        ? BigInt(object.count.toString())
        : BigInt(0);
    message.pageNumber =
      object.pageNumber !== undefined && object.pageNumber !== null
        ? BigInt(object.pageNumber.toString())
        : BigInt(0);
    message.pageTotal =
      object.pageTotal !== undefined && object.pageTotal !== null
        ? BigInt(object.pageTotal.toString())
        : BigInt(0);
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? BigInt(object.limit.toString())
        : BigInt(0);
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SearchBlocksResultAmino): SearchBlocksResult {
    const message = createBaseSearchBlocksResult();
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.page_number !== undefined && object.page_number !== null) {
      message.pageNumber = BigInt(object.page_number);
    }
    if (object.page_total !== undefined && object.page_total !== null) {
      message.pageTotal = BigInt(object.page_total);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    message.blocks = object.blocks?.map((e) => Block.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SearchBlocksResult): SearchBlocksResultAmino {
    const obj: any = {};
    obj.total_count =
      message.totalCount !== BigInt(0)
        ? message.totalCount?.toString()
        : undefined;
    obj.count =
      message.count !== BigInt(0) ? message.count?.toString() : undefined;
    obj.page_number =
      message.pageNumber !== BigInt(0)
        ? message.pageNumber?.toString()
        : undefined;
    obj.page_total =
      message.pageTotal !== BigInt(0)
        ? message.pageTotal?.toString()
        : undefined;
    obj.limit =
      message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? Block.toAmino(e) : undefined
      );
    } else {
      obj.blocks = message.blocks;
    }
    return obj;
  },
  fromAminoMsg(object: SearchBlocksResultAminoMsg): SearchBlocksResult {
    return SearchBlocksResult.fromAmino(object.value);
  },
  toAminoMsg(message: SearchBlocksResult): SearchBlocksResultAminoMsg {
    return {
      type: 'cosmos-sdk/SearchBlocksResult',
      value: SearchBlocksResult.toAmino(message),
    };
  },
  fromProtoMsg(message: SearchBlocksResultProtoMsg): SearchBlocksResult {
    return SearchBlocksResult.decode(message.value);
  },
  toProto(message: SearchBlocksResult): Uint8Array {
    return SearchBlocksResult.encode(message).finish();
  },
  toProtoMsg(message: SearchBlocksResult): SearchBlocksResultProtoMsg {
    return {
      typeUrl: '/cosmos.base.abci.v1beta1.SearchBlocksResult',
      value: SearchBlocksResult.encode(message).finish(),
    };
  },
};
