
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomacyStrings {
  export const KEY = new CollectionKey("diplomacy_strings");

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

export default DiplomacyStrings;
