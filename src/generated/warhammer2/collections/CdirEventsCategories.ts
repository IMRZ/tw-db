
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsCategories {
  export const KEY = new CollectionKey("cdir_events_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly categoryKey: string;
    readonly onScreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.categoryKey = values["category_key"];
      this.onScreenName = values["on_screen_name"];
    }
    
  }
}

export default CdirEventsCategories;
