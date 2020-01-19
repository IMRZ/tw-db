
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RandomUnlocalisedStrings {
  export const KEY = new CollectionKey("random_unlocalised_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly string: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.string = values["string"];
    }
    
  }
}

export default RandomUnlocalisedStrings;
