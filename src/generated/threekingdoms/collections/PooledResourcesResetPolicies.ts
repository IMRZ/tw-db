
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PooledResourcesResetPolicies {
  export const KEY = new CollectionKey("pooled_resources_reset_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PooledResourcesResetPolicies;
