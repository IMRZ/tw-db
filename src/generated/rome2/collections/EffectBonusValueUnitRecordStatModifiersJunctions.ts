
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { Units } from "./Units";
import { UnitStatModifiers } from "./UnitStatModifiers";

export namespace EffectBonusValueUnitRecordStatModifiersJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_record_stat_modifiers_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _unit: string;
    readonly _statModifier: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._unit = values["unit"];
      this._statModifier = values["stat_modifier"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get unit(): Units.Entry | undefined {
      const collection = <Units.Entry[]>this.collectionCache.getCollection(Units.KEY, Units.Entry);
      return collection.find(entry => entry.key === this._unit);
    }
    
    get statModifier(): UnitStatModifiers.Entry | undefined {
      const collection = <UnitStatModifiers.Entry[]>this.collectionCache.getCollection(UnitStatModifiers.KEY, UnitStatModifiers.Entry);
      return collection.find(entry => entry.key === this._statModifier);
    }
  }
}

export default EffectBonusValueUnitRecordStatModifiersJunctions;
