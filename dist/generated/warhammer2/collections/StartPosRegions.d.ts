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
        readonly rebelFactionName: string;
        readonly _alternativeRebelFaction: string;
        readonly settlerRebellionsEnabled: boolean;
        readonly capturePrestige: number;
        readonly longDescription: string;
        readonly developmentPoints: number;
        readonly unique: boolean;
        readonly baseFertility: number;
        readonly slotCap: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
        readonly owningFaction: StartPosFactions.Entry | undefined;
        readonly culturalOriginator: CulturesSubcultures.Entry | undefined;
        readonly rebelFaction: Factions.Entry | undefined;
        readonly alternativeRebelFaction: Factions.Entry | undefined;
    }
}
export default StartPosRegions;
