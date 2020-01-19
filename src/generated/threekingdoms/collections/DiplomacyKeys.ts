
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomacyKeys {
  export const KEY = new CollectionKey("diplomacy_keys");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default DiplomacyKeys;
