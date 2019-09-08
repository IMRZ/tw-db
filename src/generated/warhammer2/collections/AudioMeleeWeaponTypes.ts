
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioMeleeHitTypes } from "./AudioMeleeHitTypes";

export namespace AudioMeleeWeaponTypes {
  export const KEY = new CollectionKey("audio_melee_weapon_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly _groupMelee: string;
    readonly cannotParry: boolean;
    readonly _meleeHitType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this._groupMelee = values["group_melee"];
      this.cannotParry = !!values["cannot_parry"];
      this._meleeHitType = values["melee_hit_type"];
    }
    
    get groupMelee(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupMelee);
    }
    
    get meleeHitType(): AudioMeleeHitTypes.Entry | undefined {
      const collection = <AudioMeleeHitTypes.Entry[]>this.collectionCache.getCollection(AudioMeleeHitTypes.KEY, AudioMeleeHitTypes.Entry);
      return collection.find(entry => entry.key === this._meleeHitType);
    }
  }
}

export default AudioMeleeWeaponTypes;
