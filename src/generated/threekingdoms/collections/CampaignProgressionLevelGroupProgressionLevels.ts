
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignProgressionLevelGroups } from "./CampaignProgressionLevelGroups";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";

export namespace CampaignProgressionLevelGroupProgressionLevels {
  export const KEY = new CollectionKey("campaign_progression_level_group_progression_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _progressionLevelGroup: string;
    readonly progressionLevel: number;
    readonly prestigeThreshold: number;
    readonly _progressionLevelDetails: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._progressionLevelGroup = values["progression_level_group"];
      this.progressionLevel = values["progression_level"];
      this.prestigeThreshold = values["prestige_threshold"];
      this._progressionLevelDetails = values["progression_level_details"];
    }
    
    get progressionLevelGroup(): CampaignProgressionLevelGroups.Entry | undefined {
      const collection = <CampaignProgressionLevelGroups.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelGroups.KEY, CampaignProgressionLevelGroups.Entry);
      return collection.find(entry => entry.key === this._progressionLevelGroup);
    }
    
    get progressionLevelDetails(): CampaignProgressionLevelDetails.Entry | undefined {
      const collection = <CampaignProgressionLevelDetails.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelDetails.KEY, CampaignProgressionLevelDetails.Entry);
      return collection.find(entry => entry.key === this._progressionLevelDetails);
    }
  }
}

export default CampaignProgressionLevelGroupProgressionLevels;
