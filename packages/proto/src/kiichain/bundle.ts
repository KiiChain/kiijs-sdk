//@ts-nocheck
import * as _76 from "../epoch/epoch";
import * as _77 from "../epoch/genesis";
import * as _78 from "../epoch/params";
import * as _79 from "../epoch/query";
import * as _80 from "../epoch/tx";
import * as _81 from "../eth/tx";
import * as _82 from "../evm/config";
import * as _83 from "../evm/enums";
import * as _84 from "../evm/genesis";
import * as _85 from "../evm/gov";
import * as _86 from "../evm/params";
import * as _87 from "../evm/query";
import * as _88 from "../evm/receipt";
import * as _89 from "../evm/tx";
import * as _90 from "../evm/types";
import * as _91 from "../mint/v1beta1/genesis";
import * as _92 from "../mint/v1beta1/gov";
import * as _93 from "../mint/v1beta1/mint";
import * as _94 from "../mint/v1beta1/query";
import * as _95 from "../oracle/genesis";
import * as _96 from "../oracle/params";
import * as _97 from "../oracle/query";
import * as _98 from "../oracle/tx";
import * as _99 from "../tokenfactory/authorityMetadata";
import * as _100 from "../tokenfactory/genesis";
import * as _101 from "../tokenfactory/params";
import * as _102 from "../tokenfactory/query";
import * as _103 from "../tokenfactory/tx";
import * as _190 from "../evm/tx.amino";
import * as _191 from "../oracle/tx.amino";
import * as _192 from "../tokenfactory/tx.amino";
import * as _193 from "../evm/tx.registry";
import * as _194 from "../oracle/tx.registry";
import * as _195 from "../tokenfactory/tx.registry";
import * as _196 from "../epoch/query.rpc.Query";
import * as _197 from "../evm/query.rpc.Query";
import * as _198 from "../mint/v1beta1/query.rpc.Query";
import * as _199 from "../oracle/query.rpc.Query";
import * as _200 from "../tokenfactory/query.rpc.Query";
import * as _201 from "../evm/tx.rpc.msg";
import * as _202 from "../oracle/tx.rpc.msg";
import * as _203 from "../tokenfactory/tx.rpc.msg";
import * as _224 from "./rpc.query";
import * as _225 from "./rpc.tx";
export namespace kiichain {
  export namespace kiichain3 {
    export const epoch = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._196
    };
    export const eth = {
      ..._81
    };
    export const evm = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._190,
      ..._193,
      ..._197,
      ..._201
    };
    export const mint = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._198
    };
    export const oracle = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._191,
      ..._194,
      ..._199,
      ..._202
    };
    export const tokenfactory = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._192,
      ..._195,
      ..._200,
      ..._203
    };
  }
  export const ClientFactory = {
    ..._224,
    ..._225
  };
}