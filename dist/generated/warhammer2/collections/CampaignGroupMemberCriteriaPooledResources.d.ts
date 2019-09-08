import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PooledResources } from "./PooledResources";
export declare namespace CampaignGroupMemberCriteriaPooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _pooledResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly pooledResource: PooledResources.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaPooledResources;
