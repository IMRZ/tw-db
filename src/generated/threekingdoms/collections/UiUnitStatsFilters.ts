
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiUnitStatsFilters {
  export const KEY = new CollectionKey("ui_unit_stats_filters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UiUnitStatsFilters;
