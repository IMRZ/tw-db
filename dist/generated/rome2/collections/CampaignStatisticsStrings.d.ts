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
        readonly campaignStatistic: CampaignStatisticsEnums.Entry | undefined;
        readonly campaignStatisticCategory: CampaignStatisticsCategories.Entry | undefined;
    }
}
export default CampaignStatisticsStrings;
