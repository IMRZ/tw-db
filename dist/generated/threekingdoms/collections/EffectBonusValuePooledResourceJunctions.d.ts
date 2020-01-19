import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPooledResources } from "./CampaignBonusValueIdsPooledResources";
import { PooledResources } from "./PooledResources";
export declare namespace EffectBonusValuePooledResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _pooledResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsPooledResources.Entry | undefined;
        get pooledResource(): PooledResources.Entry | undefined;
    }
}
export default EffectBonusValuePooledResourceJunctions;
