import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Campaigns } from "./Campaigns";
import { StartPosFactions } from "./StartPosFactions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace StartPosRegions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _region: string;
        readonly _campaign: string;
        readonly _owningFaction: number;
        readonly factionCapital: boolean;
        readonly basePopulation: number;
        readonly baseMaxPopulation: number;
        readonly population: number;
        readonly baseGdp: number;
        readonly townWealth: number;
        readonly _culturalOriginator: string;
        readonly _rebelFaction: string;
        readonly _alternativeRebelFaction: string;
        readonly settlerRebellionsEnabled: boolean;
        readonly capturePrestige: number;
        readonly longDescription: string;
        readonly developmentPoints: number;
        readonly unique: boolean;
        readonly baseFertility: number;
        readonly slotCap: number;
        readonly initialFactionSupportValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): Regions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
        get owningFaction(): StartPosFactions.Entry | undefined;
        get culturalOriginator(): CulturesSubcultures.Entry | undefined;
        get rebelFaction(): Factions.Entry | undefined;
        get alternativeRebelFaction(): Factions.Entry | undefined;
    }
}
export default StartPosRegions;
