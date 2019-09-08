import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TExcPackFiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly packFile: string;
        readonly notes: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TExcPackFiles;
