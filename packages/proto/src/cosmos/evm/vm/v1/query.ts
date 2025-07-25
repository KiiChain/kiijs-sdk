//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import {
  base64FromBytes,
  bytesFromBase64,
  fromTimestamp,
  toTimestamp,
} from '../../../../helpers';
import {
  PageRequest,
  PageRequestAmino,
  PageRequestSDKType,
  PageResponse,
  PageResponseAmino,
  PageResponseSDKType,
} from '../../../base/query/v1beta1/pagination';
import {
  ChainConfig,
  ChainConfigAmino,
  ChainConfigSDKType,
  Log,
  LogAmino,
  LogSDKType,
  Params,
  ParamsAmino,
  ParamsSDKType,
  TraceConfig,
  TraceConfigAmino,
  TraceConfigSDKType,
} from './evm';
import { MsgEthereumTx, MsgEthereumTxAmino, MsgEthereumTxSDKType } from './tx';
/** QueryConfigRequest defines the request type for querying the config */
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryConfigRequest';
  value: Uint8Array;
}
/** QueryConfigRequest defines the request type for querying the config */
export interface QueryConfigRequestAmino {}
export interface QueryConfigRequestAminoMsg {
  type: 'cosmos-sdk/QueryConfigRequest';
  value: QueryConfigRequestAmino;
}
/** QueryConfigRequest defines the request type for querying the config */
export interface QueryConfigRequestSDKType {}
/** QueryConfigResponse returns the EVM config. */
export interface QueryConfigResponse {
  /** config is the evm configuration */
  config?: ChainConfig;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryConfigResponse';
  value: Uint8Array;
}
/** QueryConfigResponse returns the EVM config. */
export interface QueryConfigResponseAmino {
  /** config is the evm configuration */
  config?: ChainConfigAmino;
}
export interface QueryConfigResponseAminoMsg {
  type: 'cosmos-sdk/QueryConfigResponse';
  value: QueryConfigResponseAmino;
}
/** QueryConfigResponse returns the EVM config. */
export interface QueryConfigResponseSDKType {
  config?: ChainConfigSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryAccountRequest';
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
  /** address is the ethereum hex address to query the account for. */
  address?: string;
}
export interface QueryAccountRequestAminoMsg {
  type: 'cosmos-sdk/QueryAccountRequest';
  value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
  address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code_hash is the hex-formatted code bytes from the EOA. */
  codeHash: string;
  /** nonce is the account's sequence number. */
  nonce: bigint;
}
export interface QueryAccountResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryAccountResponse';
  value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
  /** balance is the balance of the EVM denomination. */
  balance?: string;
  /** code_hash is the hex-formatted code bytes from the EOA. */
  code_hash?: string;
  /** nonce is the account's sequence number. */
  nonce?: string;
}
export interface QueryAccountResponseAminoMsg {
  type: 'cosmos-sdk/QueryAccountResponse';
  value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
  balance: string;
  code_hash: string;
  nonce: bigint;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryCosmosAccountRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryCosmosAccountRequest';
  value: Uint8Array;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestAmino {
  /** address is the ethereum hex address to query the account for. */
  address?: string;
}
export interface QueryCosmosAccountRequestAminoMsg {
  type: 'cosmos-sdk/QueryCosmosAccountRequest';
  value: QueryCosmosAccountRequestAmino;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestSDKType {
  address: string;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmosAddress: string;
  /** sequence is the account's sequence number. */
  sequence: bigint;
  /** account_number is the account number */
  accountNumber: bigint;
}
export interface QueryCosmosAccountResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryCosmosAccountResponse';
  value: Uint8Array;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseAmino {
  /** cosmos_address is the cosmos address of the account. */
  cosmos_address?: string;
  /** sequence is the account's sequence number. */
  sequence?: string;
  /** account_number is the account number */
  account_number?: string;
}
export interface QueryCosmosAccountResponseAminoMsg {
  type: 'cosmos-sdk/QueryCosmosAccountResponse';
  value: QueryCosmosAccountResponseAmino;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseSDKType {
  cosmos_address: string;
  sequence: bigint;
  account_number: bigint;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
  /** cons_address is the validator cons address to query the account for. */
  consAddress: string;
}
export interface QueryValidatorAccountRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryValidatorAccountRequest';
  value: Uint8Array;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestAmino {
  /** cons_address is the validator cons address to query the account for. */
  cons_address?: string;
}
export interface QueryValidatorAccountRequestAminoMsg {
  type: 'cosmos-sdk/QueryValidatorAccountRequest';
  value: QueryValidatorAccountRequestAmino;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestSDKType {
  cons_address: string;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  accountAddress: string;
  /** sequence is the account's sequence number. */
  sequence: bigint;
  /** account_number is the account number */
  accountNumber: bigint;
}
export interface QueryValidatorAccountResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryValidatorAccountResponse';
  value: Uint8Array;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseAmino {
  /** account_address is the cosmos address of the account in bech32 format. */
  account_address?: string;
  /** sequence is the account's sequence number. */
  sequence?: string;
  /** account_number is the account number */
  account_number?: string;
}
export interface QueryValidatorAccountResponseAminoMsg {
  type: 'cosmos-sdk/QueryValidatorAccountResponse';
  value: QueryValidatorAccountResponseAmino;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseSDKType {
  account_address: string;
  sequence: bigint;
  account_number: bigint;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryBalanceRequest';
  value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
  /** address is the ethereum hex address to query the balance for. */
  address?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: 'cosmos-sdk/QueryBalanceRequest';
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
  address: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryBalanceResponse';
  value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
  /** balance is the balance of the EVM denomination. */
  balance?: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: 'cosmos-sdk/QueryBalanceResponse';
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
  balance: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}
export interface QueryStorageRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryStorageRequest';
  value: Uint8Array;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestAmino {
  /** address is the ethereum hex address to query the storage state for. */
  address?: string;
  /** key defines the key of the storage state */
  key?: string;
}
export interface QueryStorageRequestAminoMsg {
  type: 'cosmos-sdk/QueryStorageRequest';
  value: QueryStorageRequestAmino;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestSDKType {
  address: string;
  key: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** value defines the storage state value hash associated with the given key. */
  value: string;
}
export interface QueryStorageResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryStorageResponse';
  value: Uint8Array;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseAmino {
  /** value defines the storage state value hash associated with the given key. */
  value?: string;
}
export interface QueryStorageResponseAminoMsg {
  type: 'cosmos-sdk/QueryStorageResponse';
  value: QueryStorageResponseAmino;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseSDKType {
  value: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryCodeRequest';
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestAmino {
  /** address is the ethereum hex address to query the code for. */
  address?: string;
}
export interface QueryCodeRequestAminoMsg {
  type: 'cosmos-sdk/QueryCodeRequest';
  value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
  address: string;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryCodeResponse';
  value: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseAmino {
  /** code represents the code bytes from an ethereum address. */
  code?: string;
}
export interface QueryCodeResponseAminoMsg {
  type: 'cosmos-sdk/QueryCodeResponse';
  value: QueryCodeResponseAmino;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseSDKType {
  code: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTxLogsRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryTxLogsRequest';
  value: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestAmino {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryTxLogsRequestAminoMsg {
  type: 'cosmos-sdk/QueryTxLogsRequest';
  value: QueryTxLogsRequestAmino;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestSDKType {
  hash: string;
  pagination?: PageRequestSDKType;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryTxLogsResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryTxLogsResponse';
  value: Uint8Array;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseAmino {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs?: LogAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryTxLogsResponseAminoMsg {
  type: 'cosmos-sdk/QueryTxLogsResponse';
  value: QueryTxLogsResponseAmino;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseSDKType {
  logs: LogSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest defines the request type for querying x/vm parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/vm parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: 'cosmos-sdk/QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/vm parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/vm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/vm parameters. */
export interface QueryParamsResponseAmino {
  /** params define the evm module parameters. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: 'cosmos-sdk/QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/vm parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
  /** args uses the same json format as the json rpc api. */
  args: Uint8Array;
  /** gas_cap defines the default gas cap to be used */
  gasCap: bigint;
  /** proposer_address of the requested block in hex format */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: bigint;
}
export interface EthCallRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.EthCallRequest';
  value: Uint8Array;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestAmino {
  /** args uses the same json format as the json rpc api. */
  args?: string;
  /** gas_cap defines the default gas cap to be used */
  gas_cap?: string;
  /** proposer_address of the requested block in hex format */
  proposer_address?: string;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chain_id?: string;
}
export interface EthCallRequestAminoMsg {
  type: 'cosmos-sdk/EthCallRequest';
  value: EthCallRequestAmino;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestSDKType {
  args: Uint8Array;
  gas_cap: bigint;
  proposer_address: Uint8Array;
  chain_id: bigint;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
  /** gas returns the estimated gas */
  gas: bigint;
  /**
   * ret is the returned data from evm function (result or data supplied with
   * revert opcode)
   */
  ret: Uint8Array;
  /** vm_error is the error returned by vm execution */
  vmError: string;
}
export interface EstimateGasResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.EstimateGasResponse';
  value: Uint8Array;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseAmino {
  /** gas returns the estimated gas */
  gas?: string;
  /**
   * ret is the returned data from evm function (result or data supplied with
   * revert opcode)
   */
  ret?: string;
  /** vm_error is the error returned by vm execution */
  vm_error?: string;
}
export interface EstimateGasResponseAminoMsg {
  type: 'cosmos-sdk/EstimateGasResponse';
  value: EstimateGasResponseAmino;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseSDKType {
  gas: bigint;
  ret: Uint8Array;
  vm_error: string;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
  /** msg is the MsgEthereumTx for the requested transaction */
  msg?: MsgEthereumTx;
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /**
   * predecessors is an array of transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTx[];
  /** block_number of requested transaction */
  blockNumber: bigint;
  /** block_hash of requested transaction */
  blockHash: string;
  /** block_time of requested transaction */
  blockTime: Date;
  /** proposer_address is the proposer of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: bigint;
  /** block_max_gas of the block of the requested transaction */
  blockMaxGas: bigint;
}
export interface QueryTraceTxRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceTxRequest';
  value: Uint8Array;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestAmino {
  /** msg is the MsgEthereumTx for the requested transaction */
  msg?: MsgEthereumTxAmino;
  /** trace_config holds extra parameters to trace functions. */
  trace_config?: TraceConfigAmino;
  /**
   * predecessors is an array of transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors?: MsgEthereumTxAmino[];
  /** block_number of requested transaction */
  block_number?: string;
  /** block_hash of requested transaction */
  block_hash?: string;
  /** block_time of requested transaction */
  block_time: string;
  /** proposer_address is the proposer of the requested block */
  proposer_address?: string;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chain_id?: string;
  /** block_max_gas of the block of the requested transaction */
  block_max_gas?: string;
}
export interface QueryTraceTxRequestAminoMsg {
  type: 'cosmos-sdk/QueryTraceTxRequest';
  value: QueryTraceTxRequestAmino;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestSDKType {
  msg?: MsgEthereumTxSDKType;
  trace_config?: TraceConfigSDKType;
  predecessors: MsgEthereumTxSDKType[];
  block_number: bigint;
  block_hash: string;
  block_time: Date;
  proposer_address: Uint8Array;
  chain_id: bigint;
  block_max_gas: bigint;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}
export interface QueryTraceTxResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceTxResponse';
  value: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseAmino {
  /** data is the response serialized in bytes */
  data?: string;
}
export interface QueryTraceTxResponseAminoMsg {
  type: 'cosmos-sdk/QueryTraceTxResponse';
  value: QueryTraceTxResponseAmino;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseSDKType {
  data: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
  /** txs is an array of messages in the block */
  txs: MsgEthereumTx[];
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /** block_number of the traced block */
  blockNumber: bigint;
  /** block_hash (hex) of the traced block */
  blockHash: string;
  /** block_time of the traced block */
  blockTime: Date;
  /** proposer_address is the address of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: bigint;
  /** block_max_gas of the traced block */
  blockMaxGas: bigint;
}
export interface QueryTraceBlockRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceBlockRequest';
  value: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestAmino {
  /** txs is an array of messages in the block */
  txs?: MsgEthereumTxAmino[];
  /** trace_config holds extra parameters to trace functions. */
  trace_config?: TraceConfigAmino;
  /** block_number of the traced block */
  block_number?: string;
  /** block_hash (hex) of the traced block */
  block_hash?: string;
  /** block_time of the traced block */
  block_time: string;
  /** proposer_address is the address of the requested block */
  proposer_address?: string;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chain_id?: string;
  /** block_max_gas of the traced block */
  block_max_gas?: string;
}
export interface QueryTraceBlockRequestAminoMsg {
  type: 'cosmos-sdk/QueryTraceBlockRequest';
  value: QueryTraceBlockRequestAmino;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestSDKType {
  txs: MsgEthereumTxSDKType[];
  trace_config?: TraceConfigSDKType;
  block_number: bigint;
  block_hash: string;
  block_time: Date;
  proposer_address: Uint8Array;
  chain_id: bigint;
  block_max_gas: bigint;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}
export interface QueryTraceBlockResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceBlockResponse';
  value: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseAmino {
  /** data is the response serialized in bytes */
  data?: string;
}
export interface QueryTraceBlockResponseAminoMsg {
  type: 'cosmos-sdk/QueryTraceBlockResponse';
  value: QueryTraceBlockResponseAmino;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseSDKType {
  data: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {}
export interface QueryBaseFeeRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryBaseFeeRequest';
  value: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestAmino {}
export interface QueryBaseFeeRequestAminoMsg {
  type: 'cosmos-sdk/QueryBaseFeeRequest';
  value: QueryBaseFeeRequestAmino;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestSDKType {}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
  /** base_fee is the EIP1559 base fee */
  baseFee: string;
}
export interface QueryBaseFeeResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryBaseFeeResponse';
  value: Uint8Array;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseAmino {
  /** base_fee is the EIP1559 base fee */
  base_fee?: string;
}
export interface QueryBaseFeeResponseAminoMsg {
  type: 'cosmos-sdk/QueryBaseFeeResponse';
  value: QueryBaseFeeResponseAmino;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseSDKType {
  base_fee: string;
}
/**
 * QueryGlobalMinGasPriceRequest defines the request type for querying the
 * GlobalMinGasPrice
 */
export interface QueryGlobalMinGasPriceRequest {}
export interface QueryGlobalMinGasPriceRequestProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryGlobalMinGasPriceRequest';
  value: Uint8Array;
}
/**
 * QueryGlobalMinGasPriceRequest defines the request type for querying the
 * GlobalMinGasPrice
 */
export interface QueryGlobalMinGasPriceRequestAmino {}
export interface QueryGlobalMinGasPriceRequestAminoMsg {
  type: 'cosmos-sdk/QueryGlobalMinGasPriceRequest';
  value: QueryGlobalMinGasPriceRequestAmino;
}
/**
 * QueryGlobalMinGasPriceRequest defines the request type for querying the
 * GlobalMinGasPrice
 */
export interface QueryGlobalMinGasPriceRequestSDKType {}
/** QueryGlobalMinGasPriceResponse returns the GlobalMinGasPrice */
export interface QueryGlobalMinGasPriceResponse {
  /** min_gas_price is the feemarket's min_gas_price */
  minGasPrice: string;
}
export interface QueryGlobalMinGasPriceResponseProtoMsg {
  typeUrl: '/cosmos.evm.vm.v1.QueryGlobalMinGasPriceResponse';
  value: Uint8Array;
}
/** QueryGlobalMinGasPriceResponse returns the GlobalMinGasPrice */
export interface QueryGlobalMinGasPriceResponseAmino {
  /** min_gas_price is the feemarket's min_gas_price */
  min_gas_price?: string;
}
export interface QueryGlobalMinGasPriceResponseAminoMsg {
  type: 'cosmos-sdk/QueryGlobalMinGasPriceResponse';
  value: QueryGlobalMinGasPriceResponseAmino;
}
/** QueryGlobalMinGasPriceResponse returns the GlobalMinGasPrice */
export interface QueryGlobalMinGasPriceResponseSDKType {
  min_gas_price: string;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryConfigRequest',
  encode(
    _: QueryConfigRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryConfigRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
  fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  toAmino(_: QueryConfigRequest): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryConfigRequest',
      value: QueryConfigRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryConfigRequest',
      value: QueryConfigRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined,
  };
}
export const QueryConfigResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryConfigResponse',
  encode(
    message: QueryConfigResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.config !== undefined) {
      ChainConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryConfigResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ChainConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config =
      object.config !== undefined && object.config !== null
        ? ChainConfig.fromPartial(object.config)
        : undefined;
    return message;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = ChainConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryConfigResponse): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config
      ? ChainConfig.toAmino(message.config)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryConfigResponse',
      value: QueryConfigResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryConfigResponse',
      value: QueryConfigResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: '',
  };
}
export const QueryAccountRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryAccountRequest',
  encode(
    message: QueryAccountRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryAccountRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryAccountRequest',
      value: QueryAccountRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryAccountRequest',
      value: QueryAccountRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    balance: '',
    codeHash: '',
    nonce: BigInt(0),
  };
}
export const QueryAccountResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryAccountResponse',
  encode(
    message: QueryAccountResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.balance !== '') {
      writer.uint32(10).string(message.balance);
    }
    if (message.codeHash !== '') {
      writer.uint32(18).string(message.codeHash);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryAccountResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.codeHash = reader.string();
          break;
        case 3:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.balance = object.balance ?? '';
    message.codeHash = object.codeHash ?? '';
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? BigInt(object.nonce.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = object.code_hash;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: QueryAccountResponse): QueryAccountResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === '' ? undefined : message.balance;
    obj.code_hash = message.codeHash === '' ? undefined : message.codeHash;
    obj.nonce =
      message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse {
    return QueryAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryAccountResponse',
      value: QueryAccountResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message: QueryAccountResponse): Uint8Array {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryAccountResponse',
      value: QueryAccountResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCosmosAccountRequest(): QueryCosmosAccountRequest {
  return {
    address: '',
  };
}
export const QueryCosmosAccountRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryCosmosAccountRequest',
  encode(
    message: QueryCosmosAccountRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryCosmosAccountRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryCosmosAccountRequest>
  ): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryCosmosAccountRequestAmino): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(
    object: QueryCosmosAccountRequestAminoMsg
  ): QueryCosmosAccountRequest {
    return QueryCosmosAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryCosmosAccountRequest
  ): QueryCosmosAccountRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryCosmosAccountRequest',
      value: QueryCosmosAccountRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryCosmosAccountRequestProtoMsg
  ): QueryCosmosAccountRequest {
    return QueryCosmosAccountRequest.decode(message.value);
  },
  toProto(message: QueryCosmosAccountRequest): Uint8Array {
    return QueryCosmosAccountRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryCosmosAccountRequest
  ): QueryCosmosAccountRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryCosmosAccountRequest',
      value: QueryCosmosAccountRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCosmosAccountResponse(): QueryCosmosAccountResponse {
  return {
    cosmosAddress: '',
    sequence: BigInt(0),
    accountNumber: BigInt(0),
  };
}
export const QueryCosmosAccountResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryCosmosAccountResponse',
  encode(
    message: QueryCosmosAccountResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.cosmosAddress !== '') {
      writer.uint32(10).string(message.cosmosAddress);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryCosmosAccountResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosAddress = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryCosmosAccountResponse>
  ): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    message.cosmosAddress = object.cosmosAddress ?? '';
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? BigInt(object.sequence.toString())
        : BigInt(0);
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? BigInt(object.accountNumber.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: QueryCosmosAccountResponseAmino
  ): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmosAddress = object.cosmos_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(
    message: QueryCosmosAccountResponse
  ): QueryCosmosAccountResponseAmino {
    const obj: any = {};
    obj.cosmos_address =
      message.cosmosAddress === '' ? undefined : message.cosmosAddress;
    obj.sequence =
      message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.account_number =
      message.accountNumber !== BigInt(0)
        ? message.accountNumber?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryCosmosAccountResponseAminoMsg
  ): QueryCosmosAccountResponse {
    return QueryCosmosAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryCosmosAccountResponse
  ): QueryCosmosAccountResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryCosmosAccountResponse',
      value: QueryCosmosAccountResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryCosmosAccountResponseProtoMsg
  ): QueryCosmosAccountResponse {
    return QueryCosmosAccountResponse.decode(message.value);
  },
  toProto(message: QueryCosmosAccountResponse): Uint8Array {
    return QueryCosmosAccountResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryCosmosAccountResponse
  ): QueryCosmosAccountResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryCosmosAccountResponse',
      value: QueryCosmosAccountResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryValidatorAccountRequest(): QueryValidatorAccountRequest {
  return {
    consAddress: '',
  };
}
export const QueryValidatorAccountRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryValidatorAccountRequest',
  encode(
    message: QueryValidatorAccountRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.consAddress !== '') {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryValidatorAccountRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryValidatorAccountRequest>
  ): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    message.consAddress = object.consAddress ?? '';
    return message;
  },
  fromAmino(
    object: QueryValidatorAccountRequestAmino
  ): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.consAddress = object.cons_address;
    }
    return message;
  },
  toAmino(
    message: QueryValidatorAccountRequest
  ): QueryValidatorAccountRequestAmino {
    const obj: any = {};
    obj.cons_address =
      message.consAddress === '' ? undefined : message.consAddress;
    return obj;
  },
  fromAminoMsg(
    object: QueryValidatorAccountRequestAminoMsg
  ): QueryValidatorAccountRequest {
    return QueryValidatorAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryValidatorAccountRequest
  ): QueryValidatorAccountRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryValidatorAccountRequest',
      value: QueryValidatorAccountRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryValidatorAccountRequestProtoMsg
  ): QueryValidatorAccountRequest {
    return QueryValidatorAccountRequest.decode(message.value);
  },
  toProto(message: QueryValidatorAccountRequest): Uint8Array {
    return QueryValidatorAccountRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryValidatorAccountRequest
  ): QueryValidatorAccountRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryValidatorAccountRequest',
      value: QueryValidatorAccountRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryValidatorAccountResponse(): QueryValidatorAccountResponse {
  return {
    accountAddress: '',
    sequence: BigInt(0),
    accountNumber: BigInt(0),
  };
}
export const QueryValidatorAccountResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryValidatorAccountResponse',
  encode(
    message: QueryValidatorAccountResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.accountAddress !== '') {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryValidatorAccountResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryValidatorAccountResponse>
  ): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    message.accountAddress = object.accountAddress ?? '';
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? BigInt(object.sequence.toString())
        : BigInt(0);
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? BigInt(object.accountNumber.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: QueryValidatorAccountResponseAmino
  ): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    if (
      object.account_address !== undefined &&
      object.account_address !== null
    ) {
      message.accountAddress = object.account_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(
    message: QueryValidatorAccountResponse
  ): QueryValidatorAccountResponseAmino {
    const obj: any = {};
    obj.account_address =
      message.accountAddress === '' ? undefined : message.accountAddress;
    obj.sequence =
      message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.account_number =
      message.accountNumber !== BigInt(0)
        ? message.accountNumber?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryValidatorAccountResponseAminoMsg
  ): QueryValidatorAccountResponse {
    return QueryValidatorAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryValidatorAccountResponse
  ): QueryValidatorAccountResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryValidatorAccountResponse',
      value: QueryValidatorAccountResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryValidatorAccountResponseProtoMsg
  ): QueryValidatorAccountResponse {
    return QueryValidatorAccountResponse.decode(message.value);
  },
  toProto(message: QueryValidatorAccountResponse): Uint8Array {
    return QueryValidatorAccountResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryValidatorAccountResponse
  ): QueryValidatorAccountResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryValidatorAccountResponse',
      value: QueryValidatorAccountResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: '',
  };
}
export const QueryBalanceRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryBalanceRequest',
  encode(
    message: QueryBalanceRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryBalanceRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryBalanceRequest',
      value: QueryBalanceRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryBalanceRequest',
      value: QueryBalanceRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: '',
  };
}
export const QueryBalanceResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryBalanceResponse',
  encode(
    message: QueryBalanceResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.balance !== '') {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryBalanceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? '';
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === '' ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryBalanceResponse',
      value: QueryBalanceResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryBalanceResponse',
      value: QueryBalanceResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryStorageRequest(): QueryStorageRequest {
  return {
    address: '',
    key: '',
  };
}
export const QueryStorageRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryStorageRequest',
  encode(
    message: QueryStorageRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== '') {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryStorageRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    message.address = object.address ?? '';
    message.key = object.key ?? '';
    return message;
  },
  fromAmino(object: QueryStorageRequestAmino): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryStorageRequest): QueryStorageRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    obj.key = message.key === '' ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryStorageRequestAminoMsg): QueryStorageRequest {
    return QueryStorageRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryStorageRequest): QueryStorageRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryStorageRequest',
      value: QueryStorageRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryStorageRequestProtoMsg): QueryStorageRequest {
    return QueryStorageRequest.decode(message.value);
  },
  toProto(message: QueryStorageRequest): Uint8Array {
    return QueryStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageRequest): QueryStorageRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryStorageRequest',
      value: QueryStorageRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryStorageResponse(): QueryStorageResponse {
  return {
    value: '',
  };
}
export const QueryStorageResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryStorageResponse',
  encode(
    message: QueryStorageResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryStorageResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: QueryStorageResponseAmino): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryStorageResponse): QueryStorageResponseAmino {
    const obj: any = {};
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QueryStorageResponseAminoMsg): QueryStorageResponse {
    return QueryStorageResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryStorageResponse): QueryStorageResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryStorageResponse',
      value: QueryStorageResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryStorageResponseProtoMsg): QueryStorageResponse {
    return QueryStorageResponse.decode(message.value);
  },
  toProto(message: QueryStorageResponse): Uint8Array {
    return QueryStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageResponse): QueryStorageResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryStorageResponse',
      value: QueryStorageResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    address: '',
  };
}
export const QueryCodeRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryCodeRequest',
  encode(
    message: QueryCodeRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryCodeRequest',
      value: QueryCodeRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryCodeRequest',
      value: QueryCodeRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    code: new Uint8Array(),
  };
}
export const QueryCodeResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryCodeResponse',
  encode(
    message: QueryCodeResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.code = object.code ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryCodeResponse',
      value: QueryCodeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryCodeResponse',
      value: QueryCodeResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryTxLogsRequest(): QueryTxLogsRequest {
  return {
    hash: '',
    pagination: undefined,
  };
}
export const QueryTxLogsRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryTxLogsRequest',
  encode(
    message: QueryTxLogsRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryTxLogsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    message.hash = object.hash ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryTxLogsRequestAmino): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTxLogsRequest): QueryTxLogsRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === '' ? undefined : message.hash;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxLogsRequestAminoMsg): QueryTxLogsRequest {
    return QueryTxLogsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTxLogsRequest): QueryTxLogsRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryTxLogsRequest',
      value: QueryTxLogsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryTxLogsRequestProtoMsg): QueryTxLogsRequest {
    return QueryTxLogsRequest.decode(message.value);
  },
  toProto(message: QueryTxLogsRequest): Uint8Array {
    return QueryTxLogsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxLogsRequest): QueryTxLogsRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryTxLogsRequest',
      value: QueryTxLogsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryTxLogsResponse(): QueryTxLogsResponse {
  return {
    logs: [],
    pagination: undefined,
  };
}
export const QueryTxLogsResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryTxLogsResponse',
  encode(
    message: QueryTxLogsResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryTxLogsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryTxLogsResponseAmino): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map((e) => Log.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTxLogsResponse): QueryTxLogsResponseAmino {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toAmino(e) : undefined));
    } else {
      obj.logs = message.logs;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxLogsResponseAminoMsg): QueryTxLogsResponse {
    return QueryTxLogsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTxLogsResponse): QueryTxLogsResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryTxLogsResponse',
      value: QueryTxLogsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryTxLogsResponseProtoMsg): QueryTxLogsResponse {
    return QueryTxLogsResponse.decode(message.value);
  },
  toProto(message: QueryTxLogsResponse): Uint8Array {
    return QueryTxLogsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxLogsResponse): QueryTxLogsResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryTxLogsResponse',
      value: QueryTxLogsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryParamsRequest',
  encode(
    _: QueryParamsRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryParamsRequest',
      value: QueryParamsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryParamsResponse',
  encode(
    message: QueryParamsResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
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
    obj.params = message.params
      ? Params.toAmino(message.params)
      : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryParamsResponse',
      value: QueryParamsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseEthCallRequest(): EthCallRequest {
  return {
    args: new Uint8Array(),
    gasCap: BigInt(0),
    proposerAddress: new Uint8Array(),
    chainId: BigInt(0),
  };
}
export const EthCallRequest = {
  typeUrl: '/cosmos.evm.vm.v1.EthCallRequest',
  encode(
    message: EthCallRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (message.gasCap !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasCap);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(26).bytes(message.proposerAddress);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).int64(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EthCallRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthCallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args = reader.bytes();
          break;
        case 2:
          message.gasCap = reader.uint64();
          break;
        case 3:
          message.proposerAddress = reader.bytes();
          break;
        case 4:
          message.chainId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EthCallRequest>): EthCallRequest {
    const message = createBaseEthCallRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap =
      object.gasCap !== undefined && object.gasCap !== null
        ? BigInt(object.gasCap.toString())
        : BigInt(0);
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? BigInt(object.chainId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: EthCallRequestAmino): EthCallRequest {
    const message = createBaseEthCallRequest();
    if (object.args !== undefined && object.args !== null) {
      message.args = bytesFromBase64(object.args);
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gasCap = BigInt(object.gas_cap);
    }
    if (
      object.proposer_address !== undefined &&
      object.proposer_address !== null
    ) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: EthCallRequest): EthCallRequestAmino {
    const obj: any = {};
    obj.args = message.args ? base64FromBytes(message.args) : undefined;
    obj.gas_cap =
      message.gasCap !== BigInt(0) ? message.gasCap?.toString() : undefined;
    obj.proposer_address = message.proposerAddress
      ? base64FromBytes(message.proposerAddress)
      : undefined;
    obj.chain_id =
      message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EthCallRequestAminoMsg): EthCallRequest {
    return EthCallRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EthCallRequest): EthCallRequestAminoMsg {
    return {
      type: 'cosmos-sdk/EthCallRequest',
      value: EthCallRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: EthCallRequestProtoMsg): EthCallRequest {
    return EthCallRequest.decode(message.value);
  },
  toProto(message: EthCallRequest): Uint8Array {
    return EthCallRequest.encode(message).finish();
  },
  toProtoMsg(message: EthCallRequest): EthCallRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.EthCallRequest',
      value: EthCallRequest.encode(message).finish(),
    };
  },
};
function createBaseEstimateGasResponse(): EstimateGasResponse {
  return {
    gas: BigInt(0),
    ret: new Uint8Array(),
    vmError: '',
  };
}
export const EstimateGasResponse = {
  typeUrl: '/cosmos.evm.vm.v1.EstimateGasResponse',
  encode(
    message: EstimateGasResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.gas !== BigInt(0)) {
      writer.uint32(8).uint64(message.gas);
    }
    if (message.ret.length !== 0) {
      writer.uint32(18).bytes(message.ret);
    }
    if (message.vmError !== '') {
      writer.uint32(26).string(message.vmError);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EstimateGasResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateGasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = reader.uint64();
          break;
        case 2:
          message.ret = reader.bytes();
          break;
        case 3:
          message.vmError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateGasResponse>): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    message.gas =
      object.gas !== undefined && object.gas !== null
        ? BigInt(object.gas.toString())
        : BigInt(0);
    message.ret = object.ret ?? new Uint8Array();
    message.vmError = object.vmError ?? '';
    return message;
  },
  fromAmino(object: EstimateGasResponseAmino): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = BigInt(object.gas);
    }
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = bytesFromBase64(object.ret);
    }
    if (object.vm_error !== undefined && object.vm_error !== null) {
      message.vmError = object.vm_error;
    }
    return message;
  },
  toAmino(message: EstimateGasResponse): EstimateGasResponseAmino {
    const obj: any = {};
    obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
    obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
    obj.vm_error = message.vmError === '' ? undefined : message.vmError;
    return obj;
  },
  fromAminoMsg(object: EstimateGasResponseAminoMsg): EstimateGasResponse {
    return EstimateGasResponse.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateGasResponse): EstimateGasResponseAminoMsg {
    return {
      type: 'cosmos-sdk/EstimateGasResponse',
      value: EstimateGasResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: EstimateGasResponseProtoMsg): EstimateGasResponse {
    return EstimateGasResponse.decode(message.value);
  },
  toProto(message: EstimateGasResponse): Uint8Array {
    return EstimateGasResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateGasResponse): EstimateGasResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.EstimateGasResponse',
      value: EstimateGasResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryTraceTxRequest(): QueryTraceTxRequest {
  return {
    msg: undefined,
    traceConfig: undefined,
    predecessors: [],
    blockNumber: BigInt(0),
    blockHash: '',
    blockTime: new Date(),
    proposerAddress: new Uint8Array(),
    chainId: BigInt(0),
    blockMaxGas: BigInt(0),
  };
}
export const QueryTraceTxRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceTxRequest',
  encode(
    message: QueryTraceTxRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(
        message.traceConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== '') {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(72).int64(message.chainId);
    }
    if (message.blockMaxGas !== BigInt(0)) {
      writer.uint32(80).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryTraceTxRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgEthereumTx.decode(reader, reader.uint32());
          break;
        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.predecessors.push(
            MsgEthereumTx.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.blockNumber = reader.int64();
          break;
        case 6:
          message.blockHash = reader.string();
          break;
        case 7:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        case 9:
          message.chainId = reader.int64();
          break;
        case 10:
          message.blockMaxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MsgEthereumTx.fromPartial(object.msg)
        : undefined;
    message.traceConfig =
      object.traceConfig !== undefined && object.traceConfig !== null
        ? TraceConfig.fromPartial(object.traceConfig)
        : undefined;
    message.predecessors =
      object.predecessors?.map((e) => MsgEthereumTx.fromPartial(e)) || [];
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? BigInt(object.blockNumber.toString())
        : BigInt(0);
    message.blockHash = object.blockHash ?? '';
    message.blockTime = object.blockTime ?? undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? BigInt(object.chainId.toString())
        : BigInt(0);
    message.blockMaxGas =
      object.blockMaxGas !== undefined && object.blockMaxGas !== null
        ? BigInt(object.blockMaxGas.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTraceTxRequestAmino): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgEthereumTx.fromAmino(object.msg);
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    message.predecessors =
      object.predecessors?.map((e) => MsgEthereumTx.fromAmino(e)) || [];
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = BigInt(object.block_number);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    if (
      object.proposer_address !== undefined &&
      object.proposer_address !== null
    ) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
      message.blockMaxGas = BigInt(object.block_max_gas);
    }
    return message;
  },
  toAmino(message: QueryTraceTxRequest): QueryTraceTxRequestAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgEthereumTx.toAmino(message.msg) : undefined;
    obj.trace_config = message.traceConfig
      ? TraceConfig.toAmino(message.traceConfig)
      : undefined;
    if (message.predecessors) {
      obj.predecessors = message.predecessors.map((e) =>
        e ? MsgEthereumTx.toAmino(e) : undefined
      );
    } else {
      obj.predecessors = message.predecessors;
    }
    obj.block_number =
      message.blockNumber !== BigInt(0)
        ? message.blockNumber?.toString()
        : undefined;
    obj.block_hash = message.blockHash === '' ? undefined : message.blockHash;
    obj.block_time = message.blockTime
      ? Timestamp.toAmino(toTimestamp(message.blockTime))
      : new Date();
    obj.proposer_address = message.proposerAddress
      ? base64FromBytes(message.proposerAddress)
      : undefined;
    obj.chain_id =
      message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    obj.block_max_gas =
      message.blockMaxGas !== BigInt(0)
        ? message.blockMaxGas?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceTxRequestAminoMsg): QueryTraceTxRequest {
    return QueryTraceTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTraceTxRequest): QueryTraceTxRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryTraceTxRequest',
      value: QueryTraceTxRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryTraceTxRequestProtoMsg): QueryTraceTxRequest {
    return QueryTraceTxRequest.decode(message.value);
  },
  toProto(message: QueryTraceTxRequest): Uint8Array {
    return QueryTraceTxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceTxRequest): QueryTraceTxRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryTraceTxRequest',
      value: QueryTraceTxRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryTraceTxResponse(): QueryTraceTxResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QueryTraceTxResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceTxResponse',
  encode(
    message: QueryTraceTxResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryTraceTxResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTraceTxResponseAmino): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryTraceTxResponse): QueryTraceTxResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceTxResponseAminoMsg): QueryTraceTxResponse {
    return QueryTraceTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTraceTxResponse): QueryTraceTxResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryTraceTxResponse',
      value: QueryTraceTxResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryTraceTxResponseProtoMsg): QueryTraceTxResponse {
    return QueryTraceTxResponse.decode(message.value);
  },
  toProto(message: QueryTraceTxResponse): Uint8Array {
    return QueryTraceTxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceTxResponse): QueryTraceTxResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryTraceTxResponse',
      value: QueryTraceTxResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryTraceBlockRequest(): QueryTraceBlockRequest {
  return {
    txs: [],
    traceConfig: undefined,
    blockNumber: BigInt(0),
    blockHash: '',
    blockTime: new Date(),
    proposerAddress: new Uint8Array(),
    chainId: BigInt(0),
    blockMaxGas: BigInt(0),
  };
}
export const QueryTraceBlockRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceBlockRequest',
  encode(
    message: QueryTraceBlockRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(
        message.traceConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== '') {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(72).int64(message.chainId);
    }
    if (message.blockMaxGas !== BigInt(0)) {
      writer.uint32(80).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryTraceBlockRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;
        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockNumber = reader.int64();
          break;
        case 6:
          message.blockHash = reader.string();
          break;
        case 7:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        case 9:
          message.chainId = reader.int64();
          break;
        case 10:
          message.blockMaxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceBlockRequest>): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map((e) => MsgEthereumTx.fromPartial(e)) || [];
    message.traceConfig =
      object.traceConfig !== undefined && object.traceConfig !== null
        ? TraceConfig.fromPartial(object.traceConfig)
        : undefined;
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? BigInt(object.blockNumber.toString())
        : BigInt(0);
    message.blockHash = object.blockHash ?? '';
    message.blockTime = object.blockTime ?? undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? BigInt(object.chainId.toString())
        : BigInt(0);
    message.blockMaxGas =
      object.blockMaxGas !== undefined && object.blockMaxGas !== null
        ? BigInt(object.blockMaxGas.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTraceBlockRequestAmino): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map((e) => MsgEthereumTx.fromAmino(e)) || [];
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = BigInt(object.block_number);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    if (
      object.proposer_address !== undefined &&
      object.proposer_address !== null
    ) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
      message.blockMaxGas = BigInt(object.block_max_gas);
    }
    return message;
  },
  toAmino(message: QueryTraceBlockRequest): QueryTraceBlockRequestAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        e ? MsgEthereumTx.toAmino(e) : undefined
      );
    } else {
      obj.txs = message.txs;
    }
    obj.trace_config = message.traceConfig
      ? TraceConfig.toAmino(message.traceConfig)
      : undefined;
    obj.block_number =
      message.blockNumber !== BigInt(0)
        ? message.blockNumber?.toString()
        : undefined;
    obj.block_hash = message.blockHash === '' ? undefined : message.blockHash;
    obj.block_time = message.blockTime
      ? Timestamp.toAmino(toTimestamp(message.blockTime))
      : new Date();
    obj.proposer_address = message.proposerAddress
      ? base64FromBytes(message.proposerAddress)
      : undefined;
    obj.chain_id =
      message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    obj.block_max_gas =
      message.blockMaxGas !== BigInt(0)
        ? message.blockMaxGas?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceBlockRequestAminoMsg): QueryTraceBlockRequest {
    return QueryTraceBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTraceBlockRequest): QueryTraceBlockRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryTraceBlockRequest',
      value: QueryTraceBlockRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryTraceBlockRequestProtoMsg
  ): QueryTraceBlockRequest {
    return QueryTraceBlockRequest.decode(message.value);
  },
  toProto(message: QueryTraceBlockRequest): Uint8Array {
    return QueryTraceBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceBlockRequest): QueryTraceBlockRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryTraceBlockRequest',
      value: QueryTraceBlockRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryTraceBlockResponse(): QueryTraceBlockResponse {
  return {
    data: new Uint8Array(),
  };
}
export const QueryTraceBlockResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryTraceBlockResponse',
  encode(
    message: QueryTraceBlockResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryTraceBlockResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryTraceBlockResponse>
  ): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTraceBlockResponseAmino): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryTraceBlockResponse): QueryTraceBlockResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryTraceBlockResponseAminoMsg
  ): QueryTraceBlockResponse {
    return QueryTraceBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryTraceBlockResponse
  ): QueryTraceBlockResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryTraceBlockResponse',
      value: QueryTraceBlockResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryTraceBlockResponseProtoMsg
  ): QueryTraceBlockResponse {
    return QueryTraceBlockResponse.decode(message.value);
  },
  toProto(message: QueryTraceBlockResponse): Uint8Array {
    return QueryTraceBlockResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryTraceBlockResponse
  ): QueryTraceBlockResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryTraceBlockResponse',
      value: QueryTraceBlockResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryBaseFeeRequest(): QueryBaseFeeRequest {
  return {};
}
export const QueryBaseFeeRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryBaseFeeRequest',
  encode(
    _: QueryBaseFeeRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryBaseFeeRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeRequest();
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
  fromPartial(_: Partial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  },
  fromAmino(_: QueryBaseFeeRequestAmino): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  },
  toAmino(_: QueryBaseFeeRequest): QueryBaseFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBaseFeeRequestAminoMsg): QueryBaseFeeRequest {
    return QueryBaseFeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBaseFeeRequest): QueryBaseFeeRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryBaseFeeRequest',
      value: QueryBaseFeeRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBaseFeeRequestProtoMsg): QueryBaseFeeRequest {
    return QueryBaseFeeRequest.decode(message.value);
  },
  toProto(message: QueryBaseFeeRequest): Uint8Array {
    return QueryBaseFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseFeeRequest): QueryBaseFeeRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryBaseFeeRequest',
      value: QueryBaseFeeRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBaseFeeResponse(): QueryBaseFeeResponse {
  return {
    baseFee: '',
  };
}
export const QueryBaseFeeResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryBaseFeeResponse',
  encode(
    message: QueryBaseFeeResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.baseFee !== '') {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryBaseFeeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    message.baseFee = object.baseFee ?? '';
    return message;
  },
  fromAmino(object: QueryBaseFeeResponseAmino): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    return message;
  },
  toAmino(message: QueryBaseFeeResponse): QueryBaseFeeResponseAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee === '' ? undefined : message.baseFee;
    return obj;
  },
  fromAminoMsg(object: QueryBaseFeeResponseAminoMsg): QueryBaseFeeResponse {
    return QueryBaseFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBaseFeeResponse): QueryBaseFeeResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryBaseFeeResponse',
      value: QueryBaseFeeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBaseFeeResponseProtoMsg): QueryBaseFeeResponse {
    return QueryBaseFeeResponse.decode(message.value);
  },
  toProto(message: QueryBaseFeeResponse): Uint8Array {
    return QueryBaseFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseFeeResponse): QueryBaseFeeResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryBaseFeeResponse',
      value: QueryBaseFeeResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryGlobalMinGasPriceRequest(): QueryGlobalMinGasPriceRequest {
  return {};
}
export const QueryGlobalMinGasPriceRequest = {
  typeUrl: '/cosmos.evm.vm.v1.QueryGlobalMinGasPriceRequest',
  encode(
    _: QueryGlobalMinGasPriceRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryGlobalMinGasPriceRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalMinGasPriceRequest();
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
  fromPartial(
    _: Partial<QueryGlobalMinGasPriceRequest>
  ): QueryGlobalMinGasPriceRequest {
    const message = createBaseQueryGlobalMinGasPriceRequest();
    return message;
  },
  fromAmino(
    _: QueryGlobalMinGasPriceRequestAmino
  ): QueryGlobalMinGasPriceRequest {
    const message = createBaseQueryGlobalMinGasPriceRequest();
    return message;
  },
  toAmino(
    _: QueryGlobalMinGasPriceRequest
  ): QueryGlobalMinGasPriceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryGlobalMinGasPriceRequestAminoMsg
  ): QueryGlobalMinGasPriceRequest {
    return QueryGlobalMinGasPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryGlobalMinGasPriceRequest
  ): QueryGlobalMinGasPriceRequestAminoMsg {
    return {
      type: 'cosmos-sdk/QueryGlobalMinGasPriceRequest',
      value: QueryGlobalMinGasPriceRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryGlobalMinGasPriceRequestProtoMsg
  ): QueryGlobalMinGasPriceRequest {
    return QueryGlobalMinGasPriceRequest.decode(message.value);
  },
  toProto(message: QueryGlobalMinGasPriceRequest): Uint8Array {
    return QueryGlobalMinGasPriceRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGlobalMinGasPriceRequest
  ): QueryGlobalMinGasPriceRequestProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryGlobalMinGasPriceRequest',
      value: QueryGlobalMinGasPriceRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryGlobalMinGasPriceResponse(): QueryGlobalMinGasPriceResponse {
  return {
    minGasPrice: '',
  };
}
export const QueryGlobalMinGasPriceResponse = {
  typeUrl: '/cosmos.evm.vm.v1.QueryGlobalMinGasPriceResponse',
  encode(
    message: QueryGlobalMinGasPriceResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.minGasPrice !== '') {
      writer.uint32(10).string(message.minGasPrice);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryGlobalMinGasPriceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalMinGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGlobalMinGasPriceResponse>
  ): QueryGlobalMinGasPriceResponse {
    const message = createBaseQueryGlobalMinGasPriceResponse();
    message.minGasPrice = object.minGasPrice ?? '';
    return message;
  },
  fromAmino(
    object: QueryGlobalMinGasPriceResponseAmino
  ): QueryGlobalMinGasPriceResponse {
    const message = createBaseQueryGlobalMinGasPriceResponse();
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.minGasPrice = object.min_gas_price;
    }
    return message;
  },
  toAmino(
    message: QueryGlobalMinGasPriceResponse
  ): QueryGlobalMinGasPriceResponseAmino {
    const obj: any = {};
    obj.min_gas_price =
      message.minGasPrice === '' ? undefined : message.minGasPrice;
    return obj;
  },
  fromAminoMsg(
    object: QueryGlobalMinGasPriceResponseAminoMsg
  ): QueryGlobalMinGasPriceResponse {
    return QueryGlobalMinGasPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryGlobalMinGasPriceResponse
  ): QueryGlobalMinGasPriceResponseAminoMsg {
    return {
      type: 'cosmos-sdk/QueryGlobalMinGasPriceResponse',
      value: QueryGlobalMinGasPriceResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryGlobalMinGasPriceResponseProtoMsg
  ): QueryGlobalMinGasPriceResponse {
    return QueryGlobalMinGasPriceResponse.decode(message.value);
  },
  toProto(message: QueryGlobalMinGasPriceResponse): Uint8Array {
    return QueryGlobalMinGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGlobalMinGasPriceResponse
  ): QueryGlobalMinGasPriceResponseProtoMsg {
    return {
      typeUrl: '/cosmos.evm.vm.v1.QueryGlobalMinGasPriceResponse',
      value: QueryGlobalMinGasPriceResponse.encode(message).finish(),
    };
  },
};
