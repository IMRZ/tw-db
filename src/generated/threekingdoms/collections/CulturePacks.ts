
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturePackIds } from "./CulturePackIds";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CulturePacks {
  export const KEY = new CollectionKey("culture_packs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _id: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._id = values["id"];
      this._subculture = values["subculture"];
    }
    
    get id(): CulturePackIds.Entry | undefined {
      const collection = <CulturePackIds.Entry[]>this.collectionCache.getCollection(CulturePackIds.KEY, CulturePackIds.Entry);
      return collection.find(entry => entry.id === this._id);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default CulturePacks;
