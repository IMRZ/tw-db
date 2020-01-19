
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";

export namespace PooledResourceFactorJunctions {
  export const KEY = new CollectionKey("pooled_resource_factor_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _resource: string;
    readonly _factor: string;
    readonly minimum: number;
    readonly maximum: number;
    readonly aiCanPropose: boolean;
    readonly isRecurringFactor: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._resource = values["resource"];
      this._factor = values["factor"];
      this.minimum = values["minimum"];
      this.maximum = values["maximum"];
      this.aiCanPropose = !!values["ai_can_propose"];
      this.isRecurringFactor = !!values["is_recurring_factor"];
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
