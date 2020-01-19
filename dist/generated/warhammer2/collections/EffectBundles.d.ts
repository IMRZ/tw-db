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
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get bundleTarget(): EffectBundleTargets.Entry | undefined;
    }
}
export default EffectBundles;
