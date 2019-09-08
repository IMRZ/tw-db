
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";

export namespace MissionCategoryAgeMultipliers {
  export const KEY = new CollectionKey("mission_category_age_multipliers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly key: string;
    readonly turnThreshold: number;
    readonly multiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this.key = values["key"];
      this.turnThreshold = values["turn_threshold"];
      this.multiplier = values["multiplier"];
    }
    
    get category(): CdirEventsCategories.Entry | undefined {
      const collection = <CdirEventsCategories.Entry[]>this.collectionCache.getCollection(CdirEventsCategories.KEY, CdirEventsCategories.Entry);
      return collection.find(entry => entry.categoryKey === this._category);
    }
  }
}

export default MissionCategoryAgeMultipliers;
