
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiPersonalityProperties {
  export const KEY = new CollectionKey("campaign_ai_personality_properties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly property: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.property = values["property"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignAiPersonalityProperties;
