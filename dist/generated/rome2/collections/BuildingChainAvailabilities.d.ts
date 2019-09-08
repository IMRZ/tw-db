import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChainAvailabilitySetIds } from "./BuildingChainAvailabilitySetIds";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace BuildingChainAvailabilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _setId: string;
        readonly _culture: string;
        readonly _subCulture: string;
        readonly _faction: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly setId: BuildingChainAvailabilitySetIds.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly subCulture: CulturesSubcultures.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default BuildingChainAvailabilities;
