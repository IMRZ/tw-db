
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignEnvironmentReverbTypes {
  export const KEY = new CollectionKey("audio_campaign_environment_reverb_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default AudioCampaignEnvironmentReverbTypes;
