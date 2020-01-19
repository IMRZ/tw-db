import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignBmdLayerGroupIds } from "./CampaignBmdLayerGroupIds";
export declare namespace BuildingLevelsCampaignBmdLayerGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _campaignBmdLayerGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get campaignBmdLayerGroup(): CampaignBmdLayerGroupIds.Entry | undefined;
    }
}
export default BuildingLevelsCampaignBmdLayerGroupJunctions;
