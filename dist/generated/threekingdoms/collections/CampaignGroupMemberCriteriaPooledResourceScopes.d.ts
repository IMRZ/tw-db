import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PooledResourceScopes } from "./PooledResourceScopes";
export declare namespace CampaignGroupMemberCriteriaPooledResourceScopes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _scope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get scope(): PooledResourceScopes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaPooledResourceScopes;
