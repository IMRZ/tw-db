import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitAttributes } from "./CampaignBonusValueIdsUnitAttributes";
import { UnitAttributes } from "./UnitAttributes";
export declare namespace EffectBonusValueUnitAttributeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitAttributes.Entry | undefined;
        readonly unitAttribute: UnitAttributes.Entry | undefined;
    }
}
export default EffectBonusValueUnitAttributeJunctions;
