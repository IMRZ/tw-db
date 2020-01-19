import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContextUnitAttributes } from "./CampaignBonusValueIdsBattleContextUnitAttributes";
import { BattleContextUnitAttributeJunctions } from "./BattleContextUnitAttributeJunctions";
export declare namespace EffectBonusValueBattleContextUnitAttributeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _battleContextUnitAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsBattleContextUnitAttributes.Entry | undefined;
        get battleContextUnitAttribute(): BattleContextUnitAttributeJunctions.Entry | undefined;
    }
}
export default EffectBonusValueBattleContextUnitAttributeJunctions;
