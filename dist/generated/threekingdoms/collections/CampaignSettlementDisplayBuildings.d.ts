import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";
export declare namespace CampaignSettlementDisplayBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _modelId: string;
        readonly buildingBmd: string;
        readonly bmdExportTypes: string;
        constructor(collectionCache: CollectionCache, values: any);
        get modelId(): CampaignSettlementDisplayBuildingModelIds.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildings;
