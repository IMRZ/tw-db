import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitClass {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        readonly tooltip: string;
        readonly sortPriority: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitClass;
