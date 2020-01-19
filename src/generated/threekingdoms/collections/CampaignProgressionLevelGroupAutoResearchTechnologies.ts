
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignProgressionLevelGroups } from "./CampaignProgressionLevelGroups";
import { Technologies } from "./Technologies";

export namespace CampaignProgressionLevelGroupAutoResearchTechnologies {
  export const KEY = new CollectionKey("campaign_progression_level_group_auto_research_technologies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _progressionLevelGroup: string;
    readonly progressionLevel: number;
    readonly _technology: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._progressionLevelGroup = values["progression_level_group"];
      this.progressionLevel = values["progression_level"];
      this._technology = values["technology"];
    }
    
    get progressionLevelGroup(): CampaignProgressionLevelGroups.Entry | undefined {
      const collection = <CampaignProgressionLevelGroups.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelGroups.KEY, CampaignProgressionLevelGroups.Entry);
      return collection.find(entry => entry.key === this._progressionLevelGroup);
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
  }
}

export default CampaignProgressionLevelGroupAutoResearchTechnologies;
