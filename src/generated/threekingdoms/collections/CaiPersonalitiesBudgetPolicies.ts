
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalitiesBudgetPolicies {
  export const KEY = new CollectionKey("cai_personalities_budget_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultBudgetAllocationKey: string;
    readonly _shortDescription: string;
    readonly _longDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultBudgetAllocationKey = values["default_budget_allocation_key"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
    }
    
    get defaultBudgetAllocationKey(): CaiPersonalitiesBudgetAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetAllocations.KEY, CaiPersonalitiesBudgetAllocations.Entry);
      return collection.find(entry => entry.key === this._defaultBudgetAllocationKey);
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiPersonalitiesBudgetPolicies;
