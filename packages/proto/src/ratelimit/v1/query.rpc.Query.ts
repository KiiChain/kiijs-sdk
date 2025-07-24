//@ts-nocheck
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { BinaryReader } from '../../binary';
import { Rpc } from '../../helpers';
import {
  QueryAllBlacklistedDenomsRequest,
  QueryAllBlacklistedDenomsResponse,
  QueryAllRateLimitsRequest,
  QueryAllRateLimitsResponse,
  QueryAllWhitelistedAddressesRequest,
  QueryAllWhitelistedAddressesResponse,
  QueryRateLimitRequest,
  QueryRateLimitResponse,
  QueryRateLimitsByChainIdRequest,
  QueryRateLimitsByChainIdResponse,
  QueryRateLimitsByChannelIdRequest,
  QueryRateLimitsByChannelIdResponse,
} from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries all rate limits */
  allRateLimits(
    request?: QueryAllRateLimitsRequest
  ): Promise<QueryAllRateLimitsResponse>;
  /**
   * Queries a specific rate limit by channel ID and denom
   * Ex:
   *  - /ratelimit/{channel_id}/by_denom?denom={denom}
   */
  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
  /** Queries all the rate limits for a given chain */
  rateLimitsByChainId(
    request: QueryRateLimitsByChainIdRequest
  ): Promise<QueryRateLimitsByChainIdResponse>;
  /** Queries all the rate limits for a given channel ID */
  rateLimitsByChannelId(
    request: QueryRateLimitsByChannelIdRequest
  ): Promise<QueryRateLimitsByChannelIdResponse>;
  /** Queries all blacklisted denoms */
  allBlacklistedDenoms(
    request?: QueryAllBlacklistedDenomsRequest
  ): Promise<QueryAllBlacklistedDenomsResponse>;
  /** Queries all whitelisted address pairs */
  allWhitelistedAddresses(
    request?: QueryAllWhitelistedAddressesRequest
  ): Promise<QueryAllWhitelistedAddressesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allRateLimits = this.allRateLimits.bind(this);
    this.rateLimit = this.rateLimit.bind(this);
    this.rateLimitsByChainId = this.rateLimitsByChainId.bind(this);
    this.rateLimitsByChannelId = this.rateLimitsByChannelId.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }
  allRateLimits(
    request: QueryAllRateLimitsRequest = {}
  ): Promise<QueryAllRateLimitsResponse> {
    const data = QueryAllRateLimitsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ratelimit.v1.Query',
      'AllRateLimits',
      data
    );
    return promise.then((data) =>
      QueryAllRateLimitsResponse.decode(new BinaryReader(data))
    );
  }
  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
    const data = QueryRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request('ratelimit.v1.Query', 'RateLimit', data);
    return promise.then((data) =>
      QueryRateLimitResponse.decode(new BinaryReader(data))
    );
  }
  rateLimitsByChainId(
    request: QueryRateLimitsByChainIdRequest
  ): Promise<QueryRateLimitsByChainIdResponse> {
    const data = QueryRateLimitsByChainIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ratelimit.v1.Query',
      'RateLimitsByChainId',
      data
    );
    return promise.then((data) =>
      QueryRateLimitsByChainIdResponse.decode(new BinaryReader(data))
    );
  }
  rateLimitsByChannelId(
    request: QueryRateLimitsByChannelIdRequest
  ): Promise<QueryRateLimitsByChannelIdResponse> {
    const data = QueryRateLimitsByChannelIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ratelimit.v1.Query',
      'RateLimitsByChannelId',
      data
    );
    return promise.then((data) =>
      QueryRateLimitsByChannelIdResponse.decode(new BinaryReader(data))
    );
  }
  allBlacklistedDenoms(
    request: QueryAllBlacklistedDenomsRequest = {}
  ): Promise<QueryAllBlacklistedDenomsResponse> {
    const data = QueryAllBlacklistedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ratelimit.v1.Query',
      'AllBlacklistedDenoms',
      data
    );
    return promise.then((data) =>
      QueryAllBlacklistedDenomsResponse.decode(new BinaryReader(data))
    );
  }
  allWhitelistedAddresses(
    request: QueryAllWhitelistedAddressesRequest = {}
  ): Promise<QueryAllWhitelistedAddressesResponse> {
    const data = QueryAllWhitelistedAddressesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ratelimit.v1.Query',
      'AllWhitelistedAddresses',
      data
    );
    return promise.then((data) =>
      QueryAllWhitelistedAddressesResponse.decode(new BinaryReader(data))
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allRateLimits(
      request?: QueryAllRateLimitsRequest
    ): Promise<QueryAllRateLimitsResponse> {
      return queryService.allRateLimits(request);
    },
    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
      return queryService.rateLimit(request);
    },
    rateLimitsByChainId(
      request: QueryRateLimitsByChainIdRequest
    ): Promise<QueryRateLimitsByChainIdResponse> {
      return queryService.rateLimitsByChainId(request);
    },
    rateLimitsByChannelId(
      request: QueryRateLimitsByChannelIdRequest
    ): Promise<QueryRateLimitsByChannelIdResponse> {
      return queryService.rateLimitsByChannelId(request);
    },
    allBlacklistedDenoms(
      request?: QueryAllBlacklistedDenomsRequest
    ): Promise<QueryAllBlacklistedDenomsResponse> {
      return queryService.allBlacklistedDenoms(request);
    },
    allWhitelistedAddresses(
      request?: QueryAllWhitelistedAddressesRequest
    ): Promise<QueryAllWhitelistedAddressesResponse> {
      return queryService.allWhitelistedAddresses(request);
    },
  };
};
