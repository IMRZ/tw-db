import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
export declare namespace CampaignGroupMemberCriteriaOnSeas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly onSea: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaOnSeas;
