import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
export declare namespace FactionCivilWarSetups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _primaryFaction: string;
        readonly _secondaryFaction: string;
        readonly factionNameOverridePrimaryHigh: string;
        readonly factionNameOverridePrimaryLow: string;
        readonly factionNameOverrideSecondaryHigh: string;
        readonly factionNameOverrideSecondaryLow: string;
        readonly factionNameOverrideVictory: string;
        readonly factionLeaderTitleOverrideVictory: string;
        readonly _secessionistFaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get primaryFaction(): Factions.Entry | undefined;
        get secondaryFaction(): Factions.Entry | undefined;
        get secessionistFaction(): Factions.Entry | undefined;
    }
}
export default FactionCivilWarSetups;
