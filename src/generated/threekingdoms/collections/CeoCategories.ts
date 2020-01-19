
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEventFeedCategories } from "./CeoEventFeedCategories";

export namespace CeoCategories {
  export const KEY = new CollectionKey("ceo_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly title: string;
    readonly iconPath: string;
    readonly isHiddenFromDisplay: boolean;
    readonly _eventFeedCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this.iconPath = values["icon_path"];
      this.isHiddenFromDisplay = !!values["is_hidden_from_display"];
      this._eventFeedCategory = values["event_feed_category"];
    }
    
    get eventFeedCategory(): CeoEventFeedCategories.Entry | undefined {
      const collection = <CeoEventFeedCategories.Entry[]>this.collectionCache.getCollection(CeoEventFeedCategories.KEY, CeoEventFeedCategories.Entry);
      return collection.find(entry => entry.eventFeedCategory === this._eventFeedCategory);
    }
  }
}

export default CeoCategories;
