import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PoliticalActions } from "./PoliticalActions";
export declare namespace CampaignGroupMemberCriteriaPoliticalActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _politicalAction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get politicalAction(): PoliticalActions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaPoliticalActions;
