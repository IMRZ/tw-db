import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCatchmentOverrideAreas } from "./BattleCatchmentOverrideAreas";
import { Cultures } from "./Cultures";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { CampaignBattlePaths } from "./CampaignBattlePaths";
import { BattleCatchmentOverrideGroups } from "./BattleCatchmentOverrideGroups";
export declare namespace BattleCatchmentOverrideBattleMappings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _area: string;
        readonly _attacker: string;
        readonly _defender: string;
        readonly _battleType: string;
        readonly _battlePath: string;
        readonly _battleGroup: string;
        readonly requiredTileUpgrades: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly area: BattleCatchmentOverrideAreas.Entry | undefined;
        readonly attacker: Cultures.Entry | undefined;
        readonly defender: Cultures.Entry | undefined;
        readonly battleType: CampaignBattleTypeEnums.Entry | undefined;
        readonly battlePath: CampaignBattlePaths.Entry | undefined;
        readonly battleGroup: BattleCatchmentOverrideGroups.Entry | undefined;
    }
}
export default BattleCatchmentOverrideBattleMappings;
