import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { CampaignStatisticsCategories } from "./CampaignStatisticsCategories";
import { CampaignStatisticsTypes } from "./CampaignStatisticsTypes";
export declare namespace CampaignStatisticsStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignStatistic: string;
        readonly localisedDescription: string;
        readonly _campaignStatisticCategory: string;
        readonly statisticOrder: number;
        readonly _type: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined;
        get campaignStatisticCategory(): CampaignStatisticsCategories.Entry | undefined;
        get type(): CampaignStatisticsTypes.Entry | undefined;
    }
}
export default CampaignStatisticsStrings;
