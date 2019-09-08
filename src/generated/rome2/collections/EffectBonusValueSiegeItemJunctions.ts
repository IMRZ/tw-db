
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectBonusValueSiegeItemJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_siege_item_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: any;
    readonly _bonusValueId: any;
    readonly _siegeItem: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._siegeItem = values["siege_item"];
    }
    
  }
}

export default EffectBonusValueSiegeItemJunctions;
