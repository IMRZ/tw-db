
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CeoLocationEnums {
  export const KEY = new CollectionKey("ceo_location_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CeoLocationEnums;
