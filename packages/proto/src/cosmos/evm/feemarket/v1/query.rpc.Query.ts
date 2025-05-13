//@ts-nocheck
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/feemarket module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** BaseFee queries the base fee of the parent block of the current block. */
  baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
  /** BlockGas queries the gas used at a given block height */
  blockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.baseFee = this.baseFee.bind(this);
    this.blockGas = this.blockGas.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.feemarket.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  baseFee(request: QueryBaseFeeRequest = {}): Promise<QueryBaseFeeResponse> {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.feemarket.v1.Query", "BaseFee", data);
    return promise.then(data => QueryBaseFeeResponse.decode(new BinaryReader(data)));
  }
  blockGas(request: QueryBlockGasRequest = {}): Promise<QueryBlockGasResponse> {
    const data = QueryBlockGasRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.feemarket.v1.Query", "BlockGas", data);
    return promise.then(data => QueryBlockGasResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
      return queryService.baseFee(request);
    },
    blockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse> {
      return queryService.blockGas(request);
    }
  };
};