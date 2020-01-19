import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { GameDifficultyLevels } from "./GameDifficultyLevels";
import { Campaigns } from "./Campaigns";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";
export declare namespace CaiPersonalityGroupOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _gameDifficultyLevel: string;
        readonly _campaignKey: string;
        readonly _personalityGroup: string;
        readonly _playerFaction: string;
        readonly _playerSubculture: string;
        readonly _playerCulture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get gameDifficultyLevel(): GameDifficultyLevels.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get personalityGroup(): CaiPersonalityGroups.Entry | undefined;
        get playerFaction(): Factions.Entry | undefined;
        get playerSubculture(): CulturesSubcultures.Entry | undefined;
        get playerCulture(): Cultures.Entry | undefined;
    }
}
export default CaiPersonalityGroupOverrides;
