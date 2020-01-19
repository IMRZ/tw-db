import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Campaigns } from "./Campaigns";
import { StartPosFactions } from "./StartPosFactions";
import { Governorships } from "./Governorships";
import { CulturesSubcultures } from "./CulturesSubcultures";
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
        readonly roadUpgrades: number;
        readonly canals: boolean;
        readonly railways: boolean;
        readonly townWealth: number;
        readonly _governorship: string;
        readonly _culturalOriginator: string;
        readonly _rebelFaction: any;
        readonly rebelFactionName: string;
        readonly _alternativeRebelFaction: any;
        readonly settlerRebellionsEnabled: boolean;
        readonly capturePrestige: number;
        readonly longDescription: string;
        readonly developmentPoints: number;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): Regions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
        get owningFaction(): StartPosFactions.Entry | undefined;
        get governorship(): Governorships.Entry | undefined;
        get culturalOriginator(): CulturesSubcultures.Entry | undefined;
    }
}
export default StartPosRegions;
