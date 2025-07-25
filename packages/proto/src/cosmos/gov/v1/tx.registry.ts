//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import {
  MsgCancelProposal,
  MsgDeposit,
  MsgExecLegacyContent,
  MsgSubmitProposal,
  MsgUpdateParams,
  MsgVote,
  MsgVoteWeighted,
} from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/cosmos.gov.v1.MsgSubmitProposal', MsgSubmitProposal],
  ['/cosmos.gov.v1.MsgExecLegacyContent', MsgExecLegacyContent],
  ['/cosmos.gov.v1.MsgVote', MsgVote],
  ['/cosmos.gov.v1.MsgVoteWeighted', MsgVoteWeighted],
  ['/cosmos.gov.v1.MsgDeposit', MsgDeposit],
  ['/cosmos.gov.v1.MsgUpdateParams', MsgUpdateParams],
  ['/cosmos.gov.v1.MsgCancelProposal', MsgCancelProposal],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgSubmitProposal',
        value: MsgSubmitProposal.encode(value).finish(),
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgExecLegacyContent',
        value: MsgExecLegacyContent.encode(value).finish(),
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgVote',
        value: MsgVote.encode(value).finish(),
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgVoteWeighted',
        value: MsgVoteWeighted.encode(value).finish(),
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgDeposit',
        value: MsgDeposit.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgUpdateParams',
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgCancelProposal',
        value: MsgCancelProposal.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgSubmitProposal',
        value,
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgExecLegacyContent',
        value,
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgVote',
        value,
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgVoteWeighted',
        value,
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgDeposit',
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgUpdateParams',
        value,
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgCancelProposal',
        value,
      };
    },
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgSubmitProposal',
        value: MsgSubmitProposal.fromPartial(value),
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgExecLegacyContent',
        value: MsgExecLegacyContent.fromPartial(value),
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgVote',
        value: MsgVote.fromPartial(value),
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgVoteWeighted',
        value: MsgVoteWeighted.fromPartial(value),
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgDeposit',
        value: MsgDeposit.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgUpdateParams',
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: '/cosmos.gov.v1.MsgCancelProposal',
        value: MsgCancelProposal.fromPartial(value),
      };
    },
  },
};
