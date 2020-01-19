import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { CampaignStatisticsCategories } from "./CampaignStatisticsCategories";
export declare namespace CampaignStatisticsStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignStatistic: string;
        readonly localisedDescription: string;
        readonly _campaignStatisticCategory: string;
        readonly statisticOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined;
        get campaignStatisticCategory(): CampaignStatisticsCategories.Entry | undefined;
    }
}
export default CampaignStatisticsStrings;
