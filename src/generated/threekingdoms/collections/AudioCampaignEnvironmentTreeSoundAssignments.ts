
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignMaps } from "./AudioCampaignMaps";
import { AudioCampaignEnvironmentTreeSounds } from "./AudioCampaignEnvironmentTreeSounds";

export namespace AudioCampaignEnvironmentTreeSoundAssignments {
  export const KEY = new CollectionKey("audio_campaign_environment_tree_sound_assignments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _map: string;
    readonly _sound: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._map = values["map"];
      this._sound = values["sound"];
    }
    
    get map(): AudioCampaignMaps.Entry | undefined {
      const collection = <AudioCampaignMaps.Entry[]>this.collectionCache.getCollection(AudioCampaignMaps.KEY, AudioCampaignMaps.Entry);
      return collection.find(entry => entry._key === this._map);
    }
    
    get sound(): AudioCampaignEnvironmentTreeSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentTreeSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentTreeSounds.KEY, AudioCampaignEnvironmentTreeSounds.Entry);
      return collection.find(entry => entry.key === this._sound);
    }
  }
}

export default AudioCampaignEnvironmentTreeSoundAssignments;
