import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TechnologyCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly position: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TechnologyCategories;
