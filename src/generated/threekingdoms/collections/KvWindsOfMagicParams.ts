
import { CollectionCache, CollectionKey } from "../../../common";


export namespace KvWindsOfMagicParams {
  export const KEY = new CollectionKey("_kv_winds_of_magic_params");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
      this.description = values["description"];
    }
    
  }
}

export default KvWindsOfMagicParams;
