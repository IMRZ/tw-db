
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";

export namespace CaiPersonalitiesBudgetAllocationPolicyJunctions {
  export const KEY = new CollectionKey("cai_personalities_budget_allocation_policy_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _budgetPolicyKey: string;
    readonly _budgetContextKey: string;
    readonly _budgetAllocationKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._budgetPolicyKey = values["budget_policy_key"];
      this._budgetContextKey = values["budget_context_key"];
      this._budgetAllocationKey = values["budget_allocation_key"];
    }
    
    get budgetPolicyKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetPolicies.KEY, CaiPersonalitiesBudgetPolicies.Entry);
      return collection.find(entry => entry.key === this._budgetPolicyKey);
    }
    
    get budgetContextKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._budgetContextKey);
    }
    
    get budgetAllocationKey(): CaiPersonalitiesBudgetAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetAllocations.KEY, CaiPersonalitiesBudgetAllocations.Entry);
      return collection.find(entry => entry.key === this._budgetAllocationKey);
    }
  }
}

export default CaiPersonalitiesBudgetAllocationPolicyJunctions;
