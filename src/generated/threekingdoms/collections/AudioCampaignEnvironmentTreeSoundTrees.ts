
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentTreeSounds } from "./AudioCampaignEnvironmentTreeSounds";
import { AudioCampaignTreeTypes } from "./AudioCampaignTreeTypes";

export namespace AudioCampaignEnvironmentTreeSoundTrees {
  export const KEY = new CollectionKey("audio_campaign_environment_tree_sound_trees");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sound: string;
    readonly _tree: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sound = values["sound"];
      this._tree = values["tree"];
    }
    
    get sound(): AudioCampaignEnvironmentTreeSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentTreeSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentTreeSounds.KEY, AudioCampaignEnvironmentTreeSounds.Entry);
      return collection.find(entry => entry.key === this._sound);
    }
    
    get tree(): AudioCampaignTreeTypes.Entry | undefined {
      const collection = <AudioCampaignTreeTypes.Entry[]>this.collectionCache.getCollection(AudioCampaignTreeTypes.KEY, AudioCampaignTreeTypes.Entry);
      return collection.find(entry => entry.key === this._tree);
    }
  }
}

export default AudioCampaignEnvironmentTreeSoundTrees;
