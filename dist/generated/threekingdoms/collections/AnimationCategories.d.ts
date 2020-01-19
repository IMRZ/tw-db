import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AnimationCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AnimationCategories;
