//@ts-nocheck
import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _204 from "./applications/transfer/v1/tx.amino";
import * as _205 from "./core/channel/v1/tx.amino";
import * as _206 from "./core/client/v1/tx.amino";
import * as _207 from "./core/connection/v1/tx.amino";
import * as _208 from "./applications/transfer/v1/tx.registry";
import * as _209 from "./core/channel/v1/tx.registry";
import * as _210 from "./core/client/v1/tx.registry";
import * as _211 from "./core/connection/v1/tx.registry";
import * as _212 from "./applications/transfer/v1/query.rpc.Query";
import * as _213 from "./core/channel/v1/query.rpc.Query";
import * as _214 from "./core/client/v1/query.rpc.Query";
import * as _215 from "./core/connection/v1/query.rpc.Query";
import * as _216 from "./applications/transfer/v1/tx.rpc.msg";
import * as _217 from "./core/channel/v1/tx.rpc.msg";
import * as _218 from "./core/client/v1/tx.rpc.msg";
import * as _219 from "./core/connection/v1/tx.rpc.msg";
import * as _226 from "./rpc.query";
import * as _227 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._204,
        ..._208,
        ..._212,
        ..._216
      };
      export const v2 = {
        ..._114
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._205,
        ..._209,
        ..._213,
        ..._217
      };
    }
    export namespace client {
      export const v1 = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._206,
        ..._210,
        ..._214,
        ..._218
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._123
      };
    }
    export namespace connection {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._207,
        ..._211,
        ..._215,
        ..._219
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._128
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._129
      };
      export const v2 = {
        ..._130
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._131
      };
    }
  }
  export const ClientFactory = {
    ..._226,
    ..._227
  };
}