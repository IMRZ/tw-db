import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsProjectileShotTypeEnum } from "./CampaignBonusValueIdsProjectileShotTypeEnum";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";
export declare namespace EffectBonusValueShotTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _shotType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsProjectileShotTypeEnum.Entry | undefined;
        get shotType(): ProjectileShotTypeEnum.Entry | undefined;
    }
}
export default EffectBonusValueShotTypeJunctions;
