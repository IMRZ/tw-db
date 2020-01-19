import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Languages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly fullName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Languages;
