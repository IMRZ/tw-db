import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace RetinueTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default RetinueTypes;
