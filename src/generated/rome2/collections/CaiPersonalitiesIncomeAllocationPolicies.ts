
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesIncomeAllocationPolicies {
  export const KEY = new CollectionKey("cai_personalities_income_allocation_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly defaultProportionOfNetIncomeToSpend: number;
    readonly defaultZeroOrNegativeNetIncomeSurvivalRounds: number;
    readonly defaultPositiveNetIncomeSurvivalRounds: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.defaultProportionOfNetIncomeToSpend = values["default_proportion_of_net_income_to_spend"];
      this.defaultZeroOrNegativeNetIncomeSurvivalRounds = values["default_zero_or_negative_net_income_survival_rounds"];
      this.defaultPositiveNetIncomeSurvivalRounds = values["default_positive_net_income_survival_rounds"];
    }
    
  }
}

export default CaiPersonalitiesIncomeAllocationPolicies;
