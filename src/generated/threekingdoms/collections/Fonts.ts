
import { CollectionCache, CollectionKey } from "../../../common";
import { FontNames } from "./FontNames";

export namespace Fonts {
  export const KEY = new CollectionKey("fonts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly size: number;
    readonly bold: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.size = values["size"];
      this.bold = !!values["bold"];
    }
    
    get key(): FontNames.Entry | undefined {
      const collection = <FontNames.Entry[]>this.collectionCache.getCollection(FontNames.KEY, FontNames.Entry);
      return collection.find(entry => entry.fontName === this._key);
    }
  }
}

export default Fonts;
