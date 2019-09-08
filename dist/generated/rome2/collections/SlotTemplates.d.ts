import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SlotTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SlotTemplates;
