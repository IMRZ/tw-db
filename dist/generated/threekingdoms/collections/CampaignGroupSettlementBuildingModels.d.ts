import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignSettlementDisplayBuildings } from "./CampaignSettlementDisplayBuildings";
export declare namespace CampaignGroupSettlementBuildingModels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _buildingModel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get buildingModel(): CampaignSettlementDisplayBuildings.Entry | undefined;
    }
}
export default CampaignGroupSettlementBuildingModels;
