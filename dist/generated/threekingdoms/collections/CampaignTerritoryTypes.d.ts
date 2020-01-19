import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignTerritoryTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaignGroup: string;
        readonly countsAsEnemyLands: boolean;
        readonly countsTowardsPublicOrderWarHappiness: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignTerritoryTypes;
