import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitClass } from "./CampaignBonusValueIdsUnitClass";
import { UnitClass } from "./UnitClass";
export declare namespace EffectBonusValueUnitClassJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitClass: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitClass.Entry | undefined;
        readonly unitClass: UnitClass.Entry | undefined;
    }
}
export default EffectBonusValueUnitClassJunction;
