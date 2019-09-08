
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";

export namespace CaiPersonalitiesBudgetPolicies {
  export const KEY = new CollectionKey("cai_personalities_budget_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultBudgetAllocationKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultBudgetAllocationKey = values["default_budget_allocation_key"];
    }
    
    get defaultBudgetAllocationKey(): CaiPersonalitiesBudgetAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetAllocations.KEY, CaiPersonalitiesBudgetAllocations.Entry);
      return collection.find(entry => entry.key === this._defaultBudgetAllocationKey);
    }
  }
}

export default CaiPersonalitiesBudgetPolicies;
