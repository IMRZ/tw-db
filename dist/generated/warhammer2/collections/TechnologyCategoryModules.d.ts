import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodeSets } from "./TechnologyNodeSets";
import { EffectBundles } from "./EffectBundles";
export declare namespace TechnologyCategoryModules {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technologyNodeSet: string;
        readonly maxTier: number;
        readonly _effectBundle: string;
        readonly minTier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get technologyNodeSet(): TechnologyNodeSets.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default TechnologyCategoryModules;
