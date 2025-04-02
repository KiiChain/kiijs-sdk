//@ts-nocheck
import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const AminoConverter = {
  "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote": {
    aminoType: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote",
    toAmino: MsgAggregateExchangeRateVote.toAmino,
    fromAmino: MsgAggregateExchangeRateVote.fromAmino
  },
  "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent": {
    aminoType: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent",
    toAmino: MsgDelegateFeedConsent.toAmino,
    fromAmino: MsgDelegateFeedConsent.fromAmino
  }
};