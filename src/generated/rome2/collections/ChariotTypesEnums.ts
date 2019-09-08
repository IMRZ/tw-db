
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ChariotTypesEnums {
  export const KEY = new CollectionKey("chariot_types_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ChariotTypesEnums;
