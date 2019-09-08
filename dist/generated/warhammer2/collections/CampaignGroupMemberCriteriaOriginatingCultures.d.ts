import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Cultures } from "./Cultures";
export declare namespace CampaignGroupMemberCriteriaOriginatingCultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _culture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaOriginatingCultures;
