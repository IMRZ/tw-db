import { CollectionCache, CollectionKey } from "../../../common";
import { DynamicLoadingScreenEventCategories } from "./DynamicLoadingScreenEventCategories";
import { DynamicLoadingScreenEventEvaluationTypes } from "./DynamicLoadingScreenEventEvaluationTypes";
export declare namespace DynamicLoadingScreenEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: string;
        readonly _evaluationType: string;
        readonly eventFeedTriggerKeys: string;
        readonly priority: number;
        readonly turnsToExpire: number;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): DynamicLoadingScreenEventCategories.Entry | undefined;
        get evaluationType(): DynamicLoadingScreenEventEvaluationTypes.Entry | undefined;
    }
}
export default DynamicLoadingScreenEvents;
