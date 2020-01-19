import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceFactors } from "./PooledResourceFactors";
export declare namespace CampaignGroupAgentCostPooledResourceConversionRates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _pooledResourceFactor: string;
        readonly treasuryConversionRate: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get pooledResourceFactor(): PooledResourceFactors.Entry | undefined;
    }
}
export default CampaignGroupAgentCostPooledResourceConversionRates;
