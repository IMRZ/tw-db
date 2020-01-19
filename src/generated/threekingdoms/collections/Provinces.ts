
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Provinces {
  export const KEY = new CollectionKey("provinces");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
    }
    
  }
}

export default Provinces;
