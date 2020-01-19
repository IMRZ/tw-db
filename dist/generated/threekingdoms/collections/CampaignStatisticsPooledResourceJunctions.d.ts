import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { PooledResources } from "./PooledResources";
export declare namespace CampaignStatisticsPooledResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignStatistic: string;
        readonly _pooledResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined;
        get pooledResource(): PooledResources.Entry | undefined;
    }
}
export default CampaignStatisticsPooledResourceJunctions;
