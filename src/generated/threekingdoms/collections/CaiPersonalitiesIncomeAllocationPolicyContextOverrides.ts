
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";

export namespace CaiPersonalitiesIncomeAllocationPolicyContextOverrides {
  export const KEY = new CollectionKey("cai_personalities_income_allocation_policy_context_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incomeAllocationPolicy: string;
    readonly priority: number;
    readonly _incomeAllocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incomeAllocationPolicy = values["income_allocation_policy"];
      this.priority = values["priority"];
      this._incomeAllocation = values["income_allocation"];
    }
    
    get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocationPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocationPolicies.KEY, CaiPersonalitiesIncomeAllocationPolicies.Entry);
      return collection.find(entry => entry.key === this._incomeAllocationPolicy);
    }
    
    get incomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocations.KEY, CaiPersonalitiesIncomeAllocations.Entry);
      return collection.find(entry => entry.key === this._incomeAllocation);
    }
  }
}

export default CaiPersonalitiesIncomeAllocationPolicyContextOverrides;
