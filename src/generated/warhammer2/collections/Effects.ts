
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectCategories } from "./EffectCategories";

export namespace Effects {
  export const KEY = new CollectionKey("effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly effect: string;
    readonly icon: string;
    readonly description: string;
    readonly priority: number;
    readonly iconNegative: string;
    readonly _category: string;
    readonly isPositiveValueGood: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.effect = values["effect"];
      this.icon = values["icon"];
      this.description = values["description"];
      this.priority = values["priority"];
      this.iconNegative = values["icon_negative"];
      this._category = values["category"];
      this.isPositiveValueGood = !!values["is_positive_value_good"];
    }
    
    get category(): EffectCategories.Entry | undefined {
      const collection = <EffectCategories.Entry[]>this.collectionCache.getCollection(EffectCategories.KEY, EffectCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default Effects;
