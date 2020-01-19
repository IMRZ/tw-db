import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { ActionResults } from "./ActionResults";
export declare namespace CampaignGroupMemberCriteriaActionResults {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _actionResult: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get actionResult(): ActionResults.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaActionResults;
