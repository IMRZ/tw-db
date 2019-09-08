
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RitualCategories {
  export const KEY = new CollectionKey("ritual_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly triggerEvents: boolean;
    readonly displayName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.triggerEvents = !!values["trigger_events"];
      this.displayName = values["display_name"];
    }
    
  }
}

export default RitualCategories;
