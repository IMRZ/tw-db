
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";

export namespace PooledResourceFactorJunctions {
  export const KEY = new CollectionKey("pooled_resource_factor_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resource: string;
    readonly _factor: string;
    readonly uniqueId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resource = values["resource"];
      this._factor = values["factor"];
      this.uniqueId = values["unique_id"];
    }
    
    get resource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
    
    get factor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._factor);
    }
  }
}

export default PooledResourceFactorJunctions;
