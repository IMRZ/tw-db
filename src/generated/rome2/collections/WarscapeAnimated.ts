
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeCategories } from "./WarscapeCategories";

export namespace WarscapeAnimated {
  export const KEY = new CollectionKey("warscape_animated");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly textureFilenameBase: string;
    readonly _category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.textureFilenameBase = values["texture_filename_base"];
      this._category = values["category"];
    }
    
    get category(): WarscapeCategories.Entry | undefined {
      const collection = <WarscapeCategories.Entry[]>this.collectionCache.getCollection(WarscapeCategories.KEY, WarscapeCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default WarscapeAnimated;
