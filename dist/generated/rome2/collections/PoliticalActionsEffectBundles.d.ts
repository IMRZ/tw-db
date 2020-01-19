import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace PoliticalActionsEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly action: string;
        readonly _effectBundle: string;
        readonly duration: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default PoliticalActionsEffectBundles;
