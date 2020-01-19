import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiUnitStatuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly tooltip: string;
        readonly iconPath: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiUnitStatuses;
