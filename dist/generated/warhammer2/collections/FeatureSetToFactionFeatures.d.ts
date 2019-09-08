import { CollectionCache, CollectionKey } from "../../../common";
import { FeatureSets } from "./FeatureSets";
import { FactionFeatures } from "./FactionFeatures";
export declare namespace FeatureSetToFactionFeatures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _featureSet: string;
        readonly _feature: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly featureSet: FeatureSets.Entry | undefined;
        readonly feature: FactionFeatures.Entry | undefined;
    }
}
export default FeatureSetToFactionFeatures;
