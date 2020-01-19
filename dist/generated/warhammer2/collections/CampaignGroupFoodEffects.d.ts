import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignGroupFoodEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _group: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignGroupFoodEffects;
