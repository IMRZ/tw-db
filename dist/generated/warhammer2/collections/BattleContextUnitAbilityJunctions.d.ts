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
        get battleContext(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        get unitAbility(): UnitAbilities.Entry | undefined;
    }
}
export default BattleContextUnitAbilityJunctions;
