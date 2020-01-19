
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";

export namespace Dilemmas {
  export const KEY = new CollectionKey("dilemmas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly uiImage: string;
    readonly generate: boolean;
    readonly prioritized: boolean;
    readonly _eventCategory: string;
    readonly soundPopupOverride: string;
    readonly soundClickOverride: string;
    readonly iconOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.uiImage = values["ui_image"];
      this.generate = !!values["generate"];
      this.prioritized = !!values["prioritized"];
      this._eventCategory = values["event_category"];
      this.soundPopupOverride = values["sound_popup_override"];
      this.soundClickOverride = values["sound_click_override"];
      this.iconOverride = values["icon_override"];
    }
    
    get eventCategory(): CdirEventsCategories.Entry | undefined {
      const collection = <CdirEventsCategories.Entry[]>this.collectionCache.getCollection(CdirEventsCategories.KEY, CdirEventsCategories.Entry);
      return collection.find(entry => entry.categoryKey === this._eventCategory);
    }
  }
}

export default Dilemmas;
