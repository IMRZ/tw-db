import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { Factions } from "./Factions";
export declare namespace CampaignStancesFactionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get stance(): CampaignStances.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CampaignStancesFactionsJunctions;
