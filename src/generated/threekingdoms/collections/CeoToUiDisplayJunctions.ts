
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";

export namespace CeoToUiDisplayJunctions {
  export const KEY = new CollectionKey("ceo_to_ui_display_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceo: string;
    readonly maleImage: string;
    readonly femaleImage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceo = values["ceo"];
      this.maleImage = values["male_image"];
      this.femaleImage = values["female_image"];
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CeoToUiDisplayJunctions;
