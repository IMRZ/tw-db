import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyCategories } from "./TechnologyCategories";
export declare namespace TechnologyCategoryParents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _parentCategory: string;
        readonly _childCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get parentCategory(): TechnologyCategories.Entry | undefined;
        get childCategory(): TechnologyCategories.Entry | undefined;
    }
}
export default TechnologyCategoryParents;
