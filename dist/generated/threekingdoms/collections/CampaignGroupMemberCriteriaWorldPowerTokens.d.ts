import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { WorldPowerTokens } from "./WorldPowerTokens";
import { CampaignGroupMemberCriteriaWorldPowerTokenContexts } from "./CampaignGroupMemberCriteriaWorldPowerTokenContexts";
export declare namespace CampaignGroupMemberCriteriaWorldPowerTokens {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _token: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get token(): WorldPowerTokens.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaWorldPowerTokenContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaWorldPowerTokens;
