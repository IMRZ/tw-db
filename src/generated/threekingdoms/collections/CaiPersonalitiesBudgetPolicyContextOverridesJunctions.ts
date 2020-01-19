
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiContextsForContextTypes } from "./CaiContextsForContextTypes";

export namespace CaiPersonalitiesBudgetPolicyContextOverridesJunctions {
  export const KEY = new CollectionKey("cai_personalities_budget_policy_context_overrides_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _budgetProfileKey: string;
    readonly priority: number;
    readonly _contextKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._budgetProfileKey = values["budget_profile_key"];
      this.priority = values["priority"];
      this._contextKey = values["context_key"];
    }
    
    get budgetProfileKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetPolicies.KEY, CaiPersonalitiesBudgetPolicies.Entry);
      return collection.find(entry => entry.key === this._budgetProfileKey);
    }
    
    get contextKey(): CaiContextsForContextTypes.Entry | undefined {
      const collection = <CaiContextsForContextTypes.Entry[]>this.collectionCache.getCollection(CaiContextsForContextTypes.KEY, CaiContextsForContextTypes.Entry);
      return collection.find(entry => entry.contextKey === this._contextKey);
    }
  }
}

export default CaiPersonalitiesBudgetPolicyContextOverridesJunctions;
