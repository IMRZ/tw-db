import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Genders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly gender: string;
        readonly onscreen: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Genders;
