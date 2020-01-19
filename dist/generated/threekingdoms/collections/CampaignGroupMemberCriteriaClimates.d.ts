import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Climates } from "./Climates";
export declare namespace CampaignGroupMemberCriteriaClimates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): Climates.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaClimates;
