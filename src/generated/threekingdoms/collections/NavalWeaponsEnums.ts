
import { CollectionCache, CollectionKey } from "../../../common";


export namespace NavalWeaponsEnums {
  export const KEY = new CollectionKey("naval_weapons_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly types: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.types = values["types"];
    }
    
  }
}

export default NavalWeaponsEnums;
