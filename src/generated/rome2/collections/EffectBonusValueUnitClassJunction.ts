
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectBonusValueUnitClassJunction {
  export const KEY = new CollectionKey("effect_bonus_value_unit_class_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: any;
    readonly _bonusValueId: any;
    readonly _unitClass: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitClass = values["unit_class"];
    }
    
  }
}

export default EffectBonusValueUnitClassJunction;
