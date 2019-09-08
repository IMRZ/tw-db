import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";
export declare namespace CampaignSettlementDisplayBuildingsOverlays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _modelId: string;
        readonly prefabType: string;
        readonly overlayBmd: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly modelId: CampaignSettlementDisplayBuildingModelIds.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingsOverlays;
