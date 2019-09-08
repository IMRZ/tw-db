
import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";

export namespace ProvincialInitiativeStrengthProvinceToProvinceJunctions {
  export const KEY = new CollectionKey("provincial_initiative_strength_province_to_province_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _province1: string;
    readonly _province2: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._province1 = values["province1"];
      this._province2 = values["province2"];
    }
    
    get province1(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province1);
    }
    
    get province2(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province2);
    }
  }
}

export default ProvincialInitiativeStrengthProvinceToProvinceJunctions;
