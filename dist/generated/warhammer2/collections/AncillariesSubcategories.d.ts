import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AncillariesSubcategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly subcategory: string;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AncillariesSubcategories;
