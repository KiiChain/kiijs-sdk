//@ts-nocheck
import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import {
  MsgBeginRedelegate,
  MsgBeginRedelegateResponse,
  MsgCancelUnbondingDelegation,
  MsgCancelUnbondingDelegationResponse,
  MsgCreateValidator,
  MsgCreateValidatorResponse,
  MsgDelegate,
  MsgDelegateResponse,
  MsgEditValidator,
  MsgEditValidatorResponse,
  MsgUndelegate,
  MsgUndelegateResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from './tx';
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(
    request: MsgCreateValidator
  ): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(
    request: MsgBeginRedelegate
  ): Promise<MsgBeginRedelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /**
   * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   * and delegate back to previous validator.
   *
   * Since: cosmos-sdk 0.46
   */
  cancelUnbondingDelegation(
    request: MsgCancelUnbondingDelegation
  ): Promise<MsgCancelUnbondingDelegationResponse>;
  /**
   * UpdateParams defines an operation for updating the x/staking module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createValidator(
    request: MsgCreateValidator
  ): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'CreateValidator',
      data
    );
    return promise.then((data) =>
      MsgCreateValidatorResponse.decode(new BinaryReader(data))
    );
  }
  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'EditValidator',
      data
    );
    return promise.then((data) =>
      MsgEditValidatorResponse.decode(new BinaryReader(data))
    );
  }
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'Delegate',
      data
    );
    return promise.then((data) =>
      MsgDelegateResponse.decode(new BinaryReader(data))
    );
  }
  beginRedelegate(
    request: MsgBeginRedelegate
  ): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'BeginRedelegate',
      data
    );
    return promise.then((data) =>
      MsgBeginRedelegateResponse.decode(new BinaryReader(data))
    );
  }
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'Undelegate',
      data
    );
    return promise.then((data) =>
      MsgUndelegateResponse.decode(new BinaryReader(data))
    );
  }
  cancelUnbondingDelegation(
    request: MsgCancelUnbondingDelegation
  ): Promise<MsgCancelUnbondingDelegationResponse> {
    const data = MsgCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'CancelUnbondingDelegation',
      data
    );
    return promise.then((data) =>
      MsgCancelUnbondingDelegationResponse.decode(new BinaryReader(data))
    );
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'UpdateParams',
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data))
    );
  }
}
