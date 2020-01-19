
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioShieldTypes } from "./AudioShieldTypes";

export namespace UnitShieldTypes {
  export const KEY = new CollectionKey("unit_shield_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly shieldDefenceValue: number;
    readonly shieldArmourValue: number;
    readonly missileBlockChance: number;
    readonly _audioType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.shieldDefenceValue = values["shield_defence_value"];
      this.shieldArmourValue = values["shield_armour_value"];
      this.missileBlockChance = values["missile_block_chance"];
      this._audioType = values["audio_type"];
    }
    
    get audioType(): AudioShieldTypes.Entry | undefined {
      const collection = <AudioShieldTypes.Entry[]>this.collectionCache.getCollection(AudioShieldTypes.KEY, AudioShieldTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
  }
}

export default UnitShieldTypes;
