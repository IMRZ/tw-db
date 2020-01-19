import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitSetUnitAbilities } from "./CampaignBonusValueIdsUnitSetUnitAbilities";
import { UnitSetUnitAbilityJunctions } from "./UnitSetUnitAbilityJunctions";
export declare namespace EffectBonusValueUnitSetUnitAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitSetAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsUnitSetUnitAbilities.Entry | undefined;
        get unitSetAbility(): UnitSetUnitAbilityJunctions.Entry | undefined;
    }
}
export default EffectBonusValueUnitSetUnitAbilityJunctions;
