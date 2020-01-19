
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquippedSetBonuses } from "./CeoEquippedSetBonuses";
import { CeoEffectLists } from "./CeoEffectLists";

export namespace CeoEquippedSetBonusEffectBundles {
  export const KEY = new CollectionKey("ceo_equipped_set_bonus_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _equippedSetBonus: string;
    readonly numCeosEquipped: number;
    readonly _ceoEffectList: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._equippedSetBonus = values["equipped_set_bonus"];
      this.numCeosEquipped = values["num_ceos_equipped"];
      this._ceoEffectList = values["ceo_effect_list"];
    }
    
    get equippedSetBonus(): CeoEquippedSetBonuses.Entry | undefined {
      const collection = <CeoEquippedSetBonuses.Entry[]>this.collectionCache.getCollection(CeoEquippedSetBonuses.KEY, CeoEquippedSetBonuses.Entry);
      return collection.find(entry => entry.key === this._equippedSetBonus);
    }
    
    get ceoEffectList(): CeoEffectLists.Entry | undefined {
      const collection = <CeoEffectLists.Entry[]>this.collectionCache.getCollection(CeoEffectLists.KEY, CeoEffectLists.Entry);
      return collection.find(entry => entry.key === this._ceoEffectList);
    }
  }
}

export default CeoEquippedSetBonusEffectBundles;
