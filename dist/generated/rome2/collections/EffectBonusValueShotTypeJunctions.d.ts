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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsProjectileShotTypeEnum.Entry | undefined;
        readonly shotType: ProjectileShotTypeEnum.Entry | undefined;
    }
}
export default EffectBonusValueShotTypeJunctions;
