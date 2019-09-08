import { CollectionCache, CollectionKey } from "../../../common";
import { FeatureSets } from "./FeatureSets";
import { FeatureSetTransitionHandlers } from "./FeatureSetTransitionHandlers";
export declare namespace FeatureSetTransitions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _from: string;
        readonly _to: string;
        readonly _handler: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly from: FeatureSets.Entry | undefined;
        readonly to: FeatureSets.Entry | undefined;
        readonly handler: FeatureSetTransitionHandlers.Entry | undefined;
    }
}
export default FeatureSetTransitions;
