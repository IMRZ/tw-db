import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplaySettlementLayoutIds } from "./CampaignSettlementDisplaySettlementLayoutIds";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignSettlementDisplayBuildings } from "./CampaignSettlementDisplayBuildings";
export declare namespace CampaignSettlementDisplaySettlementLayoutBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _layout: string;
        readonly _buildingLevel: string;
        readonly _buildingModel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get layout(): CampaignSettlementDisplaySettlementLayoutIds.Entry | undefined;
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get buildingModel(): CampaignSettlementDisplayBuildings.Entry | undefined;
    }
}
export default CampaignSettlementDisplaySettlementLayoutBuildings;
