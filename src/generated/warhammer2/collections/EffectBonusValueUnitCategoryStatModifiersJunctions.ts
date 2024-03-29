
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitCategory } from "./UnitCategory";
import { UnitStatModifiers } from "./UnitStatModifiers";

export namespace EffectBonusValueUnitCategoryStatModifiersJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_category_stat_modifiers_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _category: string;
    readonly _statModifier: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._category = values["category"];
      this._statModifier = values["stat_modifier"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get category(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get statModifier(): UnitStatModifiers.Entry | undefined {
      const collection = <UnitStatModifiers.Entry[]>this.collectionCache.getCollection(UnitStatModifiers.KEY, UnitStatModifiers.Entry);
      return collection.find(entry => entry.key === this._statModifier);
    }
  }
}

export default EffectBonusValueUnitCategoryStatModifiersJunctions;
