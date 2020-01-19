
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignTreeTypes {
  export const KEY = new CollectionKey("audio_campaign_tree_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioCampaignTreeTypes;
