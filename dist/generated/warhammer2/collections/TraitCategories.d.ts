import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TraitCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TraitCategories;
