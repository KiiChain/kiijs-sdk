import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from './client';

export interface AddIdentityRequest {
  from: string;
  country: string;
  gas_limit: number;
}

export interface UpdateIdentityRequest {
  from: string;
  new_country: string;
  identity_owner: string;
  gas_limit: number;
}

export interface RemoveIdentityRequest {
  from: string;
  identity_owner: string;
  gas_limit: number;
}

export class IdentityModule {
  constructor(
    private rwaClient: RwaClient,
    private identityAddress: string
  ) {}

  /**
   * Adds a new identity to the chain.
   * @param request - An AddIdentityRequest containing identity details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async addIdentity(
    request: AddIdentityRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      add_identity: {
        from: request.from,
        country: request.country,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.identityAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Updates an existing identity.
   * @param request - An UpdateIdentityRequest containing updated identity details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async updateIdentity(
    request: UpdateIdentityRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      update_identity: {
        from: request.from,
        new_country: request.new_country,
        identity_owner: request.identity_owner,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.identityAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Removes an identity from the chain.
   * @param request - A RemoveIdentityRequest containing identity details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async removeIdentity(
    request: RemoveIdentityRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      remove_identity: {
        from: request.from,
        identity_owner: request.identity_owner,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.identityAddress,
      [],
      request.gas_limit
    );
  }
}
