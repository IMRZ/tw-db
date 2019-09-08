import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FoodFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly textToDisplay: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FoodFactors;
