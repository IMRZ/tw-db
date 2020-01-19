import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { FactionResourceIds } from "./FactionResourceIds";
export declare namespace CampaignGroupMemberCriteriaFactionResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): FactionResourceIds.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaFactionResources;
