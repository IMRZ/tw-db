
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { PooledResources } from "./PooledResources";

export namespace CampaignStatisticsPooledResourceJunctions {
  export const KEY = new CollectionKey("campaign_statistics_pooled_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignStatistic: string;
    readonly _pooledResource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignStatistic = values["campaign_statistic"];
      this._pooledResource = values["pooled_resource"];
    }
    
    get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined {
      const collection = <CampaignStatisticsEnums.Entry[]>this.collectionCache.getCollection(CampaignStatisticsEnums.KEY, CampaignStatisticsEnums.Entry);
      return collection.find(entry => entry.key === this._campaignStatistic);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
  }
}

export default CampaignStatisticsPooledResourceJunctions;
