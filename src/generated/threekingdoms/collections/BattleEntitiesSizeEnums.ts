
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleEntitiesSizeEnums {
  export const KEY = new CollectionKey("battle_entities_size_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleEntitiesSizeEnums;
