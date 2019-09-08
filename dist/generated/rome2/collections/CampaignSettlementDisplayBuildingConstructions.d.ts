import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingIds } from "./CampaignSettlementDisplayBuildingIds";
import { CampaignSettlementDisplayBuildingConstructionEnums } from "./CampaignSettlementDisplayBuildingConstructionEnums";
export declare namespace CampaignSettlementDisplayBuildingConstructions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _displayBuildingKey: string;
        readonly _constructionType: string;
        readonly phase: number;
        readonly buildingPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly displayBuildingKey: CampaignSettlementDisplayBuildingIds.Entry | undefined;
        readonly constructionType: CampaignSettlementDisplayBuildingConstructionEnums.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingConstructions;
