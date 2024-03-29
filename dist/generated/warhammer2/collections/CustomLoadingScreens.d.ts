import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CustomLoadingScreens {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly layoutName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CustomLoadingScreens;
