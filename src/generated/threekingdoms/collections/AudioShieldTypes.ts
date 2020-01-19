
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMeleeHitTypes } from "./AudioMeleeHitTypes";

export namespace AudioShieldTypes {
  export const KEY = new CollectionKey("audio_shield_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly _meleeHitType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this._meleeHitType = values["melee_hit_type"];
    }
    
    get meleeHitType(): AudioMeleeHitTypes.Entry | undefined {
      const collection = <AudioMeleeHitTypes.Entry[]>this.collectionCache.getCollection(AudioMeleeHitTypes.KEY, AudioMeleeHitTypes.Entry);
      return collection.find(entry => entry.key === this._meleeHitType);
    }
  }
}

export default AudioShieldTypes;
