
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualCategories } from "./RitualCategories";

export namespace RitualChains {
  export const KEY = new CollectionKey("ritual_chains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;
    readonly desctiption: string;
    readonly _category: string;
    readonly ritualSitesRequired: number;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
      this.desctiption = values["desctiption"];
      this._category = values["category"];
      this.ritualSitesRequired = values["ritual_sites_required"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
    }
    
    get category(): RitualCategories.Entry | undefined {
      const collection = <RitualCategories.Entry[]>this.collectionCache.getCollection(RitualCategories.KEY, RitualCategories.Entry);
      return collection.find(entry => entry.id === this._category);
    }
  }
}

export default RitualChains;
