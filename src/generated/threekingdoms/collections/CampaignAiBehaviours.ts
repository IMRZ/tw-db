
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiBehaviours {
  export const KEY = new CollectionKey("campaign_ai_behaviours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly behaviour: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.behaviour = values["behaviour"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignAiBehaviours;
