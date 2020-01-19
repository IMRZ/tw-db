import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { EffectBundles } from "./EffectBundles";
export declare namespace ConfederationEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly _effectBundle: string;
        readonly turns: number;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default ConfederationEffectBundles;
