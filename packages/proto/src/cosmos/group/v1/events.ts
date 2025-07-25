//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import {
  ProposalExecutorResult,
  ProposalStatus,
  TallyResult,
  TallyResultAmino,
  TallyResultSDKType,
} from './types';
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface EventCreateGroupProtoMsg {
  typeUrl: '/cosmos.group.v1.EventCreateGroup';
  value: Uint8Array;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface EventCreateGroupAminoMsg {
  type: 'cosmos-sdk/EventCreateGroup';
  value: EventCreateGroupAmino;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
  group_id: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface EventUpdateGroupProtoMsg {
  typeUrl: '/cosmos.group.v1.EventUpdateGroup';
  value: Uint8Array;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface EventUpdateGroupAminoMsg {
  type: 'cosmos-sdk/EventUpdateGroup';
  value: EventUpdateGroupAmino;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
  group_id: bigint;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventCreateGroupPolicyProtoMsg {
  typeUrl: '/cosmos.group.v1.EventCreateGroupPolicy';
  value: Uint8Array;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address?: string;
}
export interface EventCreateGroupPolicyAminoMsg {
  type: 'cosmos-sdk/EventCreateGroupPolicy';
  value: EventCreateGroupPolicyAmino;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventUpdateGroupPolicyProtoMsg {
  typeUrl: '/cosmos.group.v1.EventUpdateGroupPolicy';
  value: Uint8Array;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address?: string;
}
export interface EventUpdateGroupPolicyAminoMsg {
  type: 'cosmos-sdk/EventUpdateGroupPolicy';
  value: EventUpdateGroupPolicyAmino;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
  address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventSubmitProposalProtoMsg {
  typeUrl: '/cosmos.group.v1.EventSubmitProposal';
  value: Uint8Array;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventSubmitProposalAminoMsg {
  type: 'cosmos-sdk/EventSubmitProposal';
  value: EventSubmitProposalAmino;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
  proposal_id: bigint;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventWithdrawProposalProtoMsg {
  typeUrl: '/cosmos.group.v1.EventWithdrawProposal';
  value: Uint8Array;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventWithdrawProposalAminoMsg {
  type: 'cosmos-sdk/EventWithdrawProposal';
  value: EventWithdrawProposalAmino;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
  proposal_id: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventVoteProtoMsg {
  typeUrl: '/cosmos.group.v1.EventVote';
  value: Uint8Array;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventVoteAminoMsg {
  type: 'cosmos-sdk/EventVote';
  value: EventVoteAmino;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
  proposal_id: bigint;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}
export interface EventExecProtoMsg {
  typeUrl: '/cosmos.group.v1.EventExec';
  value: Uint8Array;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
  /** result is the proposal execution result. */
  result?: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs?: string;
}
export interface EventExecAminoMsg {
  type: 'cosmos-sdk/EventExec';
  value: EventExecAmino;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
  proposal_id: bigint;
  result: ProposalExecutorResult;
  logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** address is the account address of the group member. */
  address: string;
}
export interface EventLeaveGroupProtoMsg {
  typeUrl: '/cosmos.group.v1.EventLeaveGroup';
  value: Uint8Array;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** address is the account address of the group member. */
  address?: string;
}
export interface EventLeaveGroupAminoMsg {
  type: 'cosmos-sdk/EventLeaveGroup';
  value: EventLeaveGroupAmino;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
  group_id: bigint;
  address: string;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tallyResult?: TallyResult;
}
export interface EventProposalPrunedProtoMsg {
  typeUrl: '/cosmos.group.v1.EventProposalPruned';
  value: Uint8Array;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPrunedAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status?: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tally_result?: TallyResultAmino;
}
export interface EventProposalPrunedAminoMsg {
  type: 'cosmos-sdk/EventProposalPruned';
  value: EventProposalPrunedAmino;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPrunedSDKType {
  proposal_id: bigint;
  status: ProposalStatus;
  tally_result?: TallyResultSDKType;
}
/** EventTallyError is an event emitted when a proposal tally failed with an error. */
export interface EventTallyError {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** error_message is the raw error output */
  errorMessage: string;
}
export interface EventTallyErrorProtoMsg {
  typeUrl: '/cosmos.group.v1.EventTallyError';
  value: Uint8Array;
}
/** EventTallyError is an event emitted when a proposal tally failed with an error. */
export interface EventTallyErrorAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
  /** error_message is the raw error output */
  error_message?: string;
}
export interface EventTallyErrorAminoMsg {
  type: 'cosmos-sdk/EventTallyError';
  value: EventTallyErrorAmino;
}
/** EventTallyError is an event emitted when a proposal tally failed with an error. */
export interface EventTallyErrorSDKType {
  proposal_id: bigint;
  error_message: string;
}
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: BigInt(0),
  };
}
export const EventCreateGroup = {
  typeUrl: '/cosmos.group.v1.EventCreateGroup',
  encode(
    message: EventCreateGroup,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroup {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? BigInt(object.groupId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.group_id =
      message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup {
    return EventCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroup): EventCreateGroupAminoMsg {
    return {
      type: 'cosmos-sdk/EventCreateGroup',
      value: EventCreateGroup.toAmino(message),
    };
  },
  fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup {
    return EventCreateGroup.decode(message.value);
  },
  toProto(message: EventCreateGroup): Uint8Array {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventCreateGroup',
      value: EventCreateGroup.encode(message).finish(),
    };
  },
};
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: BigInt(0),
  };
}
export const EventUpdateGroup = {
  typeUrl: '/cosmos.group.v1.EventUpdateGroup',
  encode(
    message: EventUpdateGroup,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroup {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? BigInt(object.groupId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventUpdateGroup): EventUpdateGroupAmino {
    const obj: any = {};
    obj.group_id =
      message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup {
    return EventUpdateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroup): EventUpdateGroupAminoMsg {
    return {
      type: 'cosmos-sdk/EventUpdateGroup',
      value: EventUpdateGroup.toAmino(message),
    };
  },
  fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup {
    return EventUpdateGroup.decode(message.value);
  },
  toProto(message: EventUpdateGroup): Uint8Array {
    return EventUpdateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventUpdateGroup',
      value: EventUpdateGroup.encode(message).finish(),
    };
  },
};
function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: '',
  };
}
export const EventCreateGroupPolicy = {
  typeUrl: '/cosmos.group.v1.EventCreateGroupPolicy',
  encode(
    message: EventCreateGroupPolicy,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventCreateGroupPolicy {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupPolicyAminoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyAminoMsg {
    return {
      type: 'cosmos-sdk/EventCreateGroupPolicy',
      value: EventCreateGroupPolicy.toAmino(message),
    };
  },
  fromProtoMsg(
    message: EventCreateGroupPolicyProtoMsg
  ): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.decode(message.value);
  },
  toProto(message: EventCreateGroupPolicy): Uint8Array {
    return EventCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventCreateGroupPolicy',
      value: EventCreateGroupPolicy.encode(message).finish(),
    };
  },
};
function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: '',
  };
}
export const EventUpdateGroupPolicy = {
  typeUrl: '/cosmos.group.v1.EventUpdateGroupPolicy',
  encode(
    message: EventUpdateGroupPolicy,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventUpdateGroupPolicy {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupPolicyAminoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAminoMsg {
    return {
      type: 'cosmos-sdk/EventUpdateGroupPolicy',
      value: EventUpdateGroupPolicy.toAmino(message),
    };
  },
  fromProtoMsg(
    message: EventUpdateGroupPolicyProtoMsg
  ): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.decode(message.value);
  },
  toProto(message: EventUpdateGroupPolicy): Uint8Array {
    return EventUpdateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventUpdateGroupPolicy',
      value: EventUpdateGroupPolicy.encode(message).finish(),
    };
  },
};
function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: BigInt(0),
  };
}
export const EventSubmitProposal = {
  typeUrl: '/cosmos.group.v1.EventSubmitProposal',
  encode(
    message: EventSubmitProposal,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventSubmitProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? BigInt(object.proposalId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventSubmitProposal): EventSubmitProposalAmino {
    const obj: any = {};
    obj.proposal_id =
      message.proposalId !== BigInt(0)
        ? message.proposalId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubmitProposalAminoMsg): EventSubmitProposal {
    return EventSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventSubmitProposal): EventSubmitProposalAminoMsg {
    return {
      type: 'cosmos-sdk/EventSubmitProposal',
      value: EventSubmitProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: EventSubmitProposalProtoMsg): EventSubmitProposal {
    return EventSubmitProposal.decode(message.value);
  },
  toProto(message: EventSubmitProposal): Uint8Array {
    return EventSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: EventSubmitProposal): EventSubmitProposalProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventSubmitProposal',
      value: EventSubmitProposal.encode(message).finish(),
    };
  },
};
function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: BigInt(0),
  };
}
export const EventWithdrawProposal = {
  typeUrl: '/cosmos.group.v1.EventWithdrawProposal',
  encode(
    message: EventWithdrawProposal,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventWithdrawProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? BigInt(object.proposalId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id =
      message.proposalId !== BigInt(0)
        ? message.proposalId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawProposalAminoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventWithdrawProposal): EventWithdrawProposalAminoMsg {
    return {
      type: 'cosmos-sdk/EventWithdrawProposal',
      value: EventWithdrawProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: EventWithdrawProposalProtoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.decode(message.value);
  },
  toProto(message: EventWithdrawProposal): Uint8Array {
    return EventWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawProposal): EventWithdrawProposalProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventWithdrawProposal',
      value: EventWithdrawProposal.encode(message).finish(),
    };
  },
};
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt(0),
  };
}
export const EventVote = {
  typeUrl: '/cosmos.group.v1.EventVote',
  encode(
    message: EventVote,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVote {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? BigInt(object.proposalId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: EventVoteAmino): EventVote {
    const message = createBaseEventVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id =
      message.proposalId !== BigInt(0)
        ? message.proposalId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteAminoMsg): EventVote {
    return EventVote.fromAmino(object.value);
  },
  toAminoMsg(message: EventVote): EventVoteAminoMsg {
    return {
      type: 'cosmos-sdk/EventVote',
      value: EventVote.toAmino(message),
    };
  },
  fromProtoMsg(message: EventVoteProtoMsg): EventVote {
    return EventVote.decode(message.value);
  },
  toProto(message: EventVote): Uint8Array {
    return EventVote.encode(message).finish();
  },
  toProtoMsg(message: EventVote): EventVoteProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventVote',
      value: EventVote.encode(message).finish(),
    };
  },
};
function createBaseEventExec(): EventExec {
  return {
    proposalId: BigInt(0),
    result: 0,
    logs: '',
  };
}
export const EventExec = {
  typeUrl: '/cosmos.group.v1.EventExec',
  encode(
    message: EventExec,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== '') {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExec {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? BigInt(object.proposalId.toString())
        : BigInt(0);
    message.result = object.result ?? 0;
    message.logs = object.logs ?? '';
    return message;
  },
  fromAmino(object: EventExecAmino): EventExec {
    const message = createBaseEventExec();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    if (object.logs !== undefined && object.logs !== null) {
      message.logs = object.logs;
    }
    return message;
  },
  toAmino(message: EventExec): EventExecAmino {
    const obj: any = {};
    obj.proposal_id =
      message.proposalId !== BigInt(0)
        ? message.proposalId?.toString()
        : undefined;
    obj.result = message.result === 0 ? undefined : message.result;
    obj.logs = message.logs === '' ? undefined : message.logs;
    return obj;
  },
  fromAminoMsg(object: EventExecAminoMsg): EventExec {
    return EventExec.fromAmino(object.value);
  },
  toAminoMsg(message: EventExec): EventExecAminoMsg {
    return {
      type: 'cosmos-sdk/EventExec',
      value: EventExec.toAmino(message),
    };
  },
  fromProtoMsg(message: EventExecProtoMsg): EventExec {
    return EventExec.decode(message.value);
  },
  toProto(message: EventExec): Uint8Array {
    return EventExec.encode(message).finish();
  },
  toProtoMsg(message: EventExec): EventExecProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventExec',
      value: EventExec.encode(message).finish(),
    };
  },
};
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: BigInt(0),
    address: '',
  };
}
export const EventLeaveGroup = {
  typeUrl: '/cosmos.group.v1.EventLeaveGroup',
  encode(
    message: EventLeaveGroup,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLeaveGroup {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? BigInt(object.groupId.toString())
        : BigInt(0);
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventLeaveGroup): EventLeaveGroupAmino {
    const obj: any = {};
    obj.group_id =
      message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventLeaveGroupAminoMsg): EventLeaveGroup {
    return EventLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventLeaveGroup): EventLeaveGroupAminoMsg {
    return {
      type: 'cosmos-sdk/EventLeaveGroup',
      value: EventLeaveGroup.toAmino(message),
    };
  },
  fromProtoMsg(message: EventLeaveGroupProtoMsg): EventLeaveGroup {
    return EventLeaveGroup.decode(message.value);
  },
  toProto(message: EventLeaveGroup): Uint8Array {
    return EventLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: EventLeaveGroup): EventLeaveGroupProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventLeaveGroup',
      value: EventLeaveGroup.encode(message).finish(),
    };
  },
};
function createBaseEventProposalPruned(): EventProposalPruned {
  return {
    proposalId: BigInt(0),
    status: 0,
    tallyResult: undefined,
  };
}
export const EventProposalPruned = {
  typeUrl: '/cosmos.group.v1.EventProposalPruned',
  encode(
    message: EventProposalPruned,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tallyResult !== undefined) {
      TallyResult.encode(
        message.tallyResult,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): EventProposalPruned {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.tallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventProposalPruned>): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? BigInt(object.proposalId.toString())
        : BigInt(0);
    message.status = object.status ?? 0;
    message.tallyResult =
      object.tallyResult !== undefined && object.tallyResult !== null
        ? TallyResult.fromPartial(object.tallyResult)
        : undefined;
    return message;
  },
  fromAmino(object: EventProposalPrunedAmino): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.tally_result !== undefined && object.tally_result !== null) {
      message.tallyResult = TallyResult.fromAmino(object.tally_result);
    }
    return message;
  },
  toAmino(message: EventProposalPruned): EventProposalPrunedAmino {
    const obj: any = {};
    obj.proposal_id =
      message.proposalId !== BigInt(0)
        ? message.proposalId?.toString()
        : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.tally_result = message.tallyResult
      ? TallyResult.toAmino(message.tallyResult)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: EventProposalPrunedAminoMsg): EventProposalPruned {
    return EventProposalPruned.fromAmino(object.value);
  },
  toAminoMsg(message: EventProposalPruned): EventProposalPrunedAminoMsg {
    return {
      type: 'cosmos-sdk/EventProposalPruned',
      value: EventProposalPruned.toAmino(message),
    };
  },
  fromProtoMsg(message: EventProposalPrunedProtoMsg): EventProposalPruned {
    return EventProposalPruned.decode(message.value);
  },
  toProto(message: EventProposalPruned): Uint8Array {
    return EventProposalPruned.encode(message).finish();
  },
  toProtoMsg(message: EventProposalPruned): EventProposalPrunedProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventProposalPruned',
      value: EventProposalPruned.encode(message).finish(),
    };
  },
};
function createBaseEventTallyError(): EventTallyError {
  return {
    proposalId: BigInt(0),
    errorMessage: '',
  };
}
export const EventTallyError = {
  typeUrl: '/cosmos.group.v1.EventTallyError',
  encode(
    message: EventTallyError,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.errorMessage !== '') {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTallyError {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTallyError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTallyError>): EventTallyError {
    const message = createBaseEventTallyError();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? BigInt(object.proposalId.toString())
        : BigInt(0);
    message.errorMessage = object.errorMessage ?? '';
    return message;
  },
  fromAmino(object: EventTallyErrorAmino): EventTallyError {
    const message = createBaseEventTallyError();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.error_message !== undefined && object.error_message !== null) {
      message.errorMessage = object.error_message;
    }
    return message;
  },
  toAmino(message: EventTallyError): EventTallyErrorAmino {
    const obj: any = {};
    obj.proposal_id =
      message.proposalId !== BigInt(0)
        ? message.proposalId?.toString()
        : undefined;
    obj.error_message =
      message.errorMessage === '' ? undefined : message.errorMessage;
    return obj;
  },
  fromAminoMsg(object: EventTallyErrorAminoMsg): EventTallyError {
    return EventTallyError.fromAmino(object.value);
  },
  toAminoMsg(message: EventTallyError): EventTallyErrorAminoMsg {
    return {
      type: 'cosmos-sdk/EventTallyError',
      value: EventTallyError.toAmino(message),
    };
  },
  fromProtoMsg(message: EventTallyErrorProtoMsg): EventTallyError {
    return EventTallyError.decode(message.value);
  },
  toProto(message: EventTallyError): Uint8Array {
    return EventTallyError.encode(message).finish();
  },
  toProtoMsg(message: EventTallyError): EventTallyErrorProtoMsg {
    return {
      typeUrl: '/cosmos.group.v1.EventTallyError',
      value: EventTallyError.encode(message).finish(),
    };
  },
};
