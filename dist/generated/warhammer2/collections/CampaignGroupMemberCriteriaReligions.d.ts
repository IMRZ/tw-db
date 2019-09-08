import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Religions } from "./Religions";
export declare namespace CampaignGroupMemberCriteriaReligions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _religion: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly religion: Religions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaReligions;
