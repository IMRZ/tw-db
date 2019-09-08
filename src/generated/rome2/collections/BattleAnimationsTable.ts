
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleAnimationsTable {
  export const KEY = new CollectionKey("battle_animations_table");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleAnimationsTable;
