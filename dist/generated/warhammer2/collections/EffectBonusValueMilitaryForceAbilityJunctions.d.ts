import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsMilitaryForceAbilitys } from "./CampaignBonusValueIdsMilitaryForceAbilitys";
import { ArmySpecialAbilities } from "./ArmySpecialAbilities";
export declare namespace EffectBonusValueMilitaryForceAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _forceAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsMilitaryForceAbilitys.Entry | undefined;
        get forceAbility(): ArmySpecialAbilities.Entry | undefined;
    }
}
export default EffectBonusValueMilitaryForceAbilityJunctions;
