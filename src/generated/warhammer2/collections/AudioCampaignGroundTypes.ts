
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignGroundTypes {
  export const KEY = new CollectionKey("audio_campaign_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioCampaignGroundTypes;
