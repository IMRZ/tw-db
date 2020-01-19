
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignProgressionLevelGroups } from "./CampaignProgressionLevelGroups";

export namespace CampaignProgressionLevels {
  export const KEY = new CollectionKey("campaign_progression_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _progressionLevelGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._progressionLevelGroup = values["progression_level_group"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get progressionLevelGroup(): CampaignProgressionLevelGroups.Entry | undefined {
      const collection = <CampaignProgressionLevelGroups.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelGroups.KEY, CampaignProgressionLevelGroups.Entry);
      return collection.find(entry => entry.key === this._progressionLevelGroup);
    }
  }
}

export default CampaignProgressionLevels;
