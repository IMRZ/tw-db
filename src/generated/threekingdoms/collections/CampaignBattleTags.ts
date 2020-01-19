
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBattleTags {
  export const KEY = new CollectionKey("campaign_battle_tags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignBattleTags;
