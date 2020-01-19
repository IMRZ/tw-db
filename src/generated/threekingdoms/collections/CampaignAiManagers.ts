
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiManagers {
  export const KEY = new CollectionKey("campaign_ai_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly manager: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.manager = values["manager"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignAiManagers;
