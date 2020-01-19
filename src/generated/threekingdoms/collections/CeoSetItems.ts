
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoSets } from "./CeoSets";
import { Ceos } from "./Ceos";

export namespace CeoSetItems {
  export const KEY = new CollectionKey("ceo_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoSet: string;
    readonly _ceo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoSet = values["ceo_set"];
      this._ceo = values["ceo"];
    }
    
    get ceoSet(): CeoSets.Entry | undefined {
      const collection = <CeoSets.Entry[]>this.collectionCache.getCollection(CeoSets.KEY, CeoSets.Entry);
      return collection.find(entry => entry.key === this._ceoSet);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CeoSetItems;
