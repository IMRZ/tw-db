import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace StateGiftValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default StateGiftValues;
