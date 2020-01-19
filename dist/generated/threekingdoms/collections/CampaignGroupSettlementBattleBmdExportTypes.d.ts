import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { BmdExportTypes } from "./BmdExportTypes";
export declare namespace CampaignGroupSettlementBattleBmdExportTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _bmdExportType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get bmdExportType(): BmdExportTypes.Entry | undefined;
    }
}
export default CampaignGroupSettlementBattleBmdExportTypes;
