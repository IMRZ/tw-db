
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterPendingDeathOptionSets {
  export const KEY = new CollectionKey("character_pending_death_option_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterPendingDeathOptionSets;
