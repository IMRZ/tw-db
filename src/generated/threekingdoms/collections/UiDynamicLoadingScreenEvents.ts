
import { CollectionCache, CollectionKey } from "../../../common";
import { DynamicLoadingScreenEvents } from "./DynamicLoadingScreenEvents";

export namespace UiDynamicLoadingScreenEvents {
  export const KEY = new CollectionKey("ui_dynamic_loading_screen_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _dynamicLoadingScreenEvent: string;
    readonly localisedText: string;
    readonly backgroundImage: string;
    readonly localisedTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._dynamicLoadingScreenEvent = values["dynamic_loading_screen_event"];
      this.localisedText = values["localised_text"];
      this.backgroundImage = values["background_image"];
      this.localisedTitle = values["localised_title"];
    }
    
    get dynamicLoadingScreenEvent(): DynamicLoadingScreenEvents.Entry | undefined {
      const collection = <DynamicLoadingScreenEvents.Entry[]>this.collectionCache.getCollection(DynamicLoadingScreenEvents.KEY, DynamicLoadingScreenEvents.Entry);
      return collection.find(entry => entry.key === this._dynamicLoadingScreenEvent);
    }
  }
}

export default UiDynamicLoadingScreenEvents;
