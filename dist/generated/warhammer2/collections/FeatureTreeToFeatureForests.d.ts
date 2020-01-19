import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureTrees } from "./FactionFeatureTrees";
import { FactionFeatureForests } from "./FactionFeatureForests";
import { FeatureSets } from "./FeatureSets";
export declare namespace FeatureTreeToFeatureForests {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _tree: string;
        readonly _forest: string;
        readonly _startingFeatureSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get tree(): FactionFeatureTrees.Entry | undefined;
        get forest(): FactionFeatureForests.Entry | undefined;
        get startingFeatureSet(): FeatureSets.Entry | undefined;
    }
}
export default FeatureTreeToFeatureForests;
