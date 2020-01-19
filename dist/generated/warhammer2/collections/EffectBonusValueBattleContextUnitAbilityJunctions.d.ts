import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContextUnitAbilities } from "./CampaignBonusValueIdsBattleContextUnitAbilities";
import { BattleContextUnitAbilityJunctions } from "./BattleContextUnitAbilityJunctions";
export declare namespace EffectBonusValueBattleContextUnitAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectKey: string;
        readonly _bonusValueId: string;
        readonly _battleContextUnitAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectKey(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsBattleContextUnitAbilities.Entry | undefined;
        get battleContextUnitAbility(): BattleContextUnitAbilityJunctions.Entry | undefined;
    }
}
export default EffectBonusValueBattleContextUnitAbilityJunctions;
