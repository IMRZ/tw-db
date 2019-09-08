import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignGroupMemberCriteriaCampaigns {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCampaigns;
