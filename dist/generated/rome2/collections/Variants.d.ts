import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Variants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly variantName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Variants;
