
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleDuelAbilityTypeEnums {
  export const KEY = new CollectionKey("battle_duel_ability_type_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleDuelAbilityTypeEnums;
