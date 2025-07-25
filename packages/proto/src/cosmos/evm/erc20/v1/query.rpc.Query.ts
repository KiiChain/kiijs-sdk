//@ts-nocheck
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { BinaryReader } from '../../../../binary';
import { Rpc } from '../../../../helpers';
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTokenPairRequest,
  QueryTokenPairResponse,
  QueryTokenPairsRequest,
  QueryTokenPairsResponse,
} from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  tokenPairs(
    request?: QueryTokenPairsRequest
  ): Promise<QueryTokenPairsResponse>;
  /** TokenPair retrieves a registered token pair */
  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
  /** Params retrieves the erc20 module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }
  tokenPairs(
    request: QueryTokenPairsRequest = {
      pagination: undefined,
    }
  ): Promise<QueryTokenPairsResponse> {
    const data = QueryTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.evm.erc20.v1.Query',
      'TokenPairs',
      data
    );
    return promise.then((data) =>
      QueryTokenPairsResponse.decode(new BinaryReader(data))
    );
  }
  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
    const data = QueryTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.evm.erc20.v1.Query',
      'TokenPair',
      data
    );
    return promise.then((data) =>
      QueryTokenPairResponse.decode(new BinaryReader(data))
    );
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.evm.erc20.v1.Query',
      'Params',
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data))
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenPairs(
      request?: QueryTokenPairsRequest
    ): Promise<QueryTokenPairsResponse> {
      return queryService.tokenPairs(request);
    },
    tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
      return queryService.tokenPair(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
  };
};
