//@ts-nocheck
import * as _4 from './app/runtime/v1alpha1/module';
import * as _5 from './auth/module/v1/module';
import * as _6 from './auth/v1beta1/auth';
import * as _7 from './auth/v1beta1/genesis';
import * as _8 from './auth/v1beta1/query';
import * as _232 from './auth/v1beta1/query.rpc.Query';
import * as _9 from './auth/v1beta1/tx';
import * as _198 from './auth/v1beta1/tx.amino';
import * as _215 from './auth/v1beta1/tx.registry';
import * as _252 from './auth/v1beta1/tx.rpc.msg';
import * as _10 from './authz/module/v1/module';
import * as _11 from './authz/v1beta1/authz';
import * as _12 from './authz/v1beta1/event';
import * as _13 from './authz/v1beta1/genesis';
import * as _14 from './authz/v1beta1/query';
import * as _233 from './authz/v1beta1/query.rpc.Query';
import * as _15 from './authz/v1beta1/tx';
import * as _199 from './authz/v1beta1/tx.amino';
import * as _216 from './authz/v1beta1/tx.registry';
import * as _253 from './authz/v1beta1/tx.rpc.msg';
import * as _16 from './bank/module/v1/module';
import * as _17 from './bank/v1beta1/authz';
import * as _18 from './bank/v1beta1/bank';
import * as _19 from './bank/v1beta1/genesis';
import * as _20 from './bank/v1beta1/query';
import * as _234 from './bank/v1beta1/query.rpc.Query';
import * as _21 from './bank/v1beta1/tx';
import * as _200 from './bank/v1beta1/tx.amino';
import * as _217 from './bank/v1beta1/tx.registry';
import * as _254 from './bank/v1beta1/tx.rpc.msg';
import * as _22 from './base/abci/v1beta1/abci';
import * as _23 from './base/node/v1beta1/query';
import * as _235 from './base/node/v1beta1/query.rpc.Service';
import * as _24 from './base/query/v1beta1/pagination';
import * as _25 from './base/reflection/v2alpha1/reflection';
import * as _26 from './base/v1beta1/coin';
import * as _27 from './circuit/module/v1/module';
import * as _28 from './circuit/v1/query';
import * as _236 from './circuit/v1/query.rpc.Query';
import * as _29 from './circuit/v1/tx';
import * as _201 from './circuit/v1/tx.amino';
import * as _218 from './circuit/v1/tx.registry';
import * as _255 from './circuit/v1/tx.rpc.msg';
import * as _30 from './circuit/v1/types';
import * as _31 from './consensus/module/v1/module';
import * as _32 from './consensus/v1/query';
import * as _237 from './consensus/v1/query.rpc.Query';
import * as _33 from './consensus/v1/tx';
import * as _202 from './consensus/v1/tx.amino';
import * as _219 from './consensus/v1/tx.registry';
import * as _256 from './consensus/v1/tx.rpc.msg';
import * as _34 from './crisis/module/v1/module';
import * as _35 from './crypto/ed25519/keys';
import * as _36 from './crypto/hd/v1/hd';
import * as _37 from './crypto/keyring/v1/record';
import * as _38 from './crypto/multisig/keys';
import * as _39 from './crypto/secp256k1/keys';
import * as _40 from './crypto/secp256r1/keys';
import * as _41 from './distribution/module/v1/module';
import * as _42 from './distribution/v1beta1/distribution';
import * as _43 from './distribution/v1beta1/genesis';
import * as _44 from './distribution/v1beta1/query';
import * as _238 from './distribution/v1beta1/query.rpc.Query';
import * as _45 from './distribution/v1beta1/tx';
import * as _203 from './distribution/v1beta1/tx.amino';
import * as _220 from './distribution/v1beta1/tx.registry';
import * as _257 from './distribution/v1beta1/tx.rpc.msg';
import * as _46 from './evidence/module/v1/module';
import * as _47 from './evm/crypto/v1/ethsecp256k1/keys';
import * as _48 from './evm/erc20/v1/erc20';
import * as _49 from './evm/erc20/v1/events';
import * as _50 from './evm/erc20/v1/genesis';
import * as _51 from './evm/erc20/v1/query';
import * as _239 from './evm/erc20/v1/query.rpc.Query';
import * as _52 from './evm/erc20/v1/tx';
import * as _204 from './evm/erc20/v1/tx.amino';
import * as _221 from './evm/erc20/v1/tx.registry';
import * as _258 from './evm/erc20/v1/tx.rpc.msg';
import * as _53 from './evm/feemarket/v1/events';
import * as _54 from './evm/feemarket/v1/feemarket';
import * as _55 from './evm/feemarket/v1/genesis';
import * as _56 from './evm/feemarket/v1/query';
import * as _240 from './evm/feemarket/v1/query.rpc.Query';
import * as _57 from './evm/feemarket/v1/tx';
import * as _205 from './evm/feemarket/v1/tx.amino';
import * as _222 from './evm/feemarket/v1/tx.registry';
import * as _259 from './evm/feemarket/v1/tx.rpc.msg';
import * as _58 from './evm/types/v1/dynamic_fee';
import * as _59 from './evm/types/v1/indexer';
import * as _60 from './evm/types/v1/web3';
import * as _61 from './evm/vm/v1/events';
import * as _62 from './evm/vm/v1/evm';
import * as _63 from './evm/vm/v1/genesis';
import * as _64 from './evm/vm/v1/query';
import * as _241 from './evm/vm/v1/query.rpc.Query';
import * as _65 from './evm/vm/v1/tx';
import * as _206 from './evm/vm/v1/tx.amino';
import * as _223 from './evm/vm/v1/tx.registry';
import * as _260 from './evm/vm/v1/tx.rpc.msg';
import * as _66 from './feegrant/module/v1/module';
import * as _67 from './feegrant/v1beta1/feegrant';
import * as _68 from './feegrant/v1beta1/genesis';
import * as _69 from './feegrant/v1beta1/query';
import * as _242 from './feegrant/v1beta1/query.rpc.Query';
import * as _70 from './feegrant/v1beta1/tx';
import * as _207 from './feegrant/v1beta1/tx.amino';
import * as _224 from './feegrant/v1beta1/tx.registry';
import * as _261 from './feegrant/v1beta1/tx.rpc.msg';
import * as _71 from './genutil/module/v1/module';
import * as _72 from './gov/module/v1/module';
import * as _73 from './gov/v1/genesis';
import * as _74 from './gov/v1/gov';
import * as _75 from './gov/v1/query';
import * as _243 from './gov/v1/query.rpc.Query';
import * as _76 from './gov/v1/tx';
import * as _208 from './gov/v1/tx.amino';
import * as _225 from './gov/v1/tx.registry';
import * as _262 from './gov/v1/tx.rpc.msg';
import * as _77 from './gov/v1beta1/genesis';
import * as _78 from './gov/v1beta1/gov';
import * as _79 from './gov/v1beta1/query';
import * as _244 from './gov/v1beta1/query.rpc.Query';
import * as _80 from './gov/v1beta1/tx';
import * as _209 from './gov/v1beta1/tx.amino';
import * as _226 from './gov/v1beta1/tx.registry';
import * as _263 from './gov/v1beta1/tx.rpc.msg';
import * as _81 from './group/module/v1/module';
import * as _82 from './group/v1/events';
import * as _83 from './group/v1/genesis';
import * as _84 from './group/v1/query';
import * as _245 from './group/v1/query.rpc.Query';
import * as _85 from './group/v1/tx';
import * as _210 from './group/v1/tx.amino';
import * as _227 from './group/v1/tx.registry';
import * as _264 from './group/v1/tx.rpc.msg';
import * as _86 from './group/v1/types';
import * as _87 from './ics23/v1/proofs';
import * as _88 from './mint/module/v1/module';
import * as _89 from './mint/v1beta1/genesis';
import * as _90 from './mint/v1beta1/mint';
import * as _91 from './mint/v1beta1/query';
import * as _246 from './mint/v1beta1/query.rpc.Query';
import * as _92 from './mint/v1beta1/tx';
import * as _211 from './mint/v1beta1/tx.amino';
import * as _228 from './mint/v1beta1/tx.registry';
import * as _265 from './mint/v1beta1/tx.rpc.msg';
import * as _93 from './msg/textual/v1/textual';
import * as _94 from './nft/module/v1/module';
import * as _95 from './orm/module/v1alpha1/module';
import * as _96 from './orm/query/v1alpha1/query';
import * as _247 from './orm/query/v1alpha1/query.rpc.Query';
import * as _97 from './params/module/v1/module';
import * as _98 from './params/v1beta1/params';
import * as _99 from './params/v1beta1/query';
import * as _248 from './params/v1beta1/query.rpc.Query';
import * as _100 from './query/v1/query';
import * as _101 from './reflection/v1/reflection';
import * as _309 from './rpc.query';
import * as _310 from './rpc.tx';
import * as _102 from './slashing/module/v1/module';
import * as _103 from './staking/module/v1/module';
import * as _104 from './staking/v1beta1/authz';
import * as _105 from './staking/v1beta1/genesis';
import * as _106 from './staking/v1beta1/query';
import * as _249 from './staking/v1beta1/query.rpc.Query';
import * as _107 from './staking/v1beta1/staking';
import * as _108 from './staking/v1beta1/tx';
import * as _212 from './staking/v1beta1/tx.amino';
import * as _229 from './staking/v1beta1/tx.registry';
import * as _266 from './staking/v1beta1/tx.rpc.msg';
import * as _109 from './store/internal/kv/v1beta1/kv';
import * as _110 from './store/snapshots/v1/snapshot';
import * as _111 from './store/streaming/abci/grpc';
import * as _112 from './store/v1beta1/commit_info';
import * as _113 from './store/v1beta1/listening';
import * as _114 from './tx/config/v1/config';
import * as _115 from './tx/signing/v1beta1/signing';
import * as _116 from './tx/v1beta1/service';
import * as _250 from './tx/v1beta1/service.rpc.Service';
import * as _117 from './tx/v1beta1/tx';
import * as _118 from './upgrade/module/v1/module';
import * as _119 from './upgrade/v1beta1/query';
import * as _251 from './upgrade/v1beta1/query.rpc.Query';
import * as _120 from './upgrade/v1beta1/tx';
import * as _213 from './upgrade/v1beta1/tx.amino';
import * as _230 from './upgrade/v1beta1/tx.registry';
import * as _267 from './upgrade/v1beta1/tx.rpc.msg';
import * as _121 from './upgrade/v1beta1/upgrade';
import * as _122 from './vesting/module/v1/module';
import * as _123 from './vesting/v1beta1/tx';
import * as _214 from './vesting/v1beta1/tx.amino';
import * as _231 from './vesting/v1beta1/tx.registry';
import * as _268 from './vesting/v1beta1/tx.rpc.msg';
import * as _124 from './vesting/v1beta1/vesting';
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._4,
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._5,
      };
    }
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._198,
      ..._215,
      ..._232,
      ..._252,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._10,
      };
    }
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._199,
      ..._216,
      ..._233,
      ..._253,
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._16,
      };
    }
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._200,
      ..._217,
      ..._234,
      ..._254,
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._22,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._23,
        ..._235,
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._24,
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._25,
      };
    }
    export const v1beta1 = {
      ..._26,
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._27,
      };
    }
    export const v1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._201,
      ..._218,
      ..._236,
      ..._255,
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._31,
      };
    }
    export const v1 = {
      ..._32,
      ..._33,
      ..._202,
      ..._219,
      ..._237,
      ..._256,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._34,
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._35,
    };
    export namespace hd {
      export const v1 = {
        ..._36,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._37,
      };
    }
    export const multisig = {
      ..._38,
    };
    export const secp256k1 = {
      ..._39,
    };
    export const secp256r1 = {
      ..._40,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._41,
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._203,
      ..._220,
      ..._238,
      ..._257,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._46,
      };
    }
  }
  export namespace evm {
    export namespace crypto {
      export namespace v1 {
        export const ethsecp256k1 = {
          ..._47,
        };
      }
    }
    export namespace erc20 {
      export const v1 = {
        ..._48,
        ..._49,
        ..._50,
        ..._51,
        ..._52,
        ..._204,
        ..._221,
        ..._239,
        ..._258,
      };
    }
    export namespace feemarket {
      export const v1 = {
        ..._53,
        ..._54,
        ..._55,
        ..._56,
        ..._57,
        ..._205,
        ..._222,
        ..._240,
        ..._259,
      };
    }
    export namespace types {
      export const v1 = {
        ..._58,
        ..._59,
        ..._60,
      };
    }
    export namespace vm {
      export const v1 = {
        ..._61,
        ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._206,
        ..._223,
        ..._241,
        ..._260,
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._66,
      };
    }
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._207,
      ..._224,
      ..._242,
      ..._261,
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._71,
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._72,
      };
    }
    export const v1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._208,
      ..._225,
      ..._243,
      ..._262,
    };
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._209,
      ..._226,
      ..._244,
      ..._263,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._81,
      };
    }
    export const v1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._210,
      ..._227,
      ..._245,
      ..._264,
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._87,
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._88,
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._211,
      ..._228,
      ..._246,
      ..._265,
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._93,
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._94,
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._95,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._96,
        ..._247,
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._97,
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._248,
    };
  }
  export namespace query {
    export const v1 = {
      ..._100,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._101,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._102,
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._103,
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._212,
      ..._229,
      ..._249,
      ..._266,
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._109,
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._110,
      };
    }
    export namespace streaming {
      export const abci = {
        ..._111,
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._114,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._115,
      };
    }
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._250,
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._118,
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._213,
      ..._230,
      ..._251,
      ..._267,
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._122,
      };
    }
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._214,
      ..._231,
      ..._268,
    };
  }
  export const ClientFactory = {
    ..._309,
    ..._310,
  };
}
