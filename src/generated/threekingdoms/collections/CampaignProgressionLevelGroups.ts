
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignProgressionLevelGroups {
  export const KEY = new CollectionKey("campaign_progression_level_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignProgressionLevelGroups;
