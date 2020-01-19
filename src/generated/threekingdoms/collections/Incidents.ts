
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";

export namespace Incidents {
  export const KEY = new CollectionKey("incidents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly uiImage: string;
    readonly generate: boolean;
    readonly prioritised: boolean;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly _eventCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.uiImage = values["ui_image"];
      this.generate = !!values["generate"];
      this.prioritised = !!values["prioritised"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this._eventCategory = values["event_category"];
    }
    
    get eventCategory(): CdirEventsCategories.Entry | undefined {
      const collection = <CdirEventsCategories.Entry[]>this.collectionCache.getCollection(CdirEventsCategories.KEY, CdirEventsCategories.Entry);
      return collection.find(entry => entry.categoryKey === this._eventCategory);
    }
  }
}

export default Incidents;
