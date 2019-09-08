
import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceCosts } from "./ResourceCosts";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";

export namespace ResourceCostPooledResourceJunctions {
  export const KEY = new CollectionKey("resource_cost_pooled_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resourceCost: string;
    readonly _pooledResourceFactor: string;
    readonly amount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resourceCost = values["resource_cost"];
      this._pooledResourceFactor = values["pooled_resource_factor"];
      this.amount = values["amount"];
    }
    
    get resourceCost(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._resourceCost);
    }
    
    get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.uniqueId === this._pooledResourceFactor);
    }
  }
}

export default ResourceCostPooledResourceJunctions;
