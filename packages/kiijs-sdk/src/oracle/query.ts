//@ts-nocheck
import { OracleExchangeRate, OracleExchangeRateAmino, OracleExchangeRateSDKType, PriceSnapshot, PriceSnapshotAmino, PriceSnapshotSDKType, OracleTwap, OracleTwapAmino, OracleTwapSDKType, VotePenaltyCounter, VotePenaltyCounterAmino, VotePenaltyCounterSDKType, Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../binary";
/** QueryExchangeRateRequest is the request for the Query/ExchangeRate rpc method */
export interface QueryExchangeRateRequest {
  /** denom defines the exchange rate denom to search */
  denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRateRequest";
  value: Uint8Array;
}
/** QueryExchangeRateRequest is the request for the Query/ExchangeRate rpc method */
export interface QueryExchangeRateRequestAmino {
  /** denom defines the exchange rate denom to search */
  denom?: string;
}
export interface QueryExchangeRateRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryExchangeRateRequest";
  value: QueryExchangeRateRequestAmino;
}
/** QueryExchangeRateRequest is the request for the Query/ExchangeRate rpc method */
export interface QueryExchangeRateRequestSDKType {
  denom: string;
}
/** QueryExchangeRateResponse is the response for the Query/ExchangeRate rpc method */
export interface QueryExchangeRateResponse {
  oracleExchangeRate?: OracleExchangeRate;
}
export interface QueryExchangeRateResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRateResponse";
  value: Uint8Array;
}
/** QueryExchangeRateResponse is the response for the Query/ExchangeRate rpc method */
export interface QueryExchangeRateResponseAmino {
  oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface QueryExchangeRateResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryExchangeRateResponse";
  value: QueryExchangeRateResponseAmino;
}
/** QueryExchangeRateResponse is the response for the Query/ExchangeRate rpc method */
export interface QueryExchangeRateResponseSDKType {
  oracle_exchange_rate?: OracleExchangeRateSDKType;
}
/** QueryExchangeRatesRequest is the response for the Query/ExchangeRates rpc method */
export interface QueryExchangeRatesRequest {}
export interface QueryExchangeRatesRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRatesRequest";
  value: Uint8Array;
}
/** QueryExchangeRatesRequest is the response for the Query/ExchangeRates rpc method */
export interface QueryExchangeRatesRequestAmino {}
export interface QueryExchangeRatesRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryExchangeRatesRequest";
  value: QueryExchangeRatesRequestAmino;
}
/** QueryExchangeRatesRequest is the response for the Query/ExchangeRates rpc method */
export interface QueryExchangeRatesRequestSDKType {}
/**
 * QueryExchangeRatesResponse is the response for the Query/ExchangeRatess rpc method
 * DenomOracleExchangeRatePairs is the alias of the element denom_oracle_exchange_rate after generating the code
 */
export interface QueryExchangeRatesResponse {
  denomOracleExchangeRate: DenomOracleExchangeRate[];
}
export interface QueryExchangeRatesResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is the response for the Query/ExchangeRatess rpc method
 * DenomOracleExchangeRatePairs is the alias of the element denom_oracle_exchange_rate after generating the code
 */
export interface QueryExchangeRatesResponseAmino {
  denom_oracle_exchange_rate?: DenomOracleExchangeRateAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryExchangeRatesResponse";
  value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is the response for the Query/ExchangeRatess rpc method
 * DenomOracleExchangeRatePairs is the alias of the element denom_oracle_exchange_rate after generating the code
 */
export interface QueryExchangeRatesResponseSDKType {
  denom_oracle_exchange_rate: DenomOracleExchangeRateSDKType[];
}
/** QueryActivesResponse is the request for the Query/Actives rpc method */
export interface QueryActivesRequest {}
export interface QueryActivesRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryActivesRequest";
  value: Uint8Array;
}
/** QueryActivesResponse is the request for the Query/Actives rpc method */
export interface QueryActivesRequestAmino {}
export interface QueryActivesRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryActivesRequest";
  value: QueryActivesRequestAmino;
}
/** QueryActivesResponse is the request for the Query/Actives rpc method */
export interface QueryActivesRequestSDKType {}
/** QueryActivesResponse is the response for the Query/Actives rpc method */
export interface QueryActivesResponse {
  actives: string[];
}
export interface QueryActivesResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryActivesResponse";
  value: Uint8Array;
}
/** QueryActivesResponse is the response for the Query/Actives rpc method */
export interface QueryActivesResponseAmino {
  actives?: string[];
}
export interface QueryActivesResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryActivesResponse";
  value: QueryActivesResponseAmino;
}
/** QueryActivesResponse is the response for the Query/Actives rpc method */
export interface QueryActivesResponseSDKType {
  actives: string[];
}
/** DenomOracleExchangeRate is the data type that represents an set of denom - exchange rate values */
export interface DenomOracleExchangeRate {
  denom: string;
  oracleExchangeRate?: OracleExchangeRate;
}
export interface DenomOracleExchangeRateProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.DenomOracleExchangeRate";
  value: Uint8Array;
}
/** DenomOracleExchangeRate is the data type that represents an set of denom - exchange rate values */
export interface DenomOracleExchangeRateAmino {
  denom?: string;
  oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface DenomOracleExchangeRateAminoMsg {
  type: "/kiichain.kiichain3.oracle.DenomOracleExchangeRate";
  value: DenomOracleExchangeRateAmino;
}
/** DenomOracleExchangeRate is the data type that represents an set of denom - exchange rate values */
export interface DenomOracleExchangeRateSDKType {
  denom: string;
  oracle_exchange_rate?: OracleExchangeRateSDKType;
}
/** QueryVoteTargetsRequest is the request for the Query/VoteTargets rpc method */
export interface QueryVoteTargetsRequest {}
export interface QueryVoteTargetsRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVoteTargetsRequest";
  value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request for the Query/VoteTargets rpc method */
export interface QueryVoteTargetsRequestAmino {}
export interface QueryVoteTargetsRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryVoteTargetsRequest";
  value: QueryVoteTargetsRequestAmino;
}
/** QueryVoteTargetsRequest is the request for the Query/VoteTargets rpc method */
export interface QueryVoteTargetsRequestSDKType {}
/** QueryVoteTargetsRequest is the response for the Query/VoteTargets rpc method */
export interface QueryVoteTargetsResponse {
  voteTargets: string[];
}
export interface QueryVoteTargetsResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVoteTargetsResponse";
  value: Uint8Array;
}
/** QueryVoteTargetsRequest is the response for the Query/VoteTargets rpc method */
export interface QueryVoteTargetsResponseAmino {
  vote_targets?: string[];
}
export interface QueryVoteTargetsResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryVoteTargetsResponse";
  value: QueryVoteTargetsResponseAmino;
}
/** QueryVoteTargetsRequest is the response for the Query/VoteTargets rpc method */
export interface QueryVoteTargetsResponseSDKType {
  vote_targets: string[];
}
/** QueryPriceSnapshotHistoryRequest is the request for the Query/PriceSnapshotHistory rpc method */
export interface QueryPriceSnapshotHistoryRequest {}
export interface QueryPriceSnapshotHistoryRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryRequest";
  value: Uint8Array;
}
/** QueryPriceSnapshotHistoryRequest is the request for the Query/PriceSnapshotHistory rpc method */
export interface QueryPriceSnapshotHistoryRequestAmino {}
export interface QueryPriceSnapshotHistoryRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryRequest";
  value: QueryPriceSnapshotHistoryRequestAmino;
}
/** QueryPriceSnapshotHistoryRequest is the request for the Query/PriceSnapshotHistory rpc method */
export interface QueryPriceSnapshotHistoryRequestSDKType {}
/**
 * QueryPriceSnapshotHistoryResponse is the response for the Query/PriceSnapshotHistory rpc method
 * PriceSnapshots is the alias of the price_snapshot element
 */
export interface QueryPriceSnapshotHistoryResponse {
  priceSnapshot: PriceSnapshot[];
}
export interface QueryPriceSnapshotHistoryResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryPriceSnapshotHistoryResponse is the response for the Query/PriceSnapshotHistory rpc method
 * PriceSnapshots is the alias of the price_snapshot element
 */
export interface QueryPriceSnapshotHistoryResponseAmino {
  price_snapshot?: PriceSnapshotAmino[];
}
export interface QueryPriceSnapshotHistoryResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryResponse";
  value: QueryPriceSnapshotHistoryResponseAmino;
}
/**
 * QueryPriceSnapshotHistoryResponse is the response for the Query/PriceSnapshotHistory rpc method
 * PriceSnapshots is the alias of the price_snapshot element
 */
export interface QueryPriceSnapshotHistoryResponseSDKType {
  price_snapshot: PriceSnapshotSDKType[];
}
/** QueryTwapsRequest is the request for the Query/Twaps rpc method */
export interface QueryTwapsRequest {
  /** time to lookback on the snapshots array */
  lookbackSeconds: bigint;
}
export interface QueryTwapsRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryTwapsRequest";
  value: Uint8Array;
}
/** QueryTwapsRequest is the request for the Query/Twaps rpc method */
export interface QueryTwapsRequestAmino {
  /** time to lookback on the snapshots array */
  lookback_seconds?: string;
}
export interface QueryTwapsRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryTwapsRequest";
  value: QueryTwapsRequestAmino;
}
/** QueryTwapsRequest is the request for the Query/Twaps rpc method */
export interface QueryTwapsRequestSDKType {
  lookback_seconds: bigint;
}
/**
 * QueryTwapsRequest is the response for the Query/Twaps rpc method
 * OracleTwaps is the alias of the oracle_twap array element
 */
export interface QueryTwapsResponse {
  /**
   * Twap = Time-weighted average price
   * oracle_twap is the average price over an specific period of time and denom
   */
  oracleTwap: OracleTwap[];
}
export interface QueryTwapsResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryTwapsResponse";
  value: Uint8Array;
}
/**
 * QueryTwapsRequest is the response for the Query/Twaps rpc method
 * OracleTwaps is the alias of the oracle_twap array element
 */
export interface QueryTwapsResponseAmino {
  /**
   * Twap = Time-weighted average price
   * oracle_twap is the average price over an specific period of time and denom
   */
  oracle_twap?: OracleTwapAmino[];
}
export interface QueryTwapsResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryTwapsResponse";
  value: QueryTwapsResponseAmino;
}
/**
 * QueryTwapsRequest is the response for the Query/Twaps rpc method
 * OracleTwaps is the alias of the oracle_twap array element
 */
export interface QueryTwapsResponseSDKType {
  oracle_twap: OracleTwapSDKType[];
}
/** QueryFeederDelegationResponse is the request for the Query/FeederDelegation rpc method */
export interface QueryFeederDelegationRequest {
  /** validator address to query for */
  validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryFeederDelegationRequest";
  value: Uint8Array;
}
/** QueryFeederDelegationResponse is the request for the Query/FeederDelegation rpc method */
export interface QueryFeederDelegationRequestAmino {
  /** validator address to query for */
  validator_addr?: string;
}
export interface QueryFeederDelegationRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryFeederDelegationRequest";
  value: QueryFeederDelegationRequestAmino;
}
/** QueryFeederDelegationResponse is the request for the Query/FeederDelegation rpc method */
export interface QueryFeederDelegationRequestSDKType {
  validator_addr: string;
}
/** QueryFeederDelegationResponse is the response for the Query/FeederDelegation rpc method */
export interface QueryFeederDelegationResponse {
  /** delegated address */
  feedAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryFeederDelegationResponse";
  value: Uint8Array;
}
/** QueryFeederDelegationResponse is the response for the Query/FeederDelegation rpc method */
export interface QueryFeederDelegationResponseAmino {
  /** delegated address */
  feed_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryFeederDelegationResponse";
  value: QueryFeederDelegationResponseAmino;
}
/** QueryFeederDelegationResponse is the response for the Query/FeederDelegation rpc method */
export interface QueryFeederDelegationResponseSDKType {
  feed_addr: string;
}
/** QueryVotePenaltyCounterRequest is the request for the Query/VotePenaltyCounter rpc */
export interface QueryVotePenaltyCounterRequest {
  validatorAddr: string;
}
export interface QueryVotePenaltyCounterRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterRequest";
  value: Uint8Array;
}
/** QueryVotePenaltyCounterRequest is the request for the Query/VotePenaltyCounter rpc */
export interface QueryVotePenaltyCounterRequestAmino {
  validator_addr?: string;
}
export interface QueryVotePenaltyCounterRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterRequest";
  value: QueryVotePenaltyCounterRequestAmino;
}
/** QueryVotePenaltyCounterRequest is the request for the Query/VotePenaltyCounter rpc */
export interface QueryVotePenaltyCounterRequestSDKType {
  validator_addr: string;
}
/** QueryVotePenaltyCounterResponse is the response for the Query/VotePenaltyCounter rpc */
export interface QueryVotePenaltyCounterResponse {
  /** Returns the voting behavior per validator */
  votePenaltyCounter?: VotePenaltyCounter;
}
export interface QueryVotePenaltyCounterResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterResponse";
  value: Uint8Array;
}
/** QueryVotePenaltyCounterResponse is the response for the Query/VotePenaltyCounter rpc */
export interface QueryVotePenaltyCounterResponseAmino {
  /** Returns the voting behavior per validator */
  vote_penalty_counter?: VotePenaltyCounterAmino;
}
export interface QueryVotePenaltyCounterResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterResponse";
  value: QueryVotePenaltyCounterResponseAmino;
}
/** QueryVotePenaltyCounterResponse is the response for the Query/VotePenaltyCounter rpc */
export interface QueryVotePenaltyCounterResponseSDKType {
  vote_penalty_counter?: VotePenaltyCounterSDKType;
}
/** QuerySlashWindowRequest is the request for the Query/SlashWindow rpc */
export interface QuerySlashWindowRequest {}
export interface QuerySlashWindowRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QuerySlashWindowRequest";
  value: Uint8Array;
}
/** QuerySlashWindowRequest is the request for the Query/SlashWindow rpc */
export interface QuerySlashWindowRequestAmino {}
export interface QuerySlashWindowRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QuerySlashWindowRequest";
  value: QuerySlashWindowRequestAmino;
}
/** QuerySlashWindowRequest is the request for the Query/SlashWindow rpc */
export interface QuerySlashWindowRequestSDKType {}
/** QuerySlashWindowResponse is the response for the Query/SlashWindow rpc */
export interface QuerySlashWindowResponse {
  /** window_progress defines the number of voting periods */
  windowProgress: bigint;
}
export interface QuerySlashWindowResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QuerySlashWindowResponse";
  value: Uint8Array;
}
/** QuerySlashWindowResponse is the response for the Query/SlashWindow rpc */
export interface QuerySlashWindowResponseAmino {
  /** window_progress defines the number of voting periods */
  window_progress?: string;
}
export interface QuerySlashWindowResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QuerySlashWindowResponse";
  value: QuerySlashWindowResponseAmino;
}
/** QuerySlashWindowResponse is the response for the Query/SlashWindow rpc */
export interface QuerySlashWindowResponseSDKType {
  window_progress: bigint;
}
/** QueryParamsResponse is the request for the Query/Params rpc method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsResponse is the request for the Query/Params rpc method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the request for the Query/Params rpc method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response for the Query/Params rpc method */
export interface QueryParamsResponse {
  /** return the params module's params */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kiichain.kiichain3.oracle.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response for the Query/Params rpc method */
export interface QueryParamsResponseAmino {
  /** return the params module's params */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kiichain.kiichain3.oracle.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response for the Query/Params rpc method */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: ""
  };
}
export const QueryExchangeRateRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRateRequest",
  encode(message: QueryExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
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
  fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryExchangeRateRequestAmino): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryExchangeRateRequest): QueryExchangeRateRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRateRequestAminoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRateRequest): Uint8Array {
    return QueryExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRateRequest",
      value: QueryExchangeRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    oracleExchangeRate: undefined
  };
}
export const QueryExchangeRateResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRateResponse",
  encode(message: QueryExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
    return message;
  },
  fromAmino(object: QueryExchangeRateResponseAmino): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    if (object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null) {
      message.oracleExchangeRate = OracleExchangeRate.fromAmino(object.oracle_exchange_rate);
    }
    return message;
  },
  toAmino(message: QueryExchangeRateResponse): QueryExchangeRateResponseAmino {
    const obj: any = {};
    obj.oracle_exchange_rate = message.oracleExchangeRate ? OracleExchangeRate.toAmino(message.oracleExchangeRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRateResponseAminoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRateResponse): Uint8Array {
    return QueryExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRateResponse",
      value: QueryExchangeRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}
export const QueryExchangeRatesRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRatesRequest",
  encode(_: QueryExchangeRatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesRequest();
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
  fromPartial(_: Partial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  fromAmino(_: QueryExchangeRatesRequestAmino): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  toAmino(_: QueryExchangeRatesRequest): QueryExchangeRatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesRequestAminoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRatesRequest): Uint8Array {
    return QueryExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRatesRequest",
      value: QueryExchangeRatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    denomOracleExchangeRate: []
  };
}
export const QueryExchangeRatesResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRatesResponse",
  encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomOracleExchangeRate) {
      DenomOracleExchangeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOracleExchangeRate.push(DenomOracleExchangeRate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.denomOracleExchangeRate = object.denomOracleExchangeRate?.map(e => DenomOracleExchangeRate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.denomOracleExchangeRate = object.denom_oracle_exchange_rate?.map(e => DenomOracleExchangeRate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.denomOracleExchangeRate) {
      obj.denom_oracle_exchange_rate = message.denomOracleExchangeRate.map(e => e ? DenomOracleExchangeRate.toAmino(e) : undefined);
    } else {
      obj.denom_oracle_exchange_rate = message.denomOracleExchangeRate;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryExchangeRatesResponse",
      value: QueryExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}
export const QueryActivesRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryActivesRequest",
  encode(_: QueryActivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesRequest();
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
  fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  fromAmino(_: QueryActivesRequestAmino): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  toAmino(_: QueryActivesRequest): QueryActivesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActivesRequestAminoMsg): QueryActivesRequest {
    return QueryActivesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest {
    return QueryActivesRequest.decode(message.value);
  },
  toProto(message: QueryActivesRequest): Uint8Array {
    return QueryActivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryActivesRequest",
      value: QueryActivesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActivesResponse(): QueryActivesResponse {
  return {
    actives: []
  };
}
export const QueryActivesResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryActivesResponse",
  encode(message: QueryActivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryActivesResponseAmino): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActivesResponse): QueryActivesResponseAmino {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map(e => e);
    } else {
      obj.actives = message.actives;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActivesResponseAminoMsg): QueryActivesResponse {
    return QueryActivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse {
    return QueryActivesResponse.decode(message.value);
  },
  toProto(message: QueryActivesResponse): Uint8Array {
    return QueryActivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryActivesResponse",
      value: QueryActivesResponse.encode(message).finish()
    };
  }
};
function createBaseDenomOracleExchangeRate(): DenomOracleExchangeRate {
  return {
    denom: "",
    oracleExchangeRate: undefined
  };
}
export const DenomOracleExchangeRate = {
  typeUrl: "/kiichain.kiichain3.oracle.DenomOracleExchangeRate",
  encode(message: DenomOracleExchangeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomOracleExchangeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOracleExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomOracleExchangeRate>): DenomOracleExchangeRate {
    const message = createBaseDenomOracleExchangeRate();
    message.denom = object.denom ?? "";
    message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
    return message;
  },
  fromAmino(object: DenomOracleExchangeRateAmino): DenomOracleExchangeRate {
    const message = createBaseDenomOracleExchangeRate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null) {
      message.oracleExchangeRate = OracleExchangeRate.fromAmino(object.oracle_exchange_rate);
    }
    return message;
  },
  toAmino(message: DenomOracleExchangeRate): DenomOracleExchangeRateAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.oracle_exchange_rate = message.oracleExchangeRate ? OracleExchangeRate.toAmino(message.oracleExchangeRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomOracleExchangeRateAminoMsg): DenomOracleExchangeRate {
    return DenomOracleExchangeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomOracleExchangeRateProtoMsg): DenomOracleExchangeRate {
    return DenomOracleExchangeRate.decode(message.value);
  },
  toProto(message: DenomOracleExchangeRate): Uint8Array {
    return DenomOracleExchangeRate.encode(message).finish();
  },
  toProtoMsg(message: DenomOracleExchangeRate): DenomOracleExchangeRateProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.DenomOracleExchangeRate",
      value: DenomOracleExchangeRate.encode(message).finish()
    };
  }
};
function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}
export const QueryVoteTargetsRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVoteTargetsRequest",
  encode(_: QueryVoteTargetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsRequest();
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
  fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  fromAmino(_: QueryVoteTargetsRequestAmino): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  toAmino(_: QueryVoteTargetsRequest): QueryVoteTargetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVoteTargetsRequestAminoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.decode(message.value);
  },
  toProto(message: QueryVoteTargetsRequest): Uint8Array {
    return QueryVoteTargetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryVoteTargetsRequest",
      value: QueryVoteTargetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return {
    voteTargets: []
  };
}
export const QueryVoteTargetsResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVoteTargetsResponse",
  encode(message: QueryVoteTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryVoteTargetsResponseAmino): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.vote_targets?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseAmino {
    const obj: any = {};
    if (message.voteTargets) {
      obj.vote_targets = message.voteTargets.map(e => e);
    } else {
      obj.vote_targets = message.voteTargets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVoteTargetsResponseAminoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.decode(message.value);
  },
  toProto(message: QueryVoteTargetsResponse): Uint8Array {
    return QueryVoteTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryVoteTargetsResponse",
      value: QueryVoteTargetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPriceSnapshotHistoryRequest(): QueryPriceSnapshotHistoryRequest {
  return {};
}
export const QueryPriceSnapshotHistoryRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryRequest",
  encode(_: QueryPriceSnapshotHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceSnapshotHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSnapshotHistoryRequest();
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
  fromPartial(_: Partial<QueryPriceSnapshotHistoryRequest>): QueryPriceSnapshotHistoryRequest {
    const message = createBaseQueryPriceSnapshotHistoryRequest();
    return message;
  },
  fromAmino(_: QueryPriceSnapshotHistoryRequestAmino): QueryPriceSnapshotHistoryRequest {
    const message = createBaseQueryPriceSnapshotHistoryRequest();
    return message;
  },
  toAmino(_: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPriceSnapshotHistoryRequestAminoMsg): QueryPriceSnapshotHistoryRequest {
    return QueryPriceSnapshotHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceSnapshotHistoryRequestProtoMsg): QueryPriceSnapshotHistoryRequest {
    return QueryPriceSnapshotHistoryRequest.decode(message.value);
  },
  toProto(message: QueryPriceSnapshotHistoryRequest): Uint8Array {
    return QueryPriceSnapshotHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryRequest",
      value: QueryPriceSnapshotHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPriceSnapshotHistoryResponse(): QueryPriceSnapshotHistoryResponse {
  return {
    priceSnapshot: []
  };
}
export const QueryPriceSnapshotHistoryResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryResponse",
  encode(message: QueryPriceSnapshotHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceSnapshot) {
      PriceSnapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceSnapshotHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceSnapshot.push(PriceSnapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPriceSnapshotHistoryResponse>): QueryPriceSnapshotHistoryResponse {
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    message.priceSnapshot = object.priceSnapshot?.map(e => PriceSnapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPriceSnapshotHistoryResponseAmino): QueryPriceSnapshotHistoryResponse {
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    message.priceSnapshot = object.price_snapshot?.map(e => PriceSnapshot.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponseAmino {
    const obj: any = {};
    if (message.priceSnapshot) {
      obj.price_snapshot = message.priceSnapshot.map(e => e ? PriceSnapshot.toAmino(e) : undefined);
    } else {
      obj.price_snapshot = message.priceSnapshot;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPriceSnapshotHistoryResponseAminoMsg): QueryPriceSnapshotHistoryResponse {
    return QueryPriceSnapshotHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceSnapshotHistoryResponseProtoMsg): QueryPriceSnapshotHistoryResponse {
    return QueryPriceSnapshotHistoryResponse.decode(message.value);
  },
  toProto(message: QueryPriceSnapshotHistoryResponse): Uint8Array {
    return QueryPriceSnapshotHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryPriceSnapshotHistoryResponse",
      value: QueryPriceSnapshotHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTwapsRequest(): QueryTwapsRequest {
  return {
    lookbackSeconds: BigInt(0)
  };
}
export const QueryTwapsRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryTwapsRequest",
  encode(message: QueryTwapsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lookbackSeconds !== BigInt(0)) {
      writer.uint32(8).uint64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTwapsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lookbackSeconds = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTwapsRequest>): QueryTwapsRequest {
    const message = createBaseQueryTwapsRequest();
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? BigInt(object.lookbackSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTwapsRequestAmino): QueryTwapsRequest {
    const message = createBaseQueryTwapsRequest();
    if (object.lookback_seconds !== undefined && object.lookback_seconds !== null) {
      message.lookbackSeconds = BigInt(object.lookback_seconds);
    }
    return message;
  },
  toAmino(message: QueryTwapsRequest): QueryTwapsRequestAmino {
    const obj: any = {};
    obj.lookback_seconds = message.lookbackSeconds !== BigInt(0) ? message.lookbackSeconds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTwapsRequestAminoMsg): QueryTwapsRequest {
    return QueryTwapsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTwapsRequestProtoMsg): QueryTwapsRequest {
    return QueryTwapsRequest.decode(message.value);
  },
  toProto(message: QueryTwapsRequest): Uint8Array {
    return QueryTwapsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTwapsRequest): QueryTwapsRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryTwapsRequest",
      value: QueryTwapsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTwapsResponse(): QueryTwapsResponse {
  return {
    oracleTwap: []
  };
}
export const QueryTwapsResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryTwapsResponse",
  encode(message: QueryTwapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oracleTwap) {
      OracleTwap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTwapsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleTwap.push(OracleTwap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTwapsResponse>): QueryTwapsResponse {
    const message = createBaseQueryTwapsResponse();
    message.oracleTwap = object.oracleTwap?.map(e => OracleTwap.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTwapsResponseAmino): QueryTwapsResponse {
    const message = createBaseQueryTwapsResponse();
    message.oracleTwap = object.oracle_twap?.map(e => OracleTwap.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTwapsResponse): QueryTwapsResponseAmino {
    const obj: any = {};
    if (message.oracleTwap) {
      obj.oracle_twap = message.oracleTwap.map(e => e ? OracleTwap.toAmino(e) : undefined);
    } else {
      obj.oracle_twap = message.oracleTwap;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTwapsResponseAminoMsg): QueryTwapsResponse {
    return QueryTwapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTwapsResponseProtoMsg): QueryTwapsResponse {
    return QueryTwapsResponse.decode(message.value);
  },
  toProto(message: QueryTwapsResponse): Uint8Array {
    return QueryTwapsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTwapsResponse): QueryTwapsResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryTwapsResponse",
      value: QueryTwapsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegationRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryFeederDelegationRequest",
  encode(message: QueryFeederDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationRequestAmino): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationRequestAminoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.decode(message.value);
  },
  toProto(message: QueryFeederDelegationRequest): Uint8Array {
    return QueryFeederDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryFeederDelegationRequest",
      value: QueryFeederDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feedAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryFeederDelegationResponse",
  encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedAddr !== "") {
      writer.uint32(10).string(message.feedAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feedAddr = object.feedAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    if (object.feed_addr !== undefined && object.feed_addr !== null) {
      message.feedAddr = object.feed_addr;
    }
    return message;
  },
  toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino {
    const obj: any = {};
    obj.feed_addr = message.feedAddr === "" ? undefined : message.feedAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryFeederDelegationResponse",
      value: QueryFeederDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotePenaltyCounterRequest(): QueryVotePenaltyCounterRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryVotePenaltyCounterRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterRequest",
  encode(message: QueryVotePenaltyCounterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePenaltyCounterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePenaltyCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVotePenaltyCounterRequest>): QueryVotePenaltyCounterRequest {
    const message = createBaseQueryVotePenaltyCounterRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryVotePenaltyCounterRequestAmino): QueryVotePenaltyCounterRequest {
    const message = createBaseQueryVotePenaltyCounterRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryVotePenaltyCounterRequestAminoMsg): QueryVotePenaltyCounterRequest {
    return QueryVotePenaltyCounterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotePenaltyCounterRequestProtoMsg): QueryVotePenaltyCounterRequest {
    return QueryVotePenaltyCounterRequest.decode(message.value);
  },
  toProto(message: QueryVotePenaltyCounterRequest): Uint8Array {
    return QueryVotePenaltyCounterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterRequest",
      value: QueryVotePenaltyCounterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotePenaltyCounterResponse(): QueryVotePenaltyCounterResponse {
  return {
    votePenaltyCounter: undefined
  };
}
export const QueryVotePenaltyCounterResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterResponse",
  encode(message: QueryVotePenaltyCounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePenaltyCounter !== undefined) {
      VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePenaltyCounterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePenaltyCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePenaltyCounter = VotePenaltyCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVotePenaltyCounterResponse>): QueryVotePenaltyCounterResponse {
    const message = createBaseQueryVotePenaltyCounterResponse();
    message.votePenaltyCounter = object.votePenaltyCounter !== undefined && object.votePenaltyCounter !== null ? VotePenaltyCounter.fromPartial(object.votePenaltyCounter) : undefined;
    return message;
  },
  fromAmino(object: QueryVotePenaltyCounterResponseAmino): QueryVotePenaltyCounterResponse {
    const message = createBaseQueryVotePenaltyCounterResponse();
    if (object.vote_penalty_counter !== undefined && object.vote_penalty_counter !== null) {
      message.votePenaltyCounter = VotePenaltyCounter.fromAmino(object.vote_penalty_counter);
    }
    return message;
  },
  toAmino(message: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponseAmino {
    const obj: any = {};
    obj.vote_penalty_counter = message.votePenaltyCounter ? VotePenaltyCounter.toAmino(message.votePenaltyCounter) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotePenaltyCounterResponseAminoMsg): QueryVotePenaltyCounterResponse {
    return QueryVotePenaltyCounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotePenaltyCounterResponseProtoMsg): QueryVotePenaltyCounterResponse {
    return QueryVotePenaltyCounterResponse.decode(message.value);
  },
  toProto(message: QueryVotePenaltyCounterResponse): Uint8Array {
    return QueryVotePenaltyCounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QueryVotePenaltyCounterResponse",
      value: QueryVotePenaltyCounterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindowRequest(): QuerySlashWindowRequest {
  return {};
}
export const QuerySlashWindowRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QuerySlashWindowRequest",
  encode(_: QuerySlashWindowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowRequest();
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
  fromPartial(_: Partial<QuerySlashWindowRequest>): QuerySlashWindowRequest {
    const message = createBaseQuerySlashWindowRequest();
    return message;
  },
  fromAmino(_: QuerySlashWindowRequestAmino): QuerySlashWindowRequest {
    const message = createBaseQuerySlashWindowRequest();
    return message;
  },
  toAmino(_: QuerySlashWindowRequest): QuerySlashWindowRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowRequestAminoMsg): QuerySlashWindowRequest {
    return QuerySlashWindowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowRequestProtoMsg): QuerySlashWindowRequest {
    return QuerySlashWindowRequest.decode(message.value);
  },
  toProto(message: QuerySlashWindowRequest): Uint8Array {
    return QuerySlashWindowRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowRequest): QuerySlashWindowRequestProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QuerySlashWindowRequest",
      value: QuerySlashWindowRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
  return {
    windowProgress: BigInt(0)
  };
}
export const QuerySlashWindowResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QuerySlashWindowResponse",
  encode(message: QuerySlashWindowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.windowProgress !== BigInt(0)) {
      writer.uint32(8).uint64(message.windowProgress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windowProgress = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySlashWindowResponse>): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? BigInt(object.windowProgress.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    if (object.window_progress !== undefined && object.window_progress !== null) {
      message.windowProgress = BigInt(object.window_progress);
    }
    return message;
  },
  toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino {
    const obj: any = {};
    obj.window_progress = message.windowProgress !== BigInt(0) ? message.windowProgress?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.decode(message.value);
  },
  toProto(message: QuerySlashWindowResponse): Uint8Array {
    return QuerySlashWindowResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg {
    return {
      typeUrl: "/kiichain.kiichain3.oracle.QuerySlashWindowResponse",
      value: QuerySlashWindowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryParamsRequest",
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
      typeUrl: "/kiichain.kiichain3.oracle.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kiichain.kiichain3.oracle.QueryParamsResponse",
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
      typeUrl: "/kiichain.kiichain3.oracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};