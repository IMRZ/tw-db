import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Stances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Stances;
