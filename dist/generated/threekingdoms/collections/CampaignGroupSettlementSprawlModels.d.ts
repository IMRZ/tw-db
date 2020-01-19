import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignSettlementDisplayBuildings } from "./CampaignSettlementDisplayBuildings";
export declare namespace CampaignGroupSettlementSprawlModels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _model: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get model(): CampaignSettlementDisplayBuildings.Entry | undefined;
    }
}
export default CampaignGroupSettlementSprawlModels;
