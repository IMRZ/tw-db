
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityFinancialContextControls {
  export const KEY = new CollectionKey("cai_personality_financial_context_controls");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly financialContextControlProfile: string;
    readonly goIntoCrisisIfBankruptInXRounds: number;
    readonly allowOverspendIfCanSupportNetIncomeForXRounds: number;
    readonly allowOverspendIfTreasuryIsXMultipleOfRegularIncome: number;
    readonly continueInOverspendIfTreasuryIsXMultipleOfRegularIncome: number;
    readonly allowOverspendIfTreasuryAboveX: number;
    readonly continueInOverspendIfTreasuryAboveX: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.financialContextControlProfile = values["financial_context_control_profile"];
      this.goIntoCrisisIfBankruptInXRounds = values["go_into_crisis_if_bankrupt_in_x_rounds"];
      this.allowOverspendIfCanSupportNetIncomeForXRounds = values["allow_overspend_if_can_support_net_income_for_x_rounds"];
      this.allowOverspendIfTreasuryIsXMultipleOfRegularIncome = values["allow_overspend_if_treasury_is_x_multiple_of_regular_income"];
      this.continueInOverspendIfTreasuryIsXMultipleOfRegularIncome = values["continue_in_overspend_if_treasury_is_x_multiple_of_regular_income"];
      this.allowOverspendIfTreasuryAboveX = values["allow_overspend_if_treasury_above_x"];
      this.continueInOverspendIfTreasuryAboveX = values["continue_in_overspend_if_treasury_above_x"];
    }
    
  }
}

export default CaiPersonalityFinancialContextControls;
