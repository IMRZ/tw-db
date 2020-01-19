
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";

export namespace CaiPersonalitiesBudgetPolicyContextOverrides {
  export const KEY = new CollectionKey("cai_personalities_budget_policy_context_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _budgetProfileKey: string;
    readonly priority: number;
    readonly _defaultBudgetAllocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._budgetProfileKey = values["budget_profile_key"];
      this.priority = values["priority"];
      this._defaultBudgetAllocation = values["default_budget_allocation"];
    }
    
    get budgetProfileKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetPolicies.KEY, CaiPersonalitiesBudgetPolicies.Entry);
      return collection.find(entry => entry.key === this._budgetProfileKey);
    }
    
    get defaultBudgetAllocation(): CaiPersonalitiesBudgetAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetAllocations.KEY, CaiPersonalitiesBudgetAllocations.Entry);
      return collection.find(entry => entry.key === this._defaultBudgetAllocation);
    }
  }
}

export default CaiPersonalitiesBudgetPolicyContextOverrides;
