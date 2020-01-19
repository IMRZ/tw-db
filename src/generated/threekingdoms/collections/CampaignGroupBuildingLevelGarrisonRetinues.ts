
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignRetinueChains } from "./CampaignRetinueChains";

export namespace CampaignGroupBuildingLevelGarrisonRetinues {
  export const KEY = new CollectionKey("campaign_group_building_level_garrison_retinues");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _retinueChain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._retinueChain = values["retinue_chain"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get retinueChain(): CampaignRetinueChains.Entry | undefined {
      const collection = <CampaignRetinueChains.Entry[]>this.collectionCache.getCollection(CampaignRetinueChains.KEY, CampaignRetinueChains.Entry);
      return collection.find(entry => entry.key === this._retinueChain);
    }
  }
}

export default CampaignGroupBuildingLevelGarrisonRetinues;
