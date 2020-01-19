import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace FactionPotentialDifficultyOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _factionDifficultyLevel: string;
        readonly _campaignKey: string;
        readonly _playerFaction: string;
        readonly _playerSubculture: string;
        readonly factionPotentialBonus: number;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get factionDifficultyLevel(): PlayerGameDifficultyTypes.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get playerFaction(): Factions.Entry | undefined;
        get playerSubculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default FactionPotentialDifficultyOverrides;
