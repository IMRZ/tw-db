import { CollectionCache, CollectionKey } from "../../../common";
import { DynamicLoadingScreenEvents } from "./DynamicLoadingScreenEvents";
export declare namespace UiDynamicLoadingScreenEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _dynamicLoadingScreenEvent: string;
        readonly localisedText: string;
        readonly backgroundImage: string;
        readonly localisedTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dynamicLoadingScreenEvent(): DynamicLoadingScreenEvents.Entry | undefined;
    }
}
export default UiDynamicLoadingScreenEvents;
