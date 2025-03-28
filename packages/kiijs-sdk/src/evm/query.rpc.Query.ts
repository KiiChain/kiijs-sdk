//@ts-nocheck
import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryKiiAddressByEVMAddressRequest, QueryKiiAddressByEVMAddressResponse, QueryEVMAddressByKiiAddressRequest, QueryEVMAddressByKiiAddressResponse, QueryStaticCallRequest, QueryStaticCallResponse, QueryPointerRequest, QueryPointerResponse, QueryPointerVersionRequest, QueryPointerVersionResponse, QueryPointeeRequest, QueryPointeeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  kiiAddressByEVMAddress(request: QueryKiiAddressByEVMAddressRequest): Promise<QueryKiiAddressByEVMAddressResponse>;
  eVMAddressByKiiAddress(request: QueryEVMAddressByKiiAddressRequest): Promise<QueryEVMAddressByKiiAddressResponse>;
  staticCall(request: QueryStaticCallRequest): Promise<QueryStaticCallResponse>;
  pointer(request: QueryPointerRequest): Promise<QueryPointerResponse>;
  pointerVersion(request: QueryPointerVersionRequest): Promise<QueryPointerVersionResponse>;
  pointee(request: QueryPointeeRequest): Promise<QueryPointeeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.kiiAddressByEVMAddress = this.kiiAddressByEVMAddress.bind(this);
    this.eVMAddressByKiiAddress = this.eVMAddressByKiiAddress.bind(this);
    this.staticCall = this.staticCall.bind(this);
    this.pointer = this.pointer.bind(this);
    this.pointerVersion = this.pointerVersion.bind(this);
    this.pointee = this.pointee.bind(this);
  }
  kiiAddressByEVMAddress(request: QueryKiiAddressByEVMAddressRequest): Promise<QueryKiiAddressByEVMAddressResponse> {
    const data = QueryKiiAddressByEVMAddressRequest.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Query", "KiiAddressByEVMAddress", data);
    return promise.then(data => QueryKiiAddressByEVMAddressResponse.decode(new BinaryReader(data)));
  }
  eVMAddressByKiiAddress(request: QueryEVMAddressByKiiAddressRequest): Promise<QueryEVMAddressByKiiAddressResponse> {
    const data = QueryEVMAddressByKiiAddressRequest.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Query", "EVMAddressByKiiAddress", data);
    return promise.then(data => QueryEVMAddressByKiiAddressResponse.decode(new BinaryReader(data)));
  }
  staticCall(request: QueryStaticCallRequest): Promise<QueryStaticCallResponse> {
    const data = QueryStaticCallRequest.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Query", "StaticCall", data);
    return promise.then(data => QueryStaticCallResponse.decode(new BinaryReader(data)));
  }
  pointer(request: QueryPointerRequest): Promise<QueryPointerResponse> {
    const data = QueryPointerRequest.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Query", "Pointer", data);
    return promise.then(data => QueryPointerResponse.decode(new BinaryReader(data)));
  }
  pointerVersion(request: QueryPointerVersionRequest): Promise<QueryPointerVersionResponse> {
    const data = QueryPointerVersionRequest.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Query", "PointerVersion", data);
    return promise.then(data => QueryPointerVersionResponse.decode(new BinaryReader(data)));
  }
  pointee(request: QueryPointeeRequest): Promise<QueryPointeeResponse> {
    const data = QueryPointeeRequest.encode(request).finish();
    const promise = this.rpc.request("kiichain.kiichain3.evm.Query", "Pointee", data);
    return promise.then(data => QueryPointeeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    kiiAddressByEVMAddress(request: QueryKiiAddressByEVMAddressRequest): Promise<QueryKiiAddressByEVMAddressResponse> {
      return queryService.kiiAddressByEVMAddress(request);
    },
    eVMAddressByKiiAddress(request: QueryEVMAddressByKiiAddressRequest): Promise<QueryEVMAddressByKiiAddressResponse> {
      return queryService.eVMAddressByKiiAddress(request);
    },
    staticCall(request: QueryStaticCallRequest): Promise<QueryStaticCallResponse> {
      return queryService.staticCall(request);
    },
    pointer(request: QueryPointerRequest): Promise<QueryPointerResponse> {
      return queryService.pointer(request);
    },
    pointerVersion(request: QueryPointerVersionRequest): Promise<QueryPointerVersionResponse> {
      return queryService.pointerVersion(request);
    },
    pointee(request: QueryPointeeRequest): Promise<QueryPointeeResponse> {
      return queryService.pointee(request);
    }
  };
};