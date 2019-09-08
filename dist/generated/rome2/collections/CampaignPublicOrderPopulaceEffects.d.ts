import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignPublicOrderPopulaceEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly populaceHappiness: string;
        readonly _culture: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default CampaignPublicOrderPopulaceEffects;
