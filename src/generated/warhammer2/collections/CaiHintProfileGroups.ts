
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHintProfiles } from "./CaiRegionHintProfiles";

export namespace CaiHintProfileGroups {
  export const KEY = new CollectionKey("cai_hint_profile_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _regionHintProfileKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._regionHintProfileKey = values["region_hint_profile_key"];
    }
    
    get regionHintProfileKey(): CaiRegionHintProfiles.Entry | undefined {
      const collection = <CaiRegionHintProfiles.Entry[]>this.collectionCache.getCollection(CaiRegionHintProfiles.KEY, CaiRegionHintProfiles.Entry);
      return collection.find(entry => entry.key === this._regionHintProfileKey);
    }
  }
}

export default CaiHintProfileGroups;
