import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEventFeedCategories } from "./CeoEventFeedCategories";
export declare namespace CeoCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly title: string;
        readonly iconPath: string;
        readonly isHiddenFromDisplay: boolean;
        readonly _eventFeedCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get eventFeedCategory(): CeoEventFeedCategories.Entry | undefined;
    }
}
export default CeoCategories;
