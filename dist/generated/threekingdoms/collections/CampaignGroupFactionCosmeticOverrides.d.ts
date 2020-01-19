import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignGroupFactionCosmeticOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly name: string;
        readonly useFactionLeaderName: boolean;
        readonly campaignFlagPath: string;
        readonly battleFlagPath: string;
        readonly battleFlagPathHistorical: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignGroupFactionCosmeticOverrides;
