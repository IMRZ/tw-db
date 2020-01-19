import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiedTextLayouts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly layoutId: string;
        readonly layoutLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiedTextLayouts;
