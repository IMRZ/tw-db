
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentGroundTypeSounds } from "./AudioCampaignEnvironmentGroundTypeSounds";
import { CampaignGroundTypes } from "./CampaignGroundTypes";

export namespace AudioCampaignEnvironmentGroundTypeSoundGroundTypes {
  export const KEY = new CollectionKey("audio_campaign_environment_ground_type_sound_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sound: string;
    readonly _groundType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sound = values["sound"];
      this._groundType = values["ground_type"];
    }
    
    get sound(): AudioCampaignEnvironmentGroundTypeSounds.Entry | undefined {
      const collection = <AudioCampaignEnvironmentGroundTypeSounds.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentGroundTypeSounds.KEY, AudioCampaignEnvironmentGroundTypeSounds.Entry);
      return collection.find(entry => entry.key === this._sound);
    }
    
    get groundType(): CampaignGroundTypes.Entry | undefined {
      const collection = <CampaignGroundTypes.Entry[]>this.collectionCache.getCollection(CampaignGroundTypes.KEY, CampaignGroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
  }
}

export default AudioCampaignEnvironmentGroundTypeSoundGroundTypes;
