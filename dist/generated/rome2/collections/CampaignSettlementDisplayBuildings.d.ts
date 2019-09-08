import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingIds } from "./CampaignSettlementDisplayBuildingIds";
import { CampaignSettlementDisplayBuildingsEnums } from "./CampaignSettlementDisplayBuildingsEnums";
export declare namespace CampaignSettlementDisplayBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _displayBuildingKey: string;
        readonly _state: string;
        readonly isSlum: boolean;
        readonly isSieged: boolean;
        readonly isBlockaded: boolean;
        readonly buildingPath: string;
        readonly destructionAdditionalModel: string;
        readonly destructionOverrideModel: string;
        readonly constructionAdditionalModel: string;
        readonly constructionOverrideModel: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly displayBuildingKey: CampaignSettlementDisplayBuildingIds.Entry | undefined;
        readonly state: CampaignSettlementDisplayBuildingsEnums.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildings;
