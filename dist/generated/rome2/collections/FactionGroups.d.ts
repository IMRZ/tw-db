import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace FactionGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nameLocalised: string;
        readonly uiIcon: string;
        readonly _effectBundle: string;
        readonly descriptionLocalised: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default FactionGroups;
