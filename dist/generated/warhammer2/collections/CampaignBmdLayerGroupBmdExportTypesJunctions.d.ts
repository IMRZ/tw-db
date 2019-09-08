import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBmdLayerGroupIds } from "./CampaignBmdLayerGroupIds";
import { BmdExportTypes } from "./BmdExportTypes";
export declare namespace CampaignBmdLayerGroupBmdExportTypesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignBmdLayerGroup: string;
        readonly _bmdExportTypes: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignBmdLayerGroup: CampaignBmdLayerGroupIds.Entry | undefined;
        readonly bmdExportTypes: BmdExportTypes.Entry | undefined;
    }
}
export default CampaignBmdLayerGroupBmdExportTypesJunctions;
