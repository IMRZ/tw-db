
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitNavalDamageSites {
  export const KEY = new CollectionKey("unit_naval_damage_sites");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitNavalDamageSites;
