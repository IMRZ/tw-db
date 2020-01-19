import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Regions } from "./Regions";
export declare namespace CampaignGroupMemberCriteriaRegions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _region: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get region(): Regions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaRegions;
