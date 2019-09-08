import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Genders } from "./Genders";
export declare namespace CampaignGroupMemberCriteriaActorGenders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _gender: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaActorGenders;
