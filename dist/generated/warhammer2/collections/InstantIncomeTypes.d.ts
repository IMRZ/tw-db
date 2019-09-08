import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace InstantIncomeTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default InstantIncomeTypes;
