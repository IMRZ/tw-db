import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";
export declare namespace CampaignSettlementDisplayBuildingIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _buildingLevelKey: string;
        readonly _subCulture: string;
        readonly _buildingModelId: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingLevelKey: BuildingLevels.Entry | undefined;
        readonly subCulture: CulturesSubcultures.Entry | undefined;
        readonly buildingModelId: CampaignSettlementDisplayBuildingModelIds.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingIds;
