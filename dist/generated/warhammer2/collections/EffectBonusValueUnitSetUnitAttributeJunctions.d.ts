import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitSetUnitAttributes } from "./CampaignBonusValueIdsUnitSetUnitAttributes";
import { UnitSetUnitAttributeJunctions } from "./UnitSetUnitAttributeJunctions";
export declare namespace EffectBonusValueUnitSetUnitAttributeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitSetAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsUnitSetUnitAttributes.Entry | undefined;
        get unitSetAttribute(): UnitSetUnitAttributeJunctions.Entry | undefined;
    }
}
export default EffectBonusValueUnitSetUnitAttributeJunctions;
