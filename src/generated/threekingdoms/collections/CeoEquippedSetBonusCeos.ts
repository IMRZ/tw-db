
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquippedSetBonuses } from "./CeoEquippedSetBonuses";
import { Ceos } from "./Ceos";

export namespace CeoEquippedSetBonusCeos {
  export const KEY = new CollectionKey("ceo_equipped_set_bonus_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _equippedSetBonus: string;
    readonly _ceoInSet: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._equippedSetBonus = values["equipped_set_bonus"];
      this._ceoInSet = values["ceo_in_set"];
      this.autoId = values["auto_id"];
    }
    
    get equippedSetBonus(): CeoEquippedSetBonuses.Entry | undefined {
      const collection = <CeoEquippedSetBonuses.Entry[]>this.collectionCache.getCollection(CeoEquippedSetBonuses.KEY, CeoEquippedSetBonuses.Entry);
      return collection.find(entry => entry.key === this._equippedSetBonus);
    }
    
    get ceoInSet(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceoInSet);
    }
  }
}

export default CeoEquippedSetBonusCeos;
