import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceEffectTypes } from "./PooledResourceEffectTypes";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignGroupPooledResourceEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _effectType: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get effectType(): PooledResourceEffectTypes.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignGroupPooledResourceEffects;
