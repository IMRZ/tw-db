import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContextArmySpecialAbilities } from "./CampaignBonusValueIdsBattleContextArmySpecialAbilities";
import { BattleContextArmySpecialAbilityJunctions } from "./BattleContextArmySpecialAbilityJunctions";
export declare namespace EffectBonusValueBattleContextArmySpecialAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _battleContextArmySpecialAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsBattleContextArmySpecialAbilities.Entry | undefined;
        get battleContextArmySpecialAbility(): BattleContextArmySpecialAbilityJunctions.Entry | undefined;
    }
}
export default EffectBonusValueBattleContextArmySpecialAbilityJunctions;
