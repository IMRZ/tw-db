
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCharacterAnimStatus {
  export const KEY = new CollectionKey("campaign_character_anim_status");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly status: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.status = values["status"];
    }
    
  }
}

export default CampaignCharacterAnimStatus;
