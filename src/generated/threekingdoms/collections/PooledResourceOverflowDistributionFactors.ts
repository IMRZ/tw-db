
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";

export namespace PooledResourceOverflowDistributionFactors {
  export const KEY = new CollectionKey("pooled_resource_overflow_distribution_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pooledResource: string;
    readonly _targetFactor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pooledResource = values["pooled_resource"];
      this._targetFactor = values["target_factor"];
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
    
    get targetFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._targetFactor);
    }
  }
}

export default PooledResourceOverflowDistributionFactors;
