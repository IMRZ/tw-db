
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeCategories } from "./WarscapeCategories";

export namespace WarscapeRigid {
  export const KEY = new CollectionKey("warscape_rigid");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly textureDirectory: string;
    readonly _category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.textureDirectory = values["texture_directory"];
      this._category = values["category"];
    }
    
    get category(): WarscapeCategories.Entry | undefined {
      const collection = <WarscapeCategories.Entry[]>this.collectionCache.getCollection(WarscapeCategories.KEY, WarscapeCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default WarscapeRigid;
