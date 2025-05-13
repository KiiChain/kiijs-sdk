//@ts-nocheck
import * as _138 from "./applications/interchain_accounts/controller/v1/controller";
import * as _139 from "./applications/interchain_accounts/controller/v1/query";
import * as _140 from "./applications/interchain_accounts/controller/v1/tx";
import * as _141 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _142 from "./applications/interchain_accounts/host/v1/host";
import * as _143 from "./applications/interchain_accounts/host/v1/query";
import * as _144 from "./applications/interchain_accounts/host/v1/tx";
import * as _145 from "./applications/interchain_accounts/v1/account";
import * as _146 from "./applications/interchain_accounts/v1/metadata";
import * as _147 from "./applications/interchain_accounts/v1/packet";
import * as _148 from "./applications/transfer/v1/authz";
import * as _149 from "./applications/transfer/v1/genesis";
import * as _150 from "./applications/transfer/v1/query";
import * as _151 from "./applications/transfer/v1/transfer";
import * as _152 from "./applications/transfer/v1/tx";
import * as _153 from "./applications/transfer/v2/packet";
import * as _154 from "./core/channel/v1/channel";
import * as _155 from "./core/channel/v1/genesis";
import * as _156 from "./core/channel/v1/query";
import * as _157 from "./core/channel/v1/tx";
import * as _158 from "./core/channel/v1/upgrade";
import * as _159 from "./core/client/v1/client";
import * as _160 from "./core/client/v1/genesis";
import * as _161 from "./core/client/v1/query";
import * as _162 from "./core/client/v1/tx";
import * as _163 from "./core/commitment/v1/commitment";
import * as _164 from "./core/connection/v1/connection";
import * as _165 from "./core/connection/v1/genesis";
import * as _166 from "./core/connection/v1/query";
import * as _167 from "./core/connection/v1/tx";
import * as _168 from "./lightclients/localhost/v2/localhost";
import * as _169 from "./lightclients/solomachine/v2/solomachine";
import * as _170 from "./lightclients/solomachine/v3/solomachine";
import * as _171 from "./lightclients/tendermint/v1/tendermint";
import * as _172 from "./lightclients/wasm/v1/genesis";
import * as _173 from "./lightclients/wasm/v1/query";
import * as _174 from "./lightclients/wasm/v1/tx";
import * as _175 from "./lightclients/wasm/v1/wasm";
import * as _273 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _274 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _275 from "./applications/transfer/v1/tx.amino";
import * as _276 from "./core/channel/v1/tx.amino";
import * as _277 from "./core/client/v1/tx.amino";
import * as _278 from "./core/connection/v1/tx.amino";
import * as _279 from "./lightclients/wasm/v1/tx.amino";
import * as _280 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _281 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _282 from "./applications/transfer/v1/tx.registry";
import * as _283 from "./core/channel/v1/tx.registry";
import * as _284 from "./core/client/v1/tx.registry";
import * as _285 from "./core/connection/v1/tx.registry";
import * as _286 from "./lightclients/wasm/v1/tx.registry";
import * as _287 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _288 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _289 from "./applications/transfer/v1/query.rpc.Query";
import * as _290 from "./core/channel/v1/query.rpc.Query";
import * as _291 from "./core/client/v1/query.rpc.Query";
import * as _292 from "./core/connection/v1/query.rpc.Query";
import * as _293 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _294 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _295 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _296 from "./applications/transfer/v1/tx.rpc.msg";
import * as _297 from "./core/channel/v1/tx.rpc.msg";
import * as _298 from "./core/client/v1/tx.rpc.msg";
import * as _299 from "./core/connection/v1/tx.rpc.msg";
import * as _300 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._138,
          ..._139,
          ..._140,
          ..._273,
          ..._280,
          ..._287,
          ..._294
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._141
        };
      }
      export namespace host {
        export const v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._274,
          ..._281,
          ..._288,
          ..._295
        };
      }
      export const v1 = {
        ..._145,
        ..._146,
        ..._147
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._275,
        ..._282,
        ..._289,
        ..._296
      };
      export const v2 = {
        ..._153
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._276,
        ..._283,
        ..._290,
        ..._297
      };
    }
    export namespace client {
      export const v1 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._277,
        ..._284,
        ..._291,
        ..._298
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._163
      };
    }
    export namespace connection {
      export const v1 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._278,
        ..._285,
        ..._292,
        ..._299
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._168
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._169
      };
      export const v3 = {
        ..._170
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._171
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._279,
        ..._286,
        ..._293,
        ..._300
      };
    }
  }
  export const ClientFactory = {
    ..._313,
    ..._314
  };
}