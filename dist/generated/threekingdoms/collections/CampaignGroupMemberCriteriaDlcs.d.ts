import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Pdlc } from "./Pdlc";
import { CampaignGroupMemberCriteriaDlcContexts } from "./CampaignGroupMemberCriteriaDlcContexts";
export declare namespace CampaignGroupMemberCriteriaDlcs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _dlc: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get dlc(): Pdlc.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaDlcContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaDlcs;
