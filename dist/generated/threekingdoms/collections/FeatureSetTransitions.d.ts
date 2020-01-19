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
        get from(): FeatureSets.Entry | undefined;
        get to(): FeatureSets.Entry | undefined;
        get handler(): FeatureSetTransitionHandlers.Entry | undefined;
    }
}
export default FeatureSetTransitions;
