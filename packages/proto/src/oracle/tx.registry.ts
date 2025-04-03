//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote], ["/kiichain.kiichain3.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.encode(value).finish()
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote",
        value
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent",
        value
      };
    }
  },
  fromPartial: {
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/kiichain.kiichain3.oracle.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.fromPartial(value)
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/kiichain.kiichain3.oracle.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.fromPartial(value)
      };
    }
  }
};