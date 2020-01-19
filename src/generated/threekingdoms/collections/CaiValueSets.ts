
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiValueSets {
  export const KEY = new CollectionKey("cai_value_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiValueSets;
