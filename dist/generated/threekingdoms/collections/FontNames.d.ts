import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FontNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly fontName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FontNames;
