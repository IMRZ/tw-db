
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";

export namespace CeoAntiCeoPairs {
  export const KEY = new CollectionKey("ceo_anti_ceo_pairs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceo: string;
    readonly _antiCeo: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceo = values["ceo"];
      this._antiCeo = values["anti_ceo"];
      this.autoId = values["auto_id"];
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
    
    get antiCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._antiCeo);
    }
  }
}

export default CeoAntiCeoPairs;
