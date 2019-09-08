
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Provinces } from "./Provinces";

export namespace RegionToProvinceJunctions {
  export const KEY = new CollectionKey("region_to_province_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _province: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._province = values["province"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get province(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province);
    }
  }
}

export default RegionToProvinceJunctions;
