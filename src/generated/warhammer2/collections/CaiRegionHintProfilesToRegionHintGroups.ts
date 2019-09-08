
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionHintProfiles } from "./CaiRegionHintProfiles";
import { CaiRegionHintGroups } from "./CaiRegionHintGroups";

export namespace CaiRegionHintProfilesToRegionHintGroups {
  export const KEY = new CollectionKey("cai_region_hint_profiles_to_region_hint_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _regionHintProfileKey: string;
    readonly _regionHintGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._regionHintProfileKey = values["region_hint_profile_key"];
      this._regionHintGroupKey = values["region_hint_group_key"];
    }
    
    get regionHintProfileKey(): CaiRegionHintProfiles.Entry | undefined {
      const collection = <CaiRegionHintProfiles.Entry[]>this.collectionCache.getCollection(CaiRegionHintProfiles.KEY, CaiRegionHintProfiles.Entry);
      return collection.find(entry => entry.key === this._regionHintProfileKey);
    }
    
    get regionHintGroupKey(): CaiRegionHintGroups.Entry | undefined {
      const collection = <CaiRegionHintGroups.Entry[]>this.collectionCache.getCollection(CaiRegionHintGroups.KEY, CaiRegionHintGroups.Entry);
      return collection.find(entry => entry.key === this._regionHintGroupKey);
    }
  }
}

export default CaiRegionHintProfilesToRegionHintGroups;
