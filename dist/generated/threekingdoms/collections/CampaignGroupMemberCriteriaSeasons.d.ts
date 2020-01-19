import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Seasons } from "./Seasons";
export declare namespace CampaignGroupMemberCriteriaSeasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): Seasons.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaSeasons;
