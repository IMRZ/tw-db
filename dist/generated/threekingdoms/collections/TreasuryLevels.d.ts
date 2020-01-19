import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TreasuryLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TreasuryLevels;
