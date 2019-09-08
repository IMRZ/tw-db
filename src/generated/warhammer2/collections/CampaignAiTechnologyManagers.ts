
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiTechnologyManagers {
  export const KEY = new CollectionKey("campaign_ai_technology_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignAiTechnologyManagers;
