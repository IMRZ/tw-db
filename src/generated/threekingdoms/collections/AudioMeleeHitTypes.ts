
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioMeleeHitTypes {
  export const KEY = new CollectionKey("audio_melee_hit_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly cannotHitWeapons: boolean;
    readonly cannotHitShields: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this.cannotHitWeapons = !!values["cannot_hit_weapons"];
      this.cannotHitShields = !!values["cannot_hit_shields"];
    }
    
  }
}

export default AudioMeleeHitTypes;
