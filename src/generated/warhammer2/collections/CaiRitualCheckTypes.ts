
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiRitualCheckTypes {
  export const KEY = new CollectionKey("cai_ritual_check_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiRitualCheckTypes;
