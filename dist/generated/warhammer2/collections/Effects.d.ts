import { CollectionCache, CollectionKey } from "../../../common";
import { EffectCategories } from "./EffectCategories";
export declare namespace Effects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly effect: string;
        readonly icon: string;
        readonly description: string;
        readonly priority: number;
        readonly iconNegative: string;
        readonly _category: string;
        readonly isPositiveValueGood: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): EffectCategories.Entry | undefined;
    }
}
export default Effects;
