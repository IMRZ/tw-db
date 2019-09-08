
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitCastes } from "./UnitCastes";
import { UnitStatModifiers } from "./UnitStatModifiers";

export namespace EffectBonusValueUnitCasteStatModifiersJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_caste_stat_modifiers_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _caste: string;
    readonly _statModifier: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._caste = values["caste"];
      this._statModifier = values["stat_modifier"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get caste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._caste);
    }
    
    get statModifier(): UnitStatModifiers.Entry | undefined {
      const collection = <UnitStatModifiers.Entry[]>this.collectionCache.getCollection(UnitStatModifiers.KEY, UnitStatModifiers.Entry);
      return collection.find(entry => entry.key === this._statModifier);
    }
  }
}

export default EffectBonusValueUnitCasteStatModifiersJunctions;
