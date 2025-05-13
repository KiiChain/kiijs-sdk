//@ts-nocheck
import * as _125 from "./wasm/v1/authz";
import * as _126 from "./wasm/v1/genesis";
import * as _127 from "./wasm/v1/ibc";
import * as _128 from "./wasm/v1/proposal_legacy";
import * as _129 from "./wasm/v1/query";
import * as _130 from "./wasm/v1/tx";
import * as _131 from "./wasm/v1/types";
import * as _269 from "./wasm/v1/tx.amino";
import * as _270 from "./wasm/v1/tx.registry";
import * as _271 from "./wasm/v1/query.rpc.Query";
import * as _272 from "./wasm/v1/tx.rpc.msg";
import * as _311 from "./rpc.query";
import * as _312 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._269,
      ..._270,
      ..._271,
      ..._272
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312
  };
}