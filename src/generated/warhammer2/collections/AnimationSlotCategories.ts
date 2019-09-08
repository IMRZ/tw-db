
import { CollectionCache, CollectionKey } from "../../../common";
import { AnimationCategories } from "./AnimationCategories";

export namespace AnimationSlotCategories {
  export const KEY = new CollectionKey("animation_slot_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly slot: string;
    readonly _category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.slot = values["slot"];
      this._category = values["category"];
    }
    
    get category(): AnimationCategories.Entry | undefined {
      const collection = <AnimationCategories.Entry[]>this.collectionCache.getCollection(AnimationCategories.KEY, AnimationCategories.Entry);
      return collection.find(entry => entry.name === this._category);
    }
  }
}

export default AnimationSlotCategories;
