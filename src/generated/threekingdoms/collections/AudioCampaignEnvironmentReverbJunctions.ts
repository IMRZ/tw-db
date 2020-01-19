
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironments } from "./AudioCampaignEnvironments";
import { AudioCampaignEnvironmentReverbTypes } from "./AudioCampaignEnvironmentReverbTypes";
import { AudioCampaignEnvironmentReverbs } from "./AudioCampaignEnvironmentReverbs";

export namespace AudioCampaignEnvironmentReverbJunctions {
  export const KEY = new CollectionKey("audio_campaign_environment_reverb_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _environment: string;
    readonly _type: string;
    readonly _reverb: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._environment = values["environment"];
      this._type = values["type"];
      this._reverb = values["reverb"];
    }
    
    get environment(): AudioCampaignEnvironments.Entry | undefined {
      const collection = <AudioCampaignEnvironments.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironments.KEY, AudioCampaignEnvironments.Entry);
      return collection.find(entry => entry.name === this._environment);
    }
    
    get type(): AudioCampaignEnvironmentReverbTypes.Entry | undefined {
      const collection = <AudioCampaignEnvironmentReverbTypes.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentReverbTypes.KEY, AudioCampaignEnvironmentReverbTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get reverb(): AudioCampaignEnvironmentReverbs.Entry | undefined {
      const collection = <AudioCampaignEnvironmentReverbs.Entry[]>this.collectionCache.getCollection(AudioCampaignEnvironmentReverbs.KEY, AudioCampaignEnvironmentReverbs.Entry);
      return collection.find(entry => entry.name === this._reverb);
    }
  }
}

export default AudioCampaignEnvironmentReverbJunctions;
