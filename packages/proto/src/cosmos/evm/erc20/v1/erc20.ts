//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import {
  Metadata,
  MetadataAmino,
  MetadataSDKType,
} from '../../../bank/v1beta1/bank';
/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export const OwnerSDKType = Owner;
export const OwnerAmino = Owner;
export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case 'OWNER_UNSPECIFIED':
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case 'OWNER_MODULE':
      return Owner.OWNER_MODULE;
    case 2:
    case 'OWNER_EXTERNAL':
      return Owner.OWNER_EXTERNAL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Owner.UNRECOGNIZED;
  }
}
export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return 'OWNER_UNSPECIFIED';
    case Owner.OWNER_MODULE:
      return 'OWNER_MODULE';
    case Owner.OWNER_EXTERNAL:
      return 'OWNER_EXTERNAL';
    case Owner.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 * Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** erc20_address is the hex address of ERC20 contract token */
  erc20Address: string;
  /** denom defines the cosmos base denomination to be mapped to */
  denom: string;
  /** enabled defines the token mapping enable status */
  enabled: boolean;
  /**
   * contract_owner is the an ENUM specifying the type of ERC20 owner (0
   * invalid, 1 ModuleAccount, 2 external address)
   */
  contractOwner: Owner;
}
export interface TokenPairProtoMsg {
  typeUrl: '/cosmos.evm.erc20.v1.TokenPair';
  value: Uint8Array;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 * Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairAmino {
  /** erc20_address is the hex address of ERC20 contract token */
  erc20_address?: string;
  /** denom defines the cosmos base denomination to be mapped to */
  denom?: string;
  /** enabled defines the token mapping enable status */
  enabled?: boolean;
  /**
   * contract_owner is the an ENUM specifying the type of ERC20 owner (0
   * invalid, 1 ModuleAccount, 2 external address)
   */
  contract_owner?: Owner;
}
export interface TokenPairAminoMsg {
  type: 'cosmos-sdk/TokenPair';
  value: TokenPairAmino;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 * Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairSDKType {
  erc20_address: string;
  denom: string;
  enabled: boolean;
  contract_owner: Owner;
}
/**
 * Deprecated: RegisterCoinProposal is a gov Content type to register a token
 * pair for a native Cosmos coin. We're keeping it to remove the existing
 * proposals from store. After that, remove this message.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface RegisterCoinProposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */
  description: string;
  /** metadata slice of the native Cosmos coins */
  metadata: Metadata[];
}
export interface RegisterCoinProposalProtoMsg {
  typeUrl: '/cosmos.evm.erc20.v1.RegisterCoinProposal';
  value: Uint8Array;
}
/**
 * Deprecated: RegisterCoinProposal is a gov Content type to register a token
 * pair for a native Cosmos coin. We're keeping it to remove the existing
 * proposals from store. After that, remove this message.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface RegisterCoinProposalAmino {
  /** title of the proposal */
  title?: string;
  /** description of the proposal */
  description?: string;
  /** metadata slice of the native Cosmos coins */
  metadata?: MetadataAmino[];
}
export interface RegisterCoinProposalAminoMsg {
  type: 'cosmos-sdk/RegisterCoinProposal';
  value: RegisterCoinProposalAmino;
}
/**
 * Deprecated: RegisterCoinProposal is a gov Content type to register a token
 * pair for a native Cosmos coin. We're keeping it to remove the existing
 * proposals from store. After that, remove this message.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface RegisterCoinProposalSDKType {
  title: string;
  description: string;
  metadata: MetadataSDKType[];
}
/**
 * Deprecated: ProposalMetadata is used to parse a slice of denom metadata and
 * generate the RegisterCoinProposal content. We're keeping it to remove the
 * existing proposals from store. After that, remove this message.
 */
export interface ProposalMetadata {
  /** metadata slice of the native Cosmos coins */
  metadata: Metadata[];
}
export interface ProposalMetadataProtoMsg {
  typeUrl: '/cosmos.evm.erc20.v1.ProposalMetadata';
  value: Uint8Array;
}
/**
 * Deprecated: ProposalMetadata is used to parse a slice of denom metadata and
 * generate the RegisterCoinProposal content. We're keeping it to remove the
 * existing proposals from store. After that, remove this message.
 */
export interface ProposalMetadataAmino {
  /** metadata slice of the native Cosmos coins */
  metadata?: MetadataAmino[];
}
export interface ProposalMetadataAminoMsg {
  type: 'cosmos-sdk/ProposalMetadata';
  value: ProposalMetadataAmino;
}
/**
 * Deprecated: ProposalMetadata is used to parse a slice of denom metadata and
 * generate the RegisterCoinProposal content. We're keeping it to remove the
 * existing proposals from store. After that, remove this message.
 */
export interface ProposalMetadataSDKType {
  metadata: MetadataSDKType[];
}
/**
 * Deprecated: RegisterERC20Proposal is a gov Content type to register a token
 * pair for an ERC20 token.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface RegisterERC20Proposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */
  description: string;
  /** erc20addresses is a slice of  ERC20 token contract addresses */
  erc20addresses: string[];
}
export interface RegisterERC20ProposalProtoMsg {
  typeUrl: '/cosmos.evm.erc20.v1.RegisterERC20Proposal';
  value: Uint8Array;
}
/**
 * Deprecated: RegisterERC20Proposal is a gov Content type to register a token
 * pair for an ERC20 token.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface RegisterERC20ProposalAmino {
  /** title of the proposal */
  title?: string;
  /** description of the proposal */
  description?: string;
  /** erc20addresses is a slice of  ERC20 token contract addresses */
  erc20addresses?: string[];
}
export interface RegisterERC20ProposalAminoMsg {
  type: 'cosmos-sdk/RegisterERC20Proposal';
  value: RegisterERC20ProposalAmino;
}
/**
 * Deprecated: RegisterERC20Proposal is a gov Content type to register a token
 * pair for an ERC20 token.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface RegisterERC20ProposalSDKType {
  title: string;
  description: string;
  erc20addresses: string[];
}
/**
 * Deprecated: ToggleTokenConversionProposal is a gov Content type to toggle the
 * conversion of a token pair.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface ToggleTokenConversionProposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */
  description: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface ToggleTokenConversionProposalProtoMsg {
  typeUrl: '/cosmos.evm.erc20.v1.ToggleTokenConversionProposal';
  value: Uint8Array;
}
/**
 * Deprecated: ToggleTokenConversionProposal is a gov Content type to toggle the
 * conversion of a token pair.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface ToggleTokenConversionProposalAmino {
  /** title of the proposal */
  title?: string;
  /** description of the proposal */
  description?: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token?: string;
}
export interface ToggleTokenConversionProposalAminoMsg {
  type: 'cosmos-sdk/ToggleTokenConversionProposal';
  value: ToggleTokenConversionProposalAmino;
}
/**
 * Deprecated: ToggleTokenConversionProposal is a gov Content type to toggle the
 * conversion of a token pair.
 *
 * NOTE: Keep this message for backwards compatibility on proposals query
 */
export interface ToggleTokenConversionProposalSDKType {
  title: string;
  description: string;
  token: string;
}
function createBaseTokenPair(): TokenPair {
  return {
    erc20Address: '',
    denom: '',
    enabled: false,
    contractOwner: 0,
  };
}
export const TokenPair = {
  typeUrl: '/cosmos.evm.erc20.v1.TokenPair',
  encode(
    message: TokenPair,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.erc20Address !== '') {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPair {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.contractOwner = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenPair>): TokenPair {
    const message = createBaseTokenPair();
    message.erc20Address = object.erc20Address ?? '';
    message.denom = object.denom ?? '';
    message.enabled = object.enabled ?? false;
    message.contractOwner = object.contractOwner ?? 0;
    return message;
  },
  fromAmino(object: TokenPairAmino): TokenPair {
    const message = createBaseTokenPair();
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20Address = object.erc20_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contractOwner = object.contract_owner;
    }
    return message;
  },
  toAmino(message: TokenPair): TokenPairAmino {
    const obj: any = {};
    obj.erc20_address =
      message.erc20Address === '' ? undefined : message.erc20Address;
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.contract_owner =
      message.contractOwner === 0 ? undefined : message.contractOwner;
    return obj;
  },
  fromAminoMsg(object: TokenPairAminoMsg): TokenPair {
    return TokenPair.fromAmino(object.value);
  },
  toAminoMsg(message: TokenPair): TokenPairAminoMsg {
    return {
      type: 'cosmos-sdk/TokenPair',
      value: TokenPair.toAmino(message),
    };
  },
  fromProtoMsg(message: TokenPairProtoMsg): TokenPair {
    return TokenPair.decode(message.value);
  },
  toProto(message: TokenPair): Uint8Array {
    return TokenPair.encode(message).finish();
  },
  toProtoMsg(message: TokenPair): TokenPairProtoMsg {
    return {
      typeUrl: '/cosmos.evm.erc20.v1.TokenPair',
      value: TokenPair.encode(message).finish(),
    };
  },
};
function createBaseRegisterCoinProposal(): RegisterCoinProposal {
  return {
    title: '',
    description: '',
    metadata: [],
  };
}
export const RegisterCoinProposal = {
  typeUrl: '/cosmos.evm.erc20.v1.RegisterCoinProposal',
  encode(
    message: RegisterCoinProposal,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): RegisterCoinProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterCoinProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RegisterCoinProposal>): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.metadata =
      object.metadata?.map((e) => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RegisterCoinProposalAmino): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.metadata = object.metadata?.map((e) => Metadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RegisterCoinProposal): RegisterCoinProposalAmino {
    const obj: any = {};
    obj.title = message.title === '' ? undefined : message.title;
    obj.description =
      message.description === '' ? undefined : message.description;
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) =>
        e ? Metadata.toAmino(e) : undefined
      );
    } else {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  fromAminoMsg(object: RegisterCoinProposalAminoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RegisterCoinProposal): RegisterCoinProposalAminoMsg {
    return {
      type: 'cosmos-sdk/RegisterCoinProposal',
      value: RegisterCoinProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: RegisterCoinProposalProtoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.decode(message.value);
  },
  toProto(message: RegisterCoinProposal): Uint8Array {
    return RegisterCoinProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterCoinProposal): RegisterCoinProposalProtoMsg {
    return {
      typeUrl: '/cosmos.evm.erc20.v1.RegisterCoinProposal',
      value: RegisterCoinProposal.encode(message).finish(),
    };
  },
};
function createBaseProposalMetadata(): ProposalMetadata {
  return {
    metadata: [],
  };
}
export const ProposalMetadata = {
  typeUrl: '/cosmos.evm.erc20.v1.ProposalMetadata',
  encode(
    message: ProposalMetadata,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalMetadata {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalMetadata>): ProposalMetadata {
    const message = createBaseProposalMetadata();
    message.metadata =
      object.metadata?.map((e) => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalMetadataAmino): ProposalMetadata {
    const message = createBaseProposalMetadata();
    message.metadata = object.metadata?.map((e) => Metadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalMetadata): ProposalMetadataAmino {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) =>
        e ? Metadata.toAmino(e) : undefined
      );
    } else {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  fromAminoMsg(object: ProposalMetadataAminoMsg): ProposalMetadata {
    return ProposalMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: ProposalMetadata): ProposalMetadataAminoMsg {
    return {
      type: 'cosmos-sdk/ProposalMetadata',
      value: ProposalMetadata.toAmino(message),
    };
  },
  fromProtoMsg(message: ProposalMetadataProtoMsg): ProposalMetadata {
    return ProposalMetadata.decode(message.value);
  },
  toProto(message: ProposalMetadata): Uint8Array {
    return ProposalMetadata.encode(message).finish();
  },
  toProtoMsg(message: ProposalMetadata): ProposalMetadataProtoMsg {
    return {
      typeUrl: '/cosmos.evm.erc20.v1.ProposalMetadata',
      value: ProposalMetadata.encode(message).finish(),
    };
  },
};
function createBaseRegisterERC20Proposal(): RegisterERC20Proposal {
  return {
    title: '',
    description: '',
    erc20addresses: [],
  };
}
export const RegisterERC20Proposal = {
  typeUrl: '/cosmos.evm.erc20.v1.RegisterERC20Proposal',
  encode(
    message: RegisterERC20Proposal,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.erc20addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): RegisterERC20Proposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterERC20Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.erc20addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RegisterERC20Proposal>): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.erc20addresses = object.erc20addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: RegisterERC20ProposalAmino): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.erc20addresses = object.erc20addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message: RegisterERC20Proposal): RegisterERC20ProposalAmino {
    const obj: any = {};
    obj.title = message.title === '' ? undefined : message.title;
    obj.description =
      message.description === '' ? undefined : message.description;
    if (message.erc20addresses) {
      obj.erc20addresses = message.erc20addresses.map((e) => e);
    } else {
      obj.erc20addresses = message.erc20addresses;
    }
    return obj;
  },
  fromAminoMsg(object: RegisterERC20ProposalAminoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: RegisterERC20Proposal): RegisterERC20ProposalAminoMsg {
    return {
      type: 'cosmos-sdk/RegisterERC20Proposal',
      value: RegisterERC20Proposal.toAmino(message),
    };
  },
  fromProtoMsg(message: RegisterERC20ProposalProtoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.decode(message.value);
  },
  toProto(message: RegisterERC20Proposal): Uint8Array {
    return RegisterERC20Proposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterERC20Proposal): RegisterERC20ProposalProtoMsg {
    return {
      typeUrl: '/cosmos.evm.erc20.v1.RegisterERC20Proposal',
      value: RegisterERC20Proposal.encode(message).finish(),
    };
  },
};
function createBaseToggleTokenConversionProposal(): ToggleTokenConversionProposal {
  return {
    title: '',
    description: '',
    token: '',
  };
}
export const ToggleTokenConversionProposal = {
  typeUrl: '/cosmos.evm.erc20.v1.ToggleTokenConversionProposal',
  encode(
    message: ToggleTokenConversionProposal,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== '') {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): ToggleTokenConversionProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToggleTokenConversionProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ToggleTokenConversionProposal>
  ): ToggleTokenConversionProposal {
    const message = createBaseToggleTokenConversionProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.token = object.token ?? '';
    return message;
  },
  fromAmino(
    object: ToggleTokenConversionProposalAmino
  ): ToggleTokenConversionProposal {
    const message = createBaseToggleTokenConversionProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(
    message: ToggleTokenConversionProposal
  ): ToggleTokenConversionProposalAmino {
    const obj: any = {};
    obj.title = message.title === '' ? undefined : message.title;
    obj.description =
      message.description === '' ? undefined : message.description;
    obj.token = message.token === '' ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(
    object: ToggleTokenConversionProposalAminoMsg
  ): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.fromAmino(object.value);
  },
  toAminoMsg(
    message: ToggleTokenConversionProposal
  ): ToggleTokenConversionProposalAminoMsg {
    return {
      type: 'cosmos-sdk/ToggleTokenConversionProposal',
      value: ToggleTokenConversionProposal.toAmino(message),
    };
  },
  fromProtoMsg(
    message: ToggleTokenConversionProposalProtoMsg
  ): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.decode(message.value);
  },
  toProto(message: ToggleTokenConversionProposal): Uint8Array {
    return ToggleTokenConversionProposal.encode(message).finish();
  },
  toProtoMsg(
    message: ToggleTokenConversionProposal
  ): ToggleTokenConversionProposalProtoMsg {
    return {
      typeUrl: '/cosmos.evm.erc20.v1.ToggleTokenConversionProposal',
      value: ToggleTokenConversionProposal.encode(message).finish(),
    };
  },
};
