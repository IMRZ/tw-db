
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MarriageTypes {
  export const KEY = new CollectionKey("marriage_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default MarriageTypes;
