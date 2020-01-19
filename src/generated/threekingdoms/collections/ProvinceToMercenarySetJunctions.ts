
import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";
import { MercenaryPools } from "./MercenaryPools";

export namespace ProvinceToMercenarySetJunctions {
  export const KEY = new CollectionKey("province_to_mercenary_set_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _province: string;
    readonly _mercenarySet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._province = values["province"];
      this._mercenarySet = values["mercenary_set"];
    }
    
    get province(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province);
    }
    
    get mercenarySet(): MercenaryPools.Entry | undefined {
      const collection = <MercenaryPools.Entry[]>this.collectionCache.getCollection(MercenaryPools.KEY, MercenaryPools.Entry);
      return collection.find(entry => entry.key === this._mercenarySet);
    }
  }
}

export default ProvinceToMercenarySetJunctions;
