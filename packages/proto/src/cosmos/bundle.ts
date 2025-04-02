//@ts-nocheck
import * as _3 from "./accesscontrol_x/genesis";
import * as _4 from "./accesscontrol_x/query";
import * as _5 from "./accesscontrol_x/tx";
import * as _6 from "./accesscontrol_x/gov";
import * as _7 from "./accesscontrol/accesscontrol";
import * as _8 from "./accesscontrol/constants";
import * as _9 from "./accesscontrol/legacy";
import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./authz/v1beta1/authz";
import * as _14 from "./authz/v1beta1/event";
import * as _15 from "./authz/v1beta1/genesis";
import * as _16 from "./authz/v1beta1/query";
import * as _17 from "./authz/v1beta1/tx";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/hd/v1/hd";
import * as _29 from "./crypto/keyring/v1/record";
import * as _30 from "./crypto/multisig/keys";
import * as _31 from "./crypto/secp256k1/keys";
import * as _32 from "./crypto/secp256r1/keys";
import * as _33 from "./crypto/sr25519/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./feegrant/v1beta1/feegrant";
import * as _39 from "./feegrant/v1beta1/genesis";
import * as _40 from "./feegrant/v1beta1/query";
import * as _41 from "./feegrant/v1beta1/tx";
import * as _42 from "./gov/v1/genesis";
import * as _43 from "./gov/v1/gov";
import * as _44 from "./gov/v1/query";
import * as _45 from "./gov/v1/tx";
import * as _46 from "./gov/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/gov";
import * as _48 from "./gov/v1beta1/query";
import * as _49 from "./gov/v1beta1/tx";
import * as _50 from "./mint/v1beta1/genesis";
import * as _51 from "./mint/v1beta1/mint";
import * as _52 from "./mint/v1beta1/query";
import * as _53 from "./params/types/types";
import * as _54 from "./params/v1beta1/params";
import * as _55 from "./params/v1beta1/query";
import * as _56 from "./staking/v1beta1/authz";
import * as _57 from "./staking/v1beta1/genesis";
import * as _58 from "./staking/v1beta1/query";
import * as _59 from "./staking/v1beta1/staking";
import * as _60 from "./staking/v1beta1/tx";
import * as _61 from "./tx/signing/v1beta1/signing";
import * as _62 from "./tx/v1beta1/service";
import * as _63 from "./tx/v1beta1/tx";
import * as _64 from "./upgrade/v1beta1/query";
import * as _65 from "./upgrade/v1beta1/tx";
import * as _66 from "./upgrade/v1beta1/upgrade";
import * as _67 from "./vesting/v1beta1/tx";
import * as _68 from "./vesting/v1beta1/vesting";
import * as _143 from "./accesscontrol_x/tx.amino";
import * as _144 from "./authz/v1beta1/tx.amino";
import * as _145 from "./bank/v1beta1/tx.amino";
import * as _146 from "./distribution/v1beta1/tx.amino";
import * as _147 from "./feegrant/v1beta1/tx.amino";
import * as _148 from "./gov/v1/tx.amino";
import * as _149 from "./gov/v1beta1/tx.amino";
import * as _150 from "./staking/v1beta1/tx.amino";
import * as _151 from "./upgrade/v1beta1/tx.amino";
import * as _152 from "./vesting/v1beta1/tx.amino";
import * as _153 from "./accesscontrol_x/tx.registry";
import * as _154 from "./authz/v1beta1/tx.registry";
import * as _155 from "./bank/v1beta1/tx.registry";
import * as _156 from "./distribution/v1beta1/tx.registry";
import * as _157 from "./feegrant/v1beta1/tx.registry";
import * as _158 from "./gov/v1/tx.registry";
import * as _159 from "./gov/v1beta1/tx.registry";
import * as _160 from "./staking/v1beta1/tx.registry";
import * as _161 from "./upgrade/v1beta1/tx.registry";
import * as _162 from "./vesting/v1beta1/tx.registry";
import * as _163 from "./accesscontrol_x/query.rpc.Query";
import * as _164 from "./auth/v1beta1/query.rpc.Query";
import * as _165 from "./authz/v1beta1/query.rpc.Query";
import * as _166 from "./bank/v1beta1/query.rpc.Query";
import * as _167 from "./distribution/v1beta1/query.rpc.Query";
import * as _168 from "./feegrant/v1beta1/query.rpc.Query";
import * as _169 from "./gov/v1/query.rpc.Query";
import * as _170 from "./gov/v1beta1/query.rpc.Query";
import * as _171 from "./mint/v1beta1/query.rpc.Query";
import * as _172 from "./params/v1beta1/query.rpc.Query";
import * as _173 from "./staking/v1beta1/query.rpc.Query";
import * as _174 from "./tx/v1beta1/service.rpc.Service";
import * as _175 from "./upgrade/v1beta1/query.rpc.Query";
import * as _176 from "./accesscontrol_x/tx.rpc.msg";
import * as _177 from "./authz/v1beta1/tx.rpc.msg";
import * as _178 from "./bank/v1beta1/tx.rpc.msg";
import * as _179 from "./distribution/v1beta1/tx.rpc.msg";
import * as _180 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _181 from "./gov/v1/tx.rpc.msg";
import * as _182 from "./gov/v1beta1/tx.rpc.msg";
import * as _183 from "./staking/v1beta1/tx.rpc.msg";
import * as _184 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _185 from "./vesting/v1beta1/tx.rpc.msg";
import * as _220 from "./rpc.query";
import * as _221 from "./rpc.tx";
export namespace cosmos {
  export namespace accesscontrol_x {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._143,
      ..._153,
      ..._163,
      ..._176
    };
  }
  export namespace accesscontrol {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._164
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._144,
      ..._154,
      ..._165,
      ..._177
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._145,
      ..._155,
      ..._166,
      ..._178
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._25
      };
    }
    export const v1beta1 = {
      ..._26
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._27
    };
    export namespace hd {
      export const v1 = {
        ..._28
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._29
      };
    }
    export const multisig = {
      ..._30
    };
    export const secp256k1 = {
      ..._31
    };
    export const secp256r1 = {
      ..._32
    };
    export const sr25519 = {
      ..._33
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._146,
      ..._156,
      ..._167,
      ..._179
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._147,
      ..._157,
      ..._168,
      ..._180
    };
  }
  export namespace gov {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._148,
      ..._158,
      ..._169,
      ..._181
    };
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._149,
      ..._159,
      ..._170,
      ..._182
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._171
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._172
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._150,
      ..._160,
      ..._173,
      ..._183
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._61
      };
    }
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._174
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._151,
      ..._161,
      ..._175,
      ..._184
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._152,
      ..._162,
      ..._185
    };
  }
  export const ClientFactory = {
    ..._220,
    ..._221
  };
}