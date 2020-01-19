
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitCategory {
  export const KEY = new CollectionKey("unit_category");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
    }
    
  }
}

export default UnitCategory;
