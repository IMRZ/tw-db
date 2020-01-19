
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsStrings } from "./CampaignStatisticsStrings";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignStatisticsDiplomacyTreatyComponents {
  export const KEY = new CollectionKey("campaign_statistics_diplomacy_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _statistic: string;
    readonly _diplomacyTreatyComponent: string;
    readonly countOnlyWhenProposed: boolean;
    readonly maxValue: boolean;
    readonly countOnlyWhenReceived: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._statistic = values["statistic"];
      this._diplomacyTreatyComponent = values["diplomacy_treaty_component"];
      this.countOnlyWhenProposed = !!values["count_only_when_proposed"];
      this.maxValue = !!values["max_value"];
      this.countOnlyWhenReceived = !!values["count_only_when_received"];
    }
    
    get statistic(): CampaignStatisticsStrings.Entry | undefined {
      const collection = <CampaignStatisticsStrings.Entry[]>this.collectionCache.getCollection(CampaignStatisticsStrings.KEY, CampaignStatisticsStrings.Entry);
      return collection.find(entry => entry._campaignStatistic === this._statistic);
    }
    
    get diplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._diplomacyTreatyComponent);
    }
  }
}

export default CampaignStatisticsDiplomacyTreatyComponents;
