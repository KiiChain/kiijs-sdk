//@ts-nocheck
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
  QueryBuildAddressRequest,
  QueryBuildAddressResponse,
  QueryCodeRequest,
  QueryCodeResponse,
  QueryCodesRequest,
  QueryCodesResponse,
  QueryContractHistoryRequest,
  QueryContractHistoryResponse,
  QueryContractInfoRequest,
  QueryContractInfoResponse,
  QueryContractsByCodeRequest,
  QueryContractsByCodeResponse,
  QueryContractsByCreatorRequest,
  QueryContractsByCreatorResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPinnedCodesRequest,
  QueryPinnedCodesResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
} from './query';
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  contractInfo(
    request: QueryContractInfoRequest
  ): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  contractHistory(
    request: QueryContractHistoryRequest
  ): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  contractsByCode(
    request: QueryContractsByCodeRequest
  ): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  allContractState(
    request: QueryAllContractStateRequest
  ): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  rawContractState(
    request: QueryRawContractStateRequest
  ): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  smartContractState(
    request: QuerySmartContractStateRequest
  ): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a singe wasm code */
  code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** PinnedCodes gets the pinned code ids */
  pinnedCodes(
    request?: QueryPinnedCodesRequest
  ): Promise<QueryPinnedCodesResponse>;
  /** Params gets the module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ContractsByCreator gets the contracts by creator */
  contractsByCreator(
    request: QueryContractsByCreatorRequest
  ): Promise<QueryContractsByCreatorResponse>;
  /** BuildAddress builds a contract address */
  buildAddress(
    request: QueryBuildAddressRequest
  ): Promise<QueryBuildAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
    this.buildAddress = this.buildAddress.bind(this);
  }
  contractInfo(
    request: QueryContractInfoRequest
  ): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'ContractInfo',
      data
    );
    return promise.then((data) =>
      QueryContractInfoResponse.decode(new BinaryReader(data))
    );
  }
  contractHistory(
    request: QueryContractHistoryRequest
  ): Promise<QueryContractHistoryResponse> {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'ContractHistory',
      data
    );
    return promise.then((data) =>
      QueryContractHistoryResponse.decode(new BinaryReader(data))
    );
  }
  contractsByCode(
    request: QueryContractsByCodeRequest
  ): Promise<QueryContractsByCodeResponse> {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'ContractsByCode',
      data
    );
    return promise.then((data) =>
      QueryContractsByCodeResponse.decode(new BinaryReader(data))
    );
  }
  allContractState(
    request: QueryAllContractStateRequest
  ): Promise<QueryAllContractStateResponse> {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'AllContractState',
      data
    );
    return promise.then((data) =>
      QueryAllContractStateResponse.decode(new BinaryReader(data))
    );
  }
  rawContractState(
    request: QueryRawContractStateRequest
  ): Promise<QueryRawContractStateResponse> {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'RawContractState',
      data
    );
    return promise.then((data) =>
      QueryRawContractStateResponse.decode(new BinaryReader(data))
    );
  }
  smartContractState(
    request: QuerySmartContractStateRequest
  ): Promise<QuerySmartContractStateResponse> {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'SmartContractState',
      data
    );
    return promise.then((data) =>
      QuerySmartContractStateResponse.decode(new BinaryReader(data))
    );
  }
  code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request('cosmwasm.wasm.v1.Query', 'Code', data);
    return promise.then((data) =>
      QueryCodeResponse.decode(new BinaryReader(data))
    );
  }
  codes(
    request: QueryCodesRequest = {
      pagination: undefined,
    }
  ): Promise<QueryCodesResponse> {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request('cosmwasm.wasm.v1.Query', 'Codes', data);
    return promise.then((data) =>
      QueryCodesResponse.decode(new BinaryReader(data))
    );
  }
  pinnedCodes(
    request: QueryPinnedCodesRequest = {
      pagination: undefined,
    }
  ): Promise<QueryPinnedCodesResponse> {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'PinnedCodes',
      data
    );
    return promise.then((data) =>
      QueryPinnedCodesResponse.decode(new BinaryReader(data))
    );
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('cosmwasm.wasm.v1.Query', 'Params', data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data))
    );
  }
  contractsByCreator(
    request: QueryContractsByCreatorRequest
  ): Promise<QueryContractsByCreatorResponse> {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'ContractsByCreator',
      data
    );
    return promise.then((data) =>
      QueryContractsByCreatorResponse.decode(new BinaryReader(data))
    );
  }
  buildAddress(
    request: QueryBuildAddressRequest
  ): Promise<QueryBuildAddressResponse> {
    const data = QueryBuildAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmwasm.wasm.v1.Query',
      'BuildAddress',
      data
    );
    return promise.then((data) =>
      QueryBuildAddressResponse.decode(new BinaryReader(data))
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(
      request: QueryContractInfoRequest
    ): Promise<QueryContractInfoResponse> {
      return queryService.contractInfo(request);
    },
    contractHistory(
      request: QueryContractHistoryRequest
    ): Promise<QueryContractHistoryResponse> {
      return queryService.contractHistory(request);
    },
    contractsByCode(
      request: QueryContractsByCodeRequest
    ): Promise<QueryContractsByCodeResponse> {
      return queryService.contractsByCode(request);
    },
    allContractState(
      request: QueryAllContractStateRequest
    ): Promise<QueryAllContractStateResponse> {
      return queryService.allContractState(request);
    },
    rawContractState(
      request: QueryRawContractStateRequest
    ): Promise<QueryRawContractStateResponse> {
      return queryService.rawContractState(request);
    },
    smartContractState(
      request: QuerySmartContractStateRequest
    ): Promise<QuerySmartContractStateResponse> {
      return queryService.smartContractState(request);
    },
    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse> {
      return queryService.codes(request);
    },
    pinnedCodes(
      request?: QueryPinnedCodesRequest
    ): Promise<QueryPinnedCodesResponse> {
      return queryService.pinnedCodes(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    contractsByCreator(
      request: QueryContractsByCreatorRequest
    ): Promise<QueryContractsByCreatorResponse> {
      return queryService.contractsByCreator(request);
    },
    buildAddress(
      request: QueryBuildAddressRequest
    ): Promise<QueryBuildAddressResponse> {
      return queryService.buildAddress(request);
    },
  };
};
