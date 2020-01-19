import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapTooltipStatuses } from "./CampaignMapTooltipStatuses";
export declare namespace CampaignMapTooltipStatusTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _status: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get status(): CampaignMapTooltipStatuses.Entry | undefined;
    }
}
export default CampaignMapTooltipStatusTypes;
