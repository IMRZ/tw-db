
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitClass } from "./UnitClass";
import { UnitStatModifiers } from "./UnitStatModifiers";

export namespace EffectBonusValueUnitClassStatModifiersJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_class_stat_modifiers_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _class: string;
    readonly _statModifier: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._class = values["class"];
      this._statModifier = values["stat_modifier"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get class(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._class);
    }
    
    get statModifier(): UnitStatModifiers.Entry | undefined {
      const collection = <UnitStatModifiers.Entry[]>this.collectionCache.getCollection(UnitStatModifiers.KEY, UnitStatModifiers.Entry);
      return collection.find(entry => entry.key === this._statModifier);
    }
  }
}

export default EffectBonusValueUnitClassStatModifiersJunctions;
