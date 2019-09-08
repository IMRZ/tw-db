
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectBonusValueUnitCategoryJunction {
  export const KEY = new CollectionKey("effect_bonus_value_unit_category_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: any;
    readonly _bonusValueId: any;
    readonly _unitCategory: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitCategory = values["unit_category"];
    }
    
  }
}

export default EffectBonusValueUnitCategoryJunction;
