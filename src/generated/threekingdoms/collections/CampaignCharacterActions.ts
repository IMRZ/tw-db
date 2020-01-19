
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCharacterActions {
  export const KEY = new CollectionKey("campaign_character_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly action: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.action = values["action"];
    }
    
  }
}

export default CampaignCharacterActions;
