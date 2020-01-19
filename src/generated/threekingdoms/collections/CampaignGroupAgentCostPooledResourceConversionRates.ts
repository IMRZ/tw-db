
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceFactors } from "./PooledResourceFactors";

export namespace CampaignGroupAgentCostPooledResourceConversionRates {
  export const KEY = new CollectionKey("campaign_group_agent_cost_pooled_resource_conversion_rates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _pooledResourceFactor: string;
    readonly treasuryConversionRate: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._pooledResourceFactor = values["pooled_resource_factor"];
      this.treasuryConversionRate = values["treasury_conversion_rate"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get pooledResourceFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._pooledResourceFactor);
    }
  }
}

export default CampaignGroupAgentCostPooledResourceConversionRates;
