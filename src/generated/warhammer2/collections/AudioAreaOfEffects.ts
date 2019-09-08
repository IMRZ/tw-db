
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioAreaOfEffectPositioningTypes } from "./AudioAreaOfEffectPositioningTypes";

export namespace AudioAreaOfEffects {
  export const KEY = new CollectionKey("audio_area_of_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly eventStart: string;
    readonly eventStop: string;
    readonly _positioningType: string;
    readonly maxDistance: number;
    readonly useReverb: boolean;
    readonly velocityRtpc: string;
    readonly switch: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.eventStart = values["event_start"];
      this.eventStop = values["event_stop"];
      this._positioningType = values["positioning_type"];
      this.maxDistance = values["max_distance"];
      this.useReverb = !!values["use_reverb"];
      this.velocityRtpc = values["velocity_rtpc"];
      this.switch = values["switch"];
    }
    
    get positioningType(): AudioAreaOfEffectPositioningTypes.Entry | undefined {
      const collection = <AudioAreaOfEffectPositioningTypes.Entry[]>this.collectionCache.getCollection(AudioAreaOfEffectPositioningTypes.KEY, AudioAreaOfEffectPositioningTypes.Entry);
      return collection.find(entry => entry.type === this._positioningType);
    }
  }
}

export default AudioAreaOfEffects;
