
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PrestigeTypes {
  export const KEY = new CollectionKey("prestige_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PrestigeTypes;
