
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitMeleeWeaponsEnum {
  export const KEY = new CollectionKey("unit_melee_weapons_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitMeleeWeaponsEnum;
