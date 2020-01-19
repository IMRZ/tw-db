
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueCategories } from "./MercenaryRetinueCategories";

export namespace MercenaryRetinueDetails {
  export const KEY = new CollectionKey("mercenary_retinue_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly onlyHighestLevelAvailableToRecruit: boolean;
    readonly spawnsAtFullStrength: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this.onlyHighestLevelAvailableToRecruit = !!values["only_highest_level_available_to_recruit"];
      this.spawnsAtFullStrength = !!values["spawns_at_full_strength"];
    }
    
    get category(): MercenaryRetinueCategories.Entry | undefined {
      const collection = <MercenaryRetinueCategories.Entry[]>this.collectionCache.getCollection(MercenaryRetinueCategories.KEY, MercenaryRetinueCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default MercenaryRetinueDetails;
