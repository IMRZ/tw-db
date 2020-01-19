
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyPools } from "./CampaignDiplomacyPools";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";

export namespace CampaignDiplomacyPoolPooledResources {
  export const KEY = new CollectionKey("campaign_diplomacy_pool_pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pool: string;
    readonly _pooledResourceScope: string;
    readonly _pooledResourceFactor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pool = values["pool"];
      this._pooledResourceScope = values["pooled_resource_scope"];
      this._pooledResourceFactor = values["pooled_resource_factor"];
    }
    
    get pool(): CampaignDiplomacyPools.Entry | undefined {
      const collection = <CampaignDiplomacyPools.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyPools.KEY, CampaignDiplomacyPools.Entry);
      return collection.find(entry => entry.key === this._pool);
    }
    
    get pooledResourceScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._pooledResourceScope);
    }
    
    get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._pooledResourceFactor);
    }
  }
}

export default CampaignDiplomacyPoolPooledResources;
