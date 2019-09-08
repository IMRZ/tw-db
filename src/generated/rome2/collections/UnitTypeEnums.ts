
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitTypeEnums {
  export const KEY = new CollectionKey("unit_type_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitTypeEnums;
