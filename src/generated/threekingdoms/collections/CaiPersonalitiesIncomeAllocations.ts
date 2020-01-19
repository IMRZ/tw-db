
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesIncomeAllocations {
  export const KEY = new CollectionKey("cai_personalities_income_allocations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly proportionOfNetIncomeToSpend: number;
    readonly zeroOrNegativeNetIncomeSurvivalRounds: number;
    readonly positiveNetIncomeSurvivalRounds: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.proportionOfNetIncomeToSpend = values["proportion_of_net_income_to_spend"];
      this.zeroOrNegativeNetIncomeSurvivalRounds = values["zero_or_negative_net_income_survival_rounds"];
      this.positiveNetIncomeSurvivalRounds = values["positive_net_income_survival_rounds"];
    }
    
  }
}

export default CaiPersonalitiesIncomeAllocations;
