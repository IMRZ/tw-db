import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { ArmySpecialAbilities } from "./ArmySpecialAbilities";
export declare namespace BattleContextArmySpecialAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battleContext: string;
        readonly _armySpecialAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleContext: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly armySpecialAbility: ArmySpecialAbilities.Entry | undefined;
    }
}
export default BattleContextArmySpecialAbilityJunctions;
