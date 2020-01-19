import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
export declare namespace CampaignGroupMemberCriteriaGroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): CampaignGroundTypes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaGroundTypes;
