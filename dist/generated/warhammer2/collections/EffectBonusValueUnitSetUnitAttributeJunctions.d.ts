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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitSetUnitAttributes.Entry | undefined;
        readonly unitSetAttribute: UnitSetUnitAttributeJunctions.Entry | undefined;
    }
}
export default EffectBonusValueUnitSetUnitAttributeJunctions;
