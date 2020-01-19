import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignSeaRegionControlStatuses } from "./CampaignSeaRegionControlStatuses";
export declare namespace CampaignGroupMemberCriteriaSeaRegionControlStatuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _seaRegionControlStatus: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get seaRegionControlStatus(): CampaignSeaRegionControlStatuses.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaSeaRegionControlStatuses;
