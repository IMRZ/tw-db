import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Religions } from "./Religions";
import { CampaignGroupMemberCriteriaReligionContexts } from "./CampaignGroupMemberCriteriaReligionContexts";
export declare namespace CampaignGroupMemberCriteriaReligions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _religion: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get religion(): Religions.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaReligionContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaReligions;
