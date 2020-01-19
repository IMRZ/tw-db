import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureForests } from "./FactionFeatureForests";
import { FactionFeatureTrees } from "./FactionFeatureTrees";
import { FeatureSets } from "./FeatureSets";
export declare namespace FeatureTreeToFeatureForests {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _forest: string;
        readonly _tree: string;
        readonly _startingFeatureSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get forest(): FactionFeatureForests.Entry | undefined;
        get tree(): FactionFeatureTrees.Entry | undefined;
        get startingFeatureSet(): FeatureSets.Entry | undefined;
    }
}
export default FeatureTreeToFeatureForests;
