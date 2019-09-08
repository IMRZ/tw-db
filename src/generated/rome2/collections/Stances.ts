
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Stances {
  export const KEY = new CollectionKey("stances");

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

export default Stances;
