
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsCategories {
  export const KEY = new CollectionKey("cdir_events_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly categoryKey: string;
    readonly onScreenName: string;
    readonly activeText: string;
    readonly succeededText: string;
    readonly cancelledText: string;
    readonly expiredText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.categoryKey = values["category_key"];
      this.onScreenName = values["on_screen_name"];
      this.activeText = values["active_text"];
      this.succeededText = values["succeeded_text"];
      this.cancelledText = values["cancelled_text"];
      this.expiredText = values["expired_text"];
    }
    
  }
}

export default CdirEventsCategories;
