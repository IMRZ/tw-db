import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Governorships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly governorship: string;
        readonly onscreen: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Governorships;
