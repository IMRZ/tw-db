import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { EffectBundles } from "./EffectBundles";
export declare namespace RitualPayloadEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _effectBundle: string;
        readonly duration: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly payload: RitualPayloads.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default RitualPayloadEffectBundles;
