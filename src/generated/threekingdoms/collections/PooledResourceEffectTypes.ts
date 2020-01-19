
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PooledResourceEffectTypes {
  export const KEY = new CollectionKey("pooled_resource_effect_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PooledResourceEffectTypes;
