
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiTechnologyPaths {
  export const KEY = new CollectionKey("campaign_ai_technology_paths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignAiTechnologyPaths;
