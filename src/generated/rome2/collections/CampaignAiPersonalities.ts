
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiPersonalities {
  export const KEY = new CollectionKey("campaign_ai_personalities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly personality: string;
    readonly isDefault: boolean;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.personality = values["personality"];
      this.isDefault = !!values["is_default"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignAiPersonalities;
