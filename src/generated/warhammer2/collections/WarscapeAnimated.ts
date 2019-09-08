
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeCategories } from "./WarscapeCategories";
import { TexcExpansions } from "./TexcExpansions";

export namespace WarscapeAnimated {
  export const KEY = new CollectionKey("warscape_animated");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly textureFilenameBase: string;
    readonly _category: string;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.textureFilenameBase = values["texture_filename_base"];
      this._category = values["category"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get category(): WarscapeCategories.Entry | undefined {
      const collection = <WarscapeCategories.Entry[]>this.collectionCache.getCollection(WarscapeCategories.KEY, WarscapeCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default WarscapeAnimated;
