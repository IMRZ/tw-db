
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHints } from "./CaiRegionHints";
import { CaiRegionGroups } from "./CaiRegionGroups";

export namespace CaiRegionHintGroups {
  export const KEY = new CollectionKey("cai_region_hint_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _regionHintKey: string;
    readonly _regionGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._regionHintKey = values["region_hint_key"];
      this._regionGroupKey = values["region_group_key"];
    }
    
    get regionHintKey(): CaiRegionHints.Entry | undefined {
      const collection = <CaiRegionHints.Entry[]>this.collectionCache.getCollection(CaiRegionHints.KEY, CaiRegionHints.Entry);
      return collection.find(entry => entry.key === this._regionHintKey);
    }
    
    get regionGroupKey(): CaiRegionGroups.Entry | undefined {
      const collection = <CaiRegionGroups.Entry[]>this.collectionCache.getCollection(CaiRegionGroups.KEY, CaiRegionGroups.Entry);
      return collection.find(entry => entry.key === this._regionGroupKey);
    }
  }
}

export default CaiRegionHintGroups;
