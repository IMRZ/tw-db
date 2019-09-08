
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioProjectileBombardments {
  export const KEY = new CollectionKey("audio_projectile_bombardments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly event: string;
    readonly obstructionSize: number;
    readonly useReverb: boolean;
    readonly maxAttenuation: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.event = values["event"];
      this.obstructionSize = values["obstruction_size"];
      this.useReverb = !!values["use_reverb"];
      this.maxAttenuation = values["max_attenuation"];
    }
    
  }
}

export default AudioProjectileBombardments;
