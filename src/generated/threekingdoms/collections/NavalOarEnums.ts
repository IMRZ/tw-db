
import { CollectionCache, CollectionKey } from "../../../common";


export namespace NavalOarEnums {
  export const KEY = new CollectionKey("naval_oar_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default NavalOarEnums;
