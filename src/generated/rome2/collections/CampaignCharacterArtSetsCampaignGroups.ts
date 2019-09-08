
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCharacterArtSetsCampaignGroups {
  export const KEY = new CollectionKey("campaign_character_art_sets_campaign_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignCharacterArtSetsCampaignGroups;
