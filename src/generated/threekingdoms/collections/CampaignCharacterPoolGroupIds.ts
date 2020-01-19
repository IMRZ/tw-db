
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCharacterPoolGroupIds {
  export const KEY = new CollectionKey("campaign_character_pool_group_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignCharacterPoolGroupIds;
