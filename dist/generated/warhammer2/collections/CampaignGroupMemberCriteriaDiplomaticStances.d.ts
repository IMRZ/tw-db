import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Stances } from "./Stances";
export declare namespace CampaignGroupMemberCriteriaDiplomaticStances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _stance: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get stance(): Stances.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaDiplomaticStances;
