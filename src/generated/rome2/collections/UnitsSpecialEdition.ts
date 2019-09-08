
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitsSpecialEdition {
  export const KEY = new CollectionKey("units_special_edition");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
    }
    
  }
}

export default UnitsSpecialEdition;
