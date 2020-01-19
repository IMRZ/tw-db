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
        get effect(): PurchasableEffects.Entry | undefined;
        get resourceCost(): ResourceCosts.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default PurchasableEffectLevels;
