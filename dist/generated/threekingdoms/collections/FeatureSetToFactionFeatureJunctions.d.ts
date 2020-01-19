import { CollectionCache, CollectionKey } from "../../../common";
import { FeatureSets } from "./FeatureSets";
import { FactionFeatures } from "./FactionFeatures";
export declare namespace FeatureSetToFactionFeatureJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _featureSet: string;
        readonly _feature: string;
        constructor(collectionCache: CollectionCache, values: any);
        get featureSet(): FeatureSets.Entry | undefined;
        get feature(): FactionFeatures.Entry | undefined;
    }
}
export default FeatureSetToFactionFeatureJunctions;
