import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyPools } from "./CampaignDiplomacyPools";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
export declare namespace CampaignDiplomacyPoolPooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pool: string;
        readonly _pooledResourceScope: string;
        readonly _pooledResourceFactor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pool(): CampaignDiplomacyPools.Entry | undefined;
        get pooledResourceScope(): PooledResourceScopes.Entry | undefined;
        get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined;
    }
}
export default CampaignDiplomacyPoolPooledResources;
