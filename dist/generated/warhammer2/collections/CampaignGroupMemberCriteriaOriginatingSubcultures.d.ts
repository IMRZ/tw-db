import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CampaignGroupMemberCriteriaOriginatingSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaOriginatingSubcultures;
