//@ts-nocheck
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { BinaryReader } from '../../../../binary';
import { Rpc } from '../../../../helpers';
import {
  QueryDenomHashRequest,
  QueryDenomHashResponse,
  QueryDenomTraceRequest,
  QueryDenomTraceResponse,
  QueryDenomTracesRequest,
  QueryDenomTracesResponse,
  QueryEscrowAddressRequest,
  QueryEscrowAddressResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTotalEscrowForDenomRequest,
  QueryTotalEscrowForDenomResponse,
} from './query';
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTraces queries all denomination traces. */
  denomTraces(
    request?: QueryDenomTracesRequest
  ): Promise<QueryDenomTracesResponse>;
  /** DenomTrace queries a denomination trace information. */
  denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  escrowAddress(
    request: QueryEscrowAddressRequest
  ): Promise<QueryEscrowAddressResponse>;
  /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  totalEscrowForDenom(
    request: QueryTotalEscrowForDenomRequest
  ): Promise<QueryTotalEscrowForDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.denomTraces = this.denomTraces.bind(this);
    this.denomTrace = this.denomTrace.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  denomTraces(
    request: QueryDenomTracesRequest = {
      pagination: undefined,
    }
  ): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'DenomTraces',
      data
    );
    return promise.then((data) =>
      QueryDenomTracesResponse.decode(new BinaryReader(data))
    );
  }
  denomTrace(
    request: QueryDenomTraceRequest
  ): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'DenomTrace',
      data
    );
    return promise.then((data) =>
      QueryDenomTraceResponse.decode(new BinaryReader(data))
    );
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'Params',
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data))
    );
  }
  denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'DenomHash',
      data
    );
    return promise.then((data) =>
      QueryDenomHashResponse.decode(new BinaryReader(data))
    );
  }
  escrowAddress(
    request: QueryEscrowAddressRequest
  ): Promise<QueryEscrowAddressResponse> {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'EscrowAddress',
      data
    );
    return promise.then((data) =>
      QueryEscrowAddressResponse.decode(new BinaryReader(data))
    );
  }
  totalEscrowForDenom(
    request: QueryTotalEscrowForDenomRequest
  ): Promise<QueryTotalEscrowForDenomResponse> {
    const data = QueryTotalEscrowForDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'TotalEscrowForDenom',
      data
    );
    return promise.then((data) =>
      QueryTotalEscrowForDenomResponse.decode(new BinaryReader(data))
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    denomTraces(
      request?: QueryDenomTracesRequest
    ): Promise<QueryDenomTracesResponse> {
      return queryService.denomTraces(request);
    },
    denomTrace(
      request: QueryDenomTraceRequest
    ): Promise<QueryDenomTraceResponse> {
      return queryService.denomTrace(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
      return queryService.denomHash(request);
    },
    escrowAddress(
      request: QueryEscrowAddressRequest
    ): Promise<QueryEscrowAddressResponse> {
      return queryService.escrowAddress(request);
    },
    totalEscrowForDenom(
      request: QueryTotalEscrowForDenomRequest
    ): Promise<QueryTotalEscrowForDenomResponse> {
      return queryService.totalEscrowForDenom(request);
    },
  };
};
