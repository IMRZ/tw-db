
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsShipCategories {
  export const KEY = new CollectionKey("unit_stats_ship_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitStatsShipCategories;
