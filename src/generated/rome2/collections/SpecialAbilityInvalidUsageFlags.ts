
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityInvalidUsageFlags {
  export const KEY = new CollectionKey("special_ability_invalid_usage_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly flagKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.flagKey = values["flag_key"];
    }
    
  }
}

export default SpecialAbilityInvalidUsageFlags;
