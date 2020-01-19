import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TaxesClasses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly tax: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TaxesClasses;
