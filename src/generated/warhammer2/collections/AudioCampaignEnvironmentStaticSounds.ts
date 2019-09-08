
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignMaps } from "./AudioCampaignMaps";
import { AudioCampaignEnvironmentLoopingSounds } from "./AudioCampaignEnvironmentLoopingSounds";

export namespace AudioCampaignEnvironmentStaticSounds {
  export const KEY = new CollectionKey("audio_campaign_environment_static_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _map: string;
    readonly _loopingSound: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._map = values["map"];
      this._loopingSound = values["looping_sound"];
    }
    
    get map(): AudioCampaignMaps.Entry | undefined {
      const collection = <AudioCampaignMaps.Entry[]>this.collectionCache.getCollection(AudioCampaignMaps.KEY, AudioCampaignMaps.Entry);
      return collection.find(entry => entry._key === this._map);
    }
    
    get loopingSound(): AudioCampaignEnvironmentLoopingSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentLoopingSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentLoopingSounds.KEY, AudioCampaignEnvironmentLoopingSounds.Entry);
      return collection.find(entry => entry.key === this._loopingSound);
    }
  }
}

export default AudioCampaignEnvironmentStaticSounds;
