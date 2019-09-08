
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TraitCategories {
  export const KEY = new CollectionKey("trait_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default TraitCategories;
