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
const encoding_1 = require("@cosmjs/encoding");
const proto_signing_1 = require("@cosmjs/proto-signing");
function api(url, init) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url, init);
            if (!response.ok) {
                const text = yield response.text();
                console.error('error response', text);
                throw new Error(text);
            }
            return response.json();
        }
        catch (err) {
            console.error('request error', err);
            throw err;
        }
    });
}
function serializeNonCriticalOptions(msg) {
    return Object.assign(Object.assign({}, msg.value), { '@type': msg.typeUrl });
}
function serializeMessage(registry, message) {
    if (ArrayBuffer.isView(message)) {
        return (0, encoding_1.toBase64)(message);
    }
    if (Array.isArray(message)) {
        return message.map((item) => serializeMessage(registry, item));
    }
    if (typeof message === 'object' &&
        message !== null &&
        !Array.isArray(message)) {
        if ('typeUrl' in message) {
            let serializedValue;
            if (ArrayBuffer.isView(message.value)) {
                serializedValue = registry.decode(message);
            }
            else {
                serializedValue = message.value;
            }
            if (typeof serializedValue === 'string') {
                return {
                    '@type': message.typeUrl,
                    value: serializedValue,
                };
            }
            return Object.assign(Object.assign({}, serializeMessage(registry, serializedValue)), { '@type': message.typeUrl });
        }
        const result = {};
        for (const [key, value] of Object.entries(message)) {
            result[key] = serializeMessage(registry, value);
        }
        return result;
    }
    return message;
}
function serializeMessages(registry, messages) {
    return messages.map((message) => serializeMessage(registry, message));
}
function simulateTxRest(endpoint, registry, messages, memo, signer, sequence, nonCriticalExtensionOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const pubkey = (0, proto_signing_1.encodePubkey)(signer);
        const signDoc = {
            body: {
                messages: serializeMessages(registry, messages),
                memo,
                timeout_height: '0',
                extension_options: [],
                non_critical_extension_options: nonCriticalExtensionOptions === null || nonCriticalExtensionOptions === void 0 ? void 0 : nonCriticalExtensionOptions.map(serializeNonCriticalOptions),
            },
            auth_info: {
                signer_infos: [
                    {
                        public_key: {
                            '@type': pubkey.typeUrl,
                            key: Buffer.from(pubkey.value).toString('base64'),
                        },
                        mode_info: {
                            single: {
                                mode: 'SIGN_MODE_DIRECT',
                            },
                        },
                        sequence: sequence,
                    },
                ],
                fee: {},
            },
        };
        const tx = {
            tx: {
                body: signDoc.body,
                auth_info: signDoc.auth_info,
                signatures: [
                    '8jXh7aU3pIE07HBva+W/GLEO0xc5QMu5EXR6hglL2fFVP8AXsMbiNR5Et8POJXJZLWE58wc1ni8rzxF7d/cv5g==',
                ],
            },
        };
        const call = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tx, (_, value) => typeof value === 'bigint' ? Number(value) : value),
        };
        const uri = `${endpoint}/cosmos/tx/v1beta1/simulate`;
        const response = yield api(uri, call);
        return {
            gasInfo: {
                gasWanted: BigInt(response.gas_info.gas_wanted),
                gasUsed: BigInt(response.gas_info.gas_used),
            },
        };
    });
}
exports.default = simulateTxRest;
