import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Resources } from "./Resources";
export declare namespace CampaignGroupMemberCriteriaProduceResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _resource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get resource(): Resources.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaProduceResources;
