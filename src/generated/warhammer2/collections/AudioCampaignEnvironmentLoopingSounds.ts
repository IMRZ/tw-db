
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignEnvironmentLoopingSounds {
  export const KEY = new CollectionKey("audio_campaign_environment_looping_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly startEvent: string;
    readonly stopEvent: string;
    readonly intensityRtpc: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.startEvent = values["start_event"];
      this.stopEvent = values["stop_event"];
      this.intensityRtpc = values["intensity_rtpc"];
    }
    
  }
}

export default AudioCampaignEnvironmentLoopingSounds;
