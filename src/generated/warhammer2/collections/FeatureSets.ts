
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureSetMilitaryForceTypes } from "./FactionFeatureSetMilitaryForceTypes";

export namespace FeatureSets {
  export const KEY = new CollectionKey("feature_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly priority: number;
    readonly _militaryForceTypes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.priority = values["priority"];
      this._militaryForceTypes = values["military_force_types"];
    }
    
    get militaryForceTypes(): FactionFeatureSetMilitaryForceTypes.Entry | undefined {
      const collection = <FactionFeatureSetMilitaryForceTypes.Entry[]>this.collectionCache.getCollection(FactionFeatureSetMilitaryForceTypes.KEY, FactionFeatureSetMilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._militaryForceTypes);
    }
  }
}

export default FeatureSets;
