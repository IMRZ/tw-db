
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Skeletons {
  export const KEY = new CollectionKey("skeletons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default Skeletons;
