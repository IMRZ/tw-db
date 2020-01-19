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
        get member(): CampaignGroupMembers.Entry | undefined;
        get gender(): Genders.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaActorGenders;
