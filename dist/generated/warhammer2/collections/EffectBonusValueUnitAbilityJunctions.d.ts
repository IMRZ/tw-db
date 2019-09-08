import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitAbility } from "./CampaignBonusValueIdsUnitAbility";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace EffectBonusValueUnitAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitAbility.Entry | undefined;
        readonly unitAbility: UnitAbilities.Entry | undefined;
    }
}
export default EffectBonusValueUnitAbilityJunctions;
