import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace Banners {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly banner: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default Banners;
