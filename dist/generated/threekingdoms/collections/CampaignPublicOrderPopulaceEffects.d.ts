import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignPublicOrderPopulaceEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly populaceHappiness: string;
        readonly _effectBundle: string;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectBundle(): EffectBundles.Entry | undefined;
        get group(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignPublicOrderPopulaceEffects;
