
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignEnvironmentTreeSounds {
  export const KEY = new CollectionKey("audio_campaign_environment_tree_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly sampleRange: number;
    readonly groupingSize: number;
    readonly requiredIntensity: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.sampleRange = values["sample_range"];
      this.groupingSize = values["grouping_size"];
      this.requiredIntensity = values["required_intensity"];
    }
    
  }
}

export default AudioCampaignEnvironmentTreeSounds;
