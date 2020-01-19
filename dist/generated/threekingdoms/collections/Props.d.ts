import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Props {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly metaTagGroups: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Props;
