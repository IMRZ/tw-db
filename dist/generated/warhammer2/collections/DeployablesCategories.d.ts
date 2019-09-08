import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DeployablesCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly deployableCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DeployablesCategories;
