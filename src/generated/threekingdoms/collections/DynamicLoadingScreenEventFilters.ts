
import { CollectionCache, CollectionKey } from "../../../common";
import { DynamicLoadingScreenEvents } from "./DynamicLoadingScreenEvents";
import { DynamicLoadingScreenEventFilterConditions } from "./DynamicLoadingScreenEventFilterConditions";

export namespace DynamicLoadingScreenEventFilters {
  export const KEY = new CollectionKey("dynamic_loading_screen_event_filters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _eventId: string;
    readonly _filterCondition: string;
    readonly filterParams: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._eventId = values["event_id"];
      this._filterCondition = values["filter_condition"];
      this.filterParams = values["filter_params"];
    }
    
    get eventId(): DynamicLoadingScreenEvents.Entry | undefined {
      const collection = <DynamicLoadingScreenEvents.Entry[]>this.collectionCache.getCollection(DynamicLoadingScreenEvents.KEY, DynamicLoadingScreenEvents.Entry);
      return collection.find(entry => entry.key === this._eventId);
    }
    
    get filterCondition(): DynamicLoadingScreenEventFilterConditions.Entry | undefined {
      const collection = <DynamicLoadingScreenEventFilterConditions.Entry[]>this.collectionCache.getCollection(DynamicLoadingScreenEventFilterConditions.KEY, DynamicLoadingScreenEventFilterConditions.Entry);
      return collection.find(entry => entry.key === this._filterCondition);
    }
  }
}

export default DynamicLoadingScreenEventFilters;
