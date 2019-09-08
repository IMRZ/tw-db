
import { CollectionCache, CollectionKey } from "../../../common";
import { Banners } from "./Banners";
import { UnitSets } from "./UnitSets";

export namespace BannersPermittedUnitSets {
  export const KEY = new CollectionKey("banners_permitted_unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _banner: string;
    readonly _unitSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._banner = values["banner"];
      this._unitSet = values["unit_set"];
    }
    
    get banner(): Banners.Entry | undefined {
      const collection = <Banners.Entry[]>this.collectionCache.getCollection(Banners.KEY, Banners.Entry);
      return collection.find(entry => entry.banner === this._banner);
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
  }
}

export default BannersPermittedUnitSets;
