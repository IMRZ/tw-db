import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
import { PooledResourceEffectTypes } from "./PooledResourceEffectTypes";
export declare namespace CampaignGroupPooledResourceEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _effectBundle: string;
        readonly _effectType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
        get effectType(): PooledResourceEffectTypes.Entry | undefined;
    }
}
export default CampaignGroupPooledResourceEffects;
