
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleCinematicEventCategories {
  export const KEY = new CollectionKey("battle_cinematic_event_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleCinematicEventCategories;
