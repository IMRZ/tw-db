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
        readonly region: Regions.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
        readonly owningFaction: StartPosFactions.Entry | undefined;
        readonly governorship: Governorships.Entry | undefined;
        readonly culturalOriginator: CulturesSubcultures.Entry | undefined;
    }
}
export default StartPosRegions;
