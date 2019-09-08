import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Advisors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly advisorName: string;
        readonly advisorIconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Advisors;
