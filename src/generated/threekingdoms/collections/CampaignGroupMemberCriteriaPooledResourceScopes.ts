
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PooledResourceScopes } from "./PooledResourceScopes";

export namespace CampaignGroupMemberCriteriaPooledResourceScopes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_pooled_resource_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _scope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._scope = values["scope"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get scope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
  }
}

export default CampaignGroupMemberCriteriaPooledResourceScopes;
