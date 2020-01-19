import { CollectionCache, CollectionKey } from "../../../common";
import { AnimationCategories } from "./AnimationCategories";
export declare namespace AnimationSlotCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly slot: string;
        readonly _category: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): AnimationCategories.Entry | undefined;
    }
}
export default AnimationSlotCategories;
