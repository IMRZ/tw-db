import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace BattleContextUnitAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battleContext: string;
        readonly _unitAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleContext: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly unitAbility: UnitAbilities.Entry | undefined;
    }
}
export default BattleContextUnitAbilityJunctions;
