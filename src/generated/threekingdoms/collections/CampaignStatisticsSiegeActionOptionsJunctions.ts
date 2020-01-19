
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";

export namespace CampaignStatisticsSiegeActionOptionsJunctions {
  export const KEY = new CollectionKey("campaign_statistics_siege_action_options_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignStatistics: string;
    readonly _seigeActionOption: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignStatistics = values["campaign_statistics"];
      this._seigeActionOption = values["seige_action_option"];
    }
    
    get campaignStatistics(): CampaignStatisticsEnums.Entry | undefined {
      const collection = <CampaignStatisticsEnums.Entry[]>this.collectionCache.getCollection(CampaignStatisticsEnums.KEY, CampaignStatisticsEnums.Entry);
      return collection.find(entry => entry.key === this._campaignStatistics);
    }
    
    get seigeActionOption(): SettlementSiegeActionOptions.Entry | undefined {
      const collection = <SettlementSiegeActionOptions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptions.KEY, SettlementSiegeActionOptions.Entry);
      return collection.find(entry => entry.settlementSiegeActionOption === this._seigeActionOption);
    }
  }
}

export default CampaignStatisticsSiegeActionOptionsJunctions;
