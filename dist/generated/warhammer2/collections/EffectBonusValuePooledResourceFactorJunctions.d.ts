import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPooledResourceFactors } from "./CampaignBonusValueIdsPooledResourceFactors";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
export declare namespace EffectBonusValuePooledResourceFactorJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _resourceFactor: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsPooledResourceFactors.Entry | undefined;
        readonly resourceFactor: PooledResourceFactorJunctions.Entry | undefined;
    }
}
export default EffectBonusValuePooledResourceFactorJunctions;
