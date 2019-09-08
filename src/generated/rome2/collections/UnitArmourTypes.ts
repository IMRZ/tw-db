
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";

export namespace UnitArmourTypes {
  export const KEY = new CollectionKey("unit_armour_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly armourValue: number;
    readonly bonusVMissiles: boolean;
    readonly weakVMissiles: boolean;
    readonly _audioMaterial: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.armourValue = values["armour_value"];
      this.bonusVMissiles = !!values["bonus_v_missiles"];
      this.weakVMissiles = !!values["weak_v_missiles"];
      this._audioMaterial = values["audio_material"];
    }
    
    get audioMaterial(): AudioMaterialsEnums.Entry | undefined {
      const collection = <AudioMaterialsEnums.Entry[]>this.collectionCache.getCollection(AudioMaterialsEnums.KEY, AudioMaterialsEnums.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
  }
}

export default UnitArmourTypes;
