
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";

export namespace UnitShieldTypes {
  export const KEY = new CollectionKey("unit_shield_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly shieldDefenceValue: number;
    readonly shieldArmourValue: number;
    readonly _audioMaterial: string;
    readonly missileBlockChance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.shieldDefenceValue = values["shield_defence_value"];
      this.shieldArmourValue = values["shield_armour_value"];
      this._audioMaterial = values["audio_material"];
      this.missileBlockChance = values["missile_block_chance"];
    }
    
    get audioMaterial(): AudioMaterialsEnums.Entry | undefined {
      const collection = <AudioMaterialsEnums.Entry[]>this.collectionCache.getCollection(AudioMaterialsEnums.KEY, AudioMaterialsEnums.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
  }
}

export default UnitShieldTypes;
