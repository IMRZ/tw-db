import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CampaignGroupMemberCriteriaSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaSubcultures;
