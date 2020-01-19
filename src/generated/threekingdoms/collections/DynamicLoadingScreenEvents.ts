
import { CollectionCache, CollectionKey } from "../../../common";
import { DynamicLoadingScreenEventCategories } from "./DynamicLoadingScreenEventCategories";
import { DynamicLoadingScreenEventEvaluationTypes } from "./DynamicLoadingScreenEventEvaluationTypes";

export namespace DynamicLoadingScreenEvents {
  export const KEY = new CollectionKey("dynamic_loading_screen_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly _evaluationType: string;
    readonly eventFeedTriggerKeys: string;
    readonly priority: number;
    readonly turnsToExpire: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this._evaluationType = values["evaluation_type"];
      this.eventFeedTriggerKeys = values["event_feed_trigger_keys"];
      this.priority = values["priority"];
      this.turnsToExpire = values["turns_to_expire"];
    }
    
    get category(): DynamicLoadingScreenEventCategories.Entry | undefined {
      const collection = <DynamicLoadingScreenEventCategories.Entry[]>this.collectionCache.getCollection(DynamicLoadingScreenEventCategories.KEY, DynamicLoadingScreenEventCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get evaluationType(): DynamicLoadingScreenEventEvaluationTypes.Entry | undefined {
      const collection = <DynamicLoadingScreenEventEvaluationTypes.Entry[]>this.collectionCache.getCollection(DynamicLoadingScreenEventEvaluationTypes.KEY, DynamicLoadingScreenEventEvaluationTypes.Entry);
      return collection.find(entry => entry.type === this._evaluationType);
    }
  }
}

export default DynamicLoadingScreenEvents;
