import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
export declare namespace CampaignGroupMemberCriteriaAttritionTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _attritionType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly attritionType: CampaignMapAttritions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaAttritionTypes;
