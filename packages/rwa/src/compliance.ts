import { DeliverTxResponse } from '@cosmjs/stargate';

import { RwaClient } from './client';

export interface ComplianceModuleRequest {
  from: string;
  module_addr: string;
  gas_limit: number;
}

export class ComplianceModule {
  constructor(
    private rwaClient: RwaClient,
    private complianceAddress: string
  ) {}

  /**
   * Adds a new compliance module.
   * @param request - A ComplianceModuleRequest containing module details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async addComplianceModule(
    request: ComplianceModuleRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      add_compliance_module: {
        token_address: request.from,
        module_address: request.module_addr,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.complianceAddress,
      [],
      request.gas_limit
    );
  }

  /**
   * Removes a compliance module.
   * @param request - A ComplianceModuleRequest containing module details
   * @returns Promise<DeliverTxResponse> - The response data from the contract execution
   */
  public async removeComplianceModule(
    request: ComplianceModuleRequest
  ): Promise<DeliverTxResponse> {
    const msg = {
      remove_compliance_module: {
        token_address: request.from,
        module_address: request.module_addr,
      },
    };

    return this.rwaClient.execute(
      request.from,
      msg,
      this.complianceAddress,
      [],
      request.gas_limit
    );
  }
}
