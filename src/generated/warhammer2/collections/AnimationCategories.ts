
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AnimationCategories {
  export const KEY = new CollectionKey("animation_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.order = values["order"];
    }
    
  }
}

export default AnimationCategories;
