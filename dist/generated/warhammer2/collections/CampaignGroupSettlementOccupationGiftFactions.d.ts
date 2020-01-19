import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Factions } from "./Factions";
export declare namespace CampaignGroupSettlementOccupationGiftFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CampaignGroupSettlementOccupationGiftFactions;
