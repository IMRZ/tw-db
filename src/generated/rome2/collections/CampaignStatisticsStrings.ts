
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { CampaignStatisticsCategories } from "./CampaignStatisticsCategories";

export namespace CampaignStatisticsStrings {
  export const KEY = new CollectionKey("campaign_statistics_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignStatistic: string;
    readonly localisedDescription: string;
    readonly _campaignStatisticCategory: string;
    readonly statisticOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignStatistic = values["campaign_statistic"];
      this.localisedDescription = values["localised_description"];
      this._campaignStatisticCategory = values["campaign_statistic_category"];
      this.statisticOrder = values["statistic_order"];
    }
    
    get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined {
      const collection = <CampaignStatisticsEnums.Entry[]>this.collectionCache.getCollection(CampaignStatisticsEnums.KEY, CampaignStatisticsEnums.Entry);
      return collection.find(entry => entry.key === this._campaignStatistic);
    }
    
    get campaignStatisticCategory(): CampaignStatisticsCategories.Entry | undefined {
      const collection = <CampaignStatisticsCategories.Entry[]>this.collectionCache.getCollection(CampaignStatisticsCategories.KEY, CampaignStatisticsCategories.Entry);
      return collection.find(entry => entry.key === this._campaignStatisticCategory);
    }
  }
}

export default CampaignStatisticsStrings;
