
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiConditions {
  export const KEY = new CollectionKey("cai_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiConditions;
