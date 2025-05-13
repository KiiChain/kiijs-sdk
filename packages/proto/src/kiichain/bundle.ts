//@ts-nocheck
import * as _176 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _177 from "./tokenfactory/v1beta1/genesis";
import * as _178 from "./tokenfactory/v1beta1/params";
import * as _179 from "./tokenfactory/v1beta1/query";
import * as _180 from "./tokenfactory/v1beta1/tx";
import * as _301 from "./tokenfactory/v1beta1/tx.amino";
import * as _302 from "./tokenfactory/v1beta1/tx.registry";
import * as _303 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _304 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export namespace kiichain {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._301,
      ..._302,
      ..._303,
      ..._304
    };
  }
  export const ClientFactory = {
    ..._315,
    ..._316
  };
}