
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentGroundTypeSounds } from "./AudioCampaignEnvironmentGroundTypeSounds";
import { AudioCampaignEnvironmentLoopingSounds } from "./AudioCampaignEnvironmentLoopingSounds";

export namespace AudioCampaignEnvironmentGroundTypeSoundSounds {
  export const KEY = new CollectionKey("audio_campaign_environment_ground_type_sound_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sound: string;
    readonly is3D: boolean;
    readonly _loopingSound: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sound = values["sound"];
      this.is3D = !!values["is_3d"];
      this._loopingSound = values["looping_sound"];
    }
    
    get sound(): AudioCampaignEnvironmentGroundTypeSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentGroundTypeSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentGroundTypeSounds.KEY, AudioCampaignEnvironmentGroundTypeSounds.Entry);
      return collection.find(entry => entry.key === this._sound);
    }
    
    get loopingSound(): AudioCampaignEnvironmentLoopingSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentLoopingSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentLoopingSounds.KEY, AudioCampaignEnvironmentLoopingSounds.Entry);
      return collection.find(entry => entry.key === this._loopingSound);
    }
  }
}

export default AudioCampaignEnvironmentGroundTypeSoundSounds;
