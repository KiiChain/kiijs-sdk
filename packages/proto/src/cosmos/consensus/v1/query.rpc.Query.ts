//@ts-nocheck
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import { QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/consensus module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.consensus.v1.Query',
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
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
  };
};
