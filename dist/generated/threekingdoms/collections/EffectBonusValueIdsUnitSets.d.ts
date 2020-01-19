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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsUnitSets.Entry | undefined;
        get unitSet(): UnitSets.Entry | undefined;
    }
}
export default EffectBonusValueIdsUnitSets;
