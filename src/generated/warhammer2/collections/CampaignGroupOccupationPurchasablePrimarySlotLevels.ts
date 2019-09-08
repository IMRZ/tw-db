
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { ResourceCosts } from "./ResourceCosts";

export namespace CampaignGroupOccupationPurchasablePrimarySlotLevels {
  export const KEY = new CollectionKey("campaign_group_occupation_purchasable_primary_slot_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly level: number;
    readonly _resourceCost: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this.level = values["level"];
      this._resourceCost = values["resource_cost"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get resourceCost(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._resourceCost);
    }
  }
}

export default CampaignGroupOccupationPurchasablePrimarySlotLevels;
