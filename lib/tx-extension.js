"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTxExtension = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const signing_js_1 = require("cosmjs-types/cosmos/tx/signing/v1beta1/signing.js");
const service_js_1 = require("cosmjs-types/cosmos/tx/v1beta1/service.js");
const tx_js_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx.js");
function setupTxExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new service_js_1.ServiceClientImpl(rpc);
    return {
        tx: {
            getTx: (txId) => __awaiter(this, void 0, void 0, function* () {
                const request = {
                    hash: txId,
                };
                const response = yield queryService.GetTx(request);
                return response;
            }),
            simulate: (messages, memo, signer, sequence, nonCriticalExtensionOptions) => __awaiter(this, void 0, void 0, function* () {
                const tx = tx_js_1.Tx.fromPartial({
                    authInfo: tx_js_1.AuthInfo.fromPartial({
                        fee: tx_js_1.Fee.fromPartial({}),
                        signerInfos: [
                            {
                                publicKey: (0, proto_signing_1.encodePubkey)(signer),
                                sequence: BigInt(sequence),
                                modeInfo: { single: { mode: signing_js_1.SignMode.SIGN_MODE_UNSPECIFIED } },
                            },
                        ],
                    }),
                    body: tx_js_1.TxBody.fromPartial({
                        messages: Array.from(messages),
                        memo: memo,
                        nonCriticalExtensionOptions,
                    }),
                    signatures: [new Uint8Array()],
                });
                const request = service_js_1.SimulateRequest.fromPartial({
                    txBytes: tx_js_1.Tx.encode(tx).finish(),
                });
                const response = yield queryService.Simulate(request);
                return response;
            }),
        },
    };
}
exports.setupTxExtension = setupTxExtension;
