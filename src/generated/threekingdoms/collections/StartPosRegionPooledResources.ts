
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { PooledResources } from "./PooledResources";

export namespace StartPosRegionPooledResources {
  export const KEY = new CollectionKey("start_pos_region_pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: number;
    readonly _pooledResource: string;
    readonly amount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._pooledResource = values["pooled_resource"];
      this.amount = values["amount"];
    }
    
    get region(): StartPosRegions.Entry | undefined {
      const collection = <StartPosRegions.Entry[]>this.collectionCache.getCollection(StartPosRegions.KEY, StartPosRegions.Entry);
      return collection.find(entry => entry.id === this._region);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
  }
}

export default StartPosRegionPooledResources;
