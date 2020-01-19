
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ModelsFoot {
  export const KEY = new CollectionKey("models_foot");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ModelsFoot;
