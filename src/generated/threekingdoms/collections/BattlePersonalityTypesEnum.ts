
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlePersonalityTypesEnum {
  export const KEY = new CollectionKey("battle_personality_types_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattlePersonalityTypesEnum;
