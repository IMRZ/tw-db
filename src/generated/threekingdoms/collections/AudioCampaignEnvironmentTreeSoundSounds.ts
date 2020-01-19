
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentTreeSounds } from "./AudioCampaignEnvironmentTreeSounds";
import { AudioCampaignEnvironmentLoopingSounds } from "./AudioCampaignEnvironmentLoopingSounds";

export namespace AudioCampaignEnvironmentTreeSoundSounds {
  export const KEY = new CollectionKey("audio_campaign_environment_tree_sound_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treeSound: string;
    readonly is3D: boolean;
    readonly _loopingSound: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treeSound = values["tree_sound"];
      this.is3D = !!values["is_3d"];
      this._loopingSound = values["looping_sound"];
    }
    
    get treeSound(): AudioCampaignEnvironmentTreeSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentTreeSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentTreeSounds.KEY, AudioCampaignEnvironmentTreeSounds.Entry);
      return collection.find(entry => entry.key === this._treeSound);
    }
    
    get loopingSound(): AudioCampaignEnvironmentLoopingSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentLoopingSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentLoopingSounds.KEY, AudioCampaignEnvironmentLoopingSounds.Entry);
      return collection.find(entry => entry.key === this._loopingSound);
    }
  }
}

export default AudioCampaignEnvironmentTreeSoundSounds;
