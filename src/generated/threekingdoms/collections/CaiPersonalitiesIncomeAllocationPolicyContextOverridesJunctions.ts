
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiContextsForContextTypes } from "./CaiContextsForContextTypes";

export namespace CaiPersonalitiesIncomeAllocationPolicyContextOverridesJunctions {
  export const KEY = new CollectionKey("cai_personalities_income_allocation_policy_context_overrides_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incomeAllocationPolicy: string;
    readonly priority: number;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incomeAllocationPolicy = values["income_allocation_policy"];
      this.priority = values["priority"];
      this._context = values["context"];
    }
    
    get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocationPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocationPolicies.KEY, CaiPersonalitiesIncomeAllocationPolicies.Entry);
      return collection.find(entry => entry.key === this._incomeAllocationPolicy);
    }
    
    get context(): CaiContextsForContextTypes.Entry | undefined {
      const collection = <CaiContextsForContextTypes.Entry[]>this.collectionCache.getCollection(CaiContextsForContextTypes.KEY, CaiContextsForContextTypes.Entry);
      return collection.find(entry => entry.contextKey === this._context);
    }
  }
}

export default CaiPersonalitiesIncomeAllocationPolicyContextOverridesJunctions;
