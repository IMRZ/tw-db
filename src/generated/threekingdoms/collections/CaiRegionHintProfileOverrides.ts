
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHintProfiles } from "./CaiRegionHintProfiles";

export namespace CaiRegionHintProfileOverrides {
  export const KEY = new CollectionKey("cai_region_hint_profile_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _regionHintProfileKey: string;
    readonly _regionHintProfileParentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._regionHintProfileKey = values["region_hint_profile_key"];
      this._regionHintProfileParentKey = values["region_hint_profile_parent_key"];
    }
    
    get regionHintProfileKey(): CaiRegionHintProfiles.Entry | undefined {
      const collection = <CaiRegionHintProfiles.Entry[]>this.collectionCache.getCollection(CaiRegionHintProfiles.KEY, CaiRegionHintProfiles.Entry);
      return collection.find(entry => entry.key === this._regionHintProfileKey);
    }
    
    get regionHintProfileParentKey(): CaiRegionHintProfiles.Entry | undefined {
      const collection = <CaiRegionHintProfiles.Entry[]>this.collectionCache.getCollection(CaiRegionHintProfiles.KEY, CaiRegionHintProfiles.Entry);
      return collection.find(entry => entry.key === this._regionHintProfileParentKey);
    }
  }
}

export default CaiRegionHintProfileOverrides;
