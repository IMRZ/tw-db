
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";

export namespace CaiPersonalitiesIncomeAllocationPolicies {
  export const KEY = new CollectionKey("cai_personalities_income_allocation_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultIncomeAllocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultIncomeAllocation = values["default_income_allocation"];
    }
    
    get defaultIncomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocations.KEY, CaiPersonalitiesIncomeAllocations.Entry);
      return collection.find(entry => entry.key === this._defaultIncomeAllocation);
    }
  }
}

export default CaiPersonalitiesIncomeAllocationPolicies;
