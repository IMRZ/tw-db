import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TaxesLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly taxLevel: string;
        readonly percentage: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TaxesLevels;
