
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";

export namespace AudioCampaignMaps {
  export const KEY = new CollectionKey("audio_campaign_maps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly listenerScalingFactor: number;
    readonly reverbDefault: string;
    readonly reverbUnderground: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.listenerScalingFactor = values["listener_scaling_factor"];
      this.reverbDefault = values["reverb_default"];
      this.reverbUnderground = values["reverb_underground"];
    }
    
    get key(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._key);
    }
  }
}

export default AudioCampaignMaps;
