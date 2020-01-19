
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatModifiersHowEnums {
  export const KEY = new CollectionKey("unit_stat_modifiers_how_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitStatModifiersHowEnums;
