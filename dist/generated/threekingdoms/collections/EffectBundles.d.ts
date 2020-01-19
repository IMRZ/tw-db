import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundleTargets } from "./EffectBundleTargets";
import { UiEffectBundleTypeEnums } from "./UiEffectBundleTypeEnums";
export declare namespace EffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly uiIcon: string;
        readonly _bundleTarget: string;
        readonly _iconSupplementColourType: string;
        readonly showInGenericBundleDisplay: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get bundleTarget(): EffectBundleTargets.Entry | undefined;
        get iconSupplementColourType(): UiEffectBundleTypeEnums.Entry | undefined;
    }
}
export default EffectBundles;
