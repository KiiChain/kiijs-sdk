//@ts-nocheck
import * as _187 from "./abci/types";
import * as _188 from "./crypto/keys";
import * as _189 from "./crypto/proof";
import * as _190 from "./libs/bits/types";
import * as _191 from "./p2p/types";
import * as _192 from "./types/block";
import * as _193 from "./types/evidence";
import * as _194 from "./types/params";
import * as _195 from "./types/types";
import * as _196 from "./types/validator";
import * as _197 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._187
  };
  export const crypto = {
    ..._188,
    ..._189
  };
  export namespace libs {
    export const bits = {
      ..._190
    };
  }
  export const p2p = {
    ..._191
  };
  export const types = {
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._196
  };
  export const version = {
    ..._197
  };
}