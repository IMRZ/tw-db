import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyCategories } from "./TechnologyCategories";
export declare namespace TechnologyCategoryParents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _parentCategory: string;
        readonly _childCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly parentCategory: TechnologyCategories.Entry | undefined;
        readonly childCategory: TechnologyCategories.Entry | undefined;
    }
}
export default TechnologyCategoryParents;
