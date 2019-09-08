
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";

export namespace CampaignGroupPostBattleLootedPooledResources {
  export const KEY = new CollectionKey("campaign_group_post_battle_looted_pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _resourceFactor: string;
    readonly exponentMultiplier: number;
    readonly exponent: number;
    readonly baseMultiplier: number;
    readonly minimum: number;
    readonly maximum: number;
    readonly baseAmount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._resourceFactor = values["resource_factor"];
      this.exponentMultiplier = values["exponent_multiplier"];
      this.exponent = values["exponent"];
      this.baseMultiplier = values["base_multiplier"];
      this.minimum = values["minimum"];
      this.maximum = values["maximum"];
      this.baseAmount = values["base_amount"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get resourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.uniqueId === this._resourceFactor);
    }
  }
}

export default CampaignGroupPostBattleLootedPooledResources;
