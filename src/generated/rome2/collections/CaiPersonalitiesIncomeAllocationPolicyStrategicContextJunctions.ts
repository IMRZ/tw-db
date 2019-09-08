
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";

export namespace CaiPersonalitiesIncomeAllocationPolicyStrategicContextJunctions {
  export const KEY = new CollectionKey("cai_personalities_income_allocation_policy_strategic_context_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incomeAllocationPolicyKey: string;
    readonly _strategicContextKey: string;
    readonly proportionOfNetIncomeToSpend: number;
    readonly zeroOrNegativeNetIncomeSurvivalRounds: number;
    readonly positiveNetIncomeSurvivalRounds: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incomeAllocationPolicyKey = values["income_allocation_policy_key"];
      this._strategicContextKey = values["strategic_context_key"];
      this.proportionOfNetIncomeToSpend = values["proportion_of_net_income_to_spend"];
      this.zeroOrNegativeNetIncomeSurvivalRounds = values["zero_or_negative_net_income_survival_rounds"];
      this.positiveNetIncomeSurvivalRounds = values["positive_net_income_survival_rounds"];
    }
    
    get incomeAllocationPolicyKey(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocationPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocationPolicies.KEY, CaiPersonalitiesIncomeAllocationPolicies.Entry);
      return collection.find(entry => entry.key === this._incomeAllocationPolicyKey);
    }
    
    get strategicContextKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._strategicContextKey);
    }
  }
}

export default CaiPersonalitiesIncomeAllocationPolicyStrategicContextJunctions;
