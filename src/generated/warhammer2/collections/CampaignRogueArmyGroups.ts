
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignRogueArmyGroups {
  export const KEY = new CollectionKey("campaign_rogue_army_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignRogueArmyGroups;
