import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitSets } from "./CampaignBonusValueIdsUnitSets";
import { UnitSets } from "./UnitSets";
export declare namespace EffectBonusValueIdsUnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitSets.Entry | undefined;
        readonly unitSet: UnitSets.Entry | undefined;
    }
}
export default EffectBonusValueIdsUnitSets;
