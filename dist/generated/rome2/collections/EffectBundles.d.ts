import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundleTargets } from "./EffectBundleTargets";
export declare namespace EffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly uiIcon: string;
        readonly _bundleTarget: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly bundleTarget: EffectBundleTargets.Entry | undefined;
    }
}
export default EffectBundles;
