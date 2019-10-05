
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";

export namespace PooledResourceInfluenceOverrides {
  export const KEY = new CollectionKey("pooled_resource_influence_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _pooledResource: string;
    readonly _pooledResourceFactor: string;
    readonly influenceToPooledResourceConversionFactor: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._pooledResource = values["pooled_resource"];
      this._pooledResourceFactor = values["pooled_resource_factor"];
      this.influenceToPooledResourceConversionFactor = values["influence_to_pooled_resource_conversion_factor"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
    
    get pooledResourceFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._pooledResourceFactor);
    }
  }
}

export default PooledResourceInfluenceOverrides;
