
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";
import { EffectBundles } from "./EffectBundles";

export namespace MissionCategoryThresholds {
  export const KEY = new CollectionKey("mission_category_thresholds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly _category: string;
    readonly _effectBundle: string;
    readonly thresholdWeight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this._category = values["category"];
      this._effectBundle = values["effect_bundle"];
      this.thresholdWeight = values["threshold_weight"];
    }
    
    get category(): CdirEventsCategories.Entry | undefined {
      const collection = <CdirEventsCategories.Entry[]>this.collectionCache.getCollection(CdirEventsCategories.KEY, CdirEventsCategories.Entry);
      return collection.find(entry => entry.categoryKey === this._category);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default MissionCategoryThresholds;
