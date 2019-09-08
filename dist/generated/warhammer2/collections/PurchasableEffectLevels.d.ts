import { CollectionCache, CollectionKey } from "../../../common";
import { PurchasableEffects } from "./PurchasableEffects";
import { ResourceCosts } from "./ResourceCosts";
import { EffectBundles } from "./EffectBundles";
export declare namespace PurchasableEffectLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly level: number;
        readonly _resourceCost: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: PurchasableEffects.Entry | undefined;
        readonly resourceCost: ResourceCosts.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default PurchasableEffectLevels;
