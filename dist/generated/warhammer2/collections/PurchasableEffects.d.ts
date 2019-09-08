import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PurchasableEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PurchasableEffects;
