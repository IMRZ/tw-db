
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiTechnologyResearchProfiles {
  export const KEY = new CollectionKey("campaign_ai_technology_research_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignAiTechnologyResearchProfiles;
