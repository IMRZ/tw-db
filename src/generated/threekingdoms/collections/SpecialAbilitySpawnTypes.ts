
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilitySpawnTypes {
  export const KEY = new CollectionKey("special_ability_spawn_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default SpecialAbilitySpawnTypes;
