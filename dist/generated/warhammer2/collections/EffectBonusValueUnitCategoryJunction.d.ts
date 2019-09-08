import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitCategory } from "./CampaignBonusValueIdsUnitCategory";
import { UnitCategory } from "./UnitCategory";
export declare namespace EffectBonusValueUnitCategoryJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitCategory.Entry | undefined;
        readonly unitCategory: UnitCategory.Entry | undefined;
    }
}
export default EffectBonusValueUnitCategoryJunction;
