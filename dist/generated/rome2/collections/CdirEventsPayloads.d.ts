import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace CdirEventsPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly payloadKey: string;
        readonly _effectBundleKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundleKey: EffectBundles.Entry | undefined;
    }
}
export default CdirEventsPayloads;
