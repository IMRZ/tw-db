import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace PoliticalPartiesLoyaltyEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly loyalty: number;
        readonly _bundleKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get bundleKey(): EffectBundles.Entry | undefined;
    }
}
export default PoliticalPartiesLoyaltyEffectBundles;
