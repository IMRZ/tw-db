
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignEnvironments {
  export const KEY = new CollectionKey("audio_campaign_environments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly isDefault: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.isDefault = !!values["is_default"];
    }
    
  }
}

export default AudioCampaignEnvironments;
