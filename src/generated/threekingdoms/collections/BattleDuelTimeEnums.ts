
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleDuelTimeEnums {
  export const KEY = new CollectionKey("battle_duel_time_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default BattleDuelTimeEnums;
