import { CollectionCache, CollectionKey } from "../../../common";
import { DynamicLoadingScreenEvents } from "./DynamicLoadingScreenEvents";
import { DynamicLoadingScreenEventFilterConditions } from "./DynamicLoadingScreenEventFilterConditions";
export declare namespace DynamicLoadingScreenEventFilters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _eventId: string;
        readonly _filterCondition: string;
        readonly filterParams: string;
        constructor(collectionCache: CollectionCache, values: any);
        get eventId(): DynamicLoadingScreenEvents.Entry | undefined;
        get filterCondition(): DynamicLoadingScreenEventFilterConditions.Entry | undefined;
    }
}
export default DynamicLoadingScreenEventFilters;
