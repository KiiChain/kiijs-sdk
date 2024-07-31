"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendMessage = void 0;
function createSendMessage(fromAddress, toAddress, denom, amount) {
    return {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
            fromAddress,
            toAddress,
            amount: [
                {
                    amount,
                    denom,
                },
            ],
        },
    };
}
exports.createSendMessage = createSendMessage;
