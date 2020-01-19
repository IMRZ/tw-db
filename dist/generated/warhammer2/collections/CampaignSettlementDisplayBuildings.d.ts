import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";
export declare namespace CampaignSettlementDisplayBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _modelId: string;
        readonly buildingBmd: string;
        readonly portBmd: string;
        readonly constructionBmd: string;
        readonly damagedBmd: string;
        readonly destroyedBmd: string;
        readonly portConstructionBmd: string;
        readonly wallBmd: string;
        readonly portWalledBmd: string;
        readonly onSeaBmd: string;
        constructor(collectionCache: CollectionCache, values: any);
        get modelId(): CampaignSettlementDisplayBuildingModelIds.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildings;
