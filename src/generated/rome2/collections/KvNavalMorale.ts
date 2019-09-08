
import { CollectionCache, CollectionKey } from "../../../common";


export namespace KvNavalMorale {
  export const KEY = new CollectionKey("_kv_naval_morale");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
      this.description = values["description"];
    }
    
  }
}

export default KvNavalMorale;
