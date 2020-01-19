import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
export declare namespace PooledResourceFactorsCampaignStatisticsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pooledResourceFactor: string;
        readonly _campaignStatistic: string;
        readonly onlyOnIncrease: boolean;
        readonly onlyOnDecrease: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined;
        get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined;
    }
}
export default PooledResourceFactorsCampaignStatisticsJunctions;
