
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";

export namespace PooledResourceFactorsCampaignStatisticsJunctions {
  export const KEY = new CollectionKey("pooled_resource_factors_campaign_statistics_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pooledResourceFactor: string;
    readonly _campaignStatistic: string;
    readonly onlyOnIncrease: boolean;
    readonly onlyOnDecrease: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pooledResourceFactor = values["pooled_resource_factor"];
      this._campaignStatistic = values["campaign_statistic"];
      this.onlyOnIncrease = !!values["only_on_increase"];
      this.onlyOnDecrease = !!values["only_on_decrease"];
    }
    
    get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._pooledResourceFactor);
    }
    
    get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined {
      const collection = <CampaignStatisticsEnums.Entry[]>this.collectionCache.getCollection(CampaignStatisticsEnums.KEY, CampaignStatisticsEnums.Entry);
      return collection.find(entry => entry.key === this._campaignStatistic);
    }
  }
}

export default PooledResourceFactorsCampaignStatisticsJunctions;
