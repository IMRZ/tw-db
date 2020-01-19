
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityInvalidUsageFlags {
  export const KEY = new CollectionKey("special_ability_invalid_usage_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly flagKey: string;
    readonly flagDescription: string;
    readonly altDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.flagKey = values["flag_key"];
      this.flagDescription = values["flag_description"];
      this.altDescription = values["alt_description"];
    }
    
  }
}

export default SpecialAbilityInvalidUsageFlags;
