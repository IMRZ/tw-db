
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PooledResourceEffectTypes {
  export const KEY = new CollectionKey("pooled_resource_effect_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default PooledResourceEffectTypes;
