
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CustomBattleUnitSets {
  export const KEY = new CollectionKey("custom_battle_unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CustomBattleUnitSets;
