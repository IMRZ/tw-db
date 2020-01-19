import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureTrees } from "./FactionFeatureTrees";
import { FeatureSetTransitions } from "./FeatureSetTransitions";
export declare namespace FactionFeatureTreeToTransitionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _featureTree: string;
        readonly _transition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get featureTree(): FactionFeatureTrees.Entry | undefined;
        get transition(): FeatureSetTransitions.Entry | undefined;
    }
}
export default FactionFeatureTreeToTransitionJunctions;
