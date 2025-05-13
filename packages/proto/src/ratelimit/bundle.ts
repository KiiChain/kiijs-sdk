//@ts-nocheck
import * as _181 from "./module/v1/module";
import * as _182 from "./v1/genesis";
import * as _183 from "./v1/params";
import * as _184 from "./v1/query";
import * as _185 from "./v1/ratelimit";
import * as _186 from "./v1/tx";
import * as _305 from "./v1/tx.amino";
import * as _306 from "./v1/tx.registry";
import * as _307 from "./v1/query.rpc.Query";
import * as _308 from "./v1/tx.rpc.msg";
import * as _317 from "./rpc.query";
import * as _318 from "./rpc.tx";
export namespace ratelimit {
  export namespace module {
    export const v1 = {
      ..._181
    };
  }
  export const v1 = {
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._305,
    ..._306,
    ..._307,
    ..._308
  };
  export const ClientFactory = {
    ..._317,
    ..._318
  };
}