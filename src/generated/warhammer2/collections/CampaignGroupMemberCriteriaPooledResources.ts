
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PooledResources } from "./PooledResources";

export namespace CampaignGroupMemberCriteriaPooledResources {
  export const KEY = new CollectionKey("campaign_group_member_criteria_pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _pooledResource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._pooledResource = values["pooled_resource"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
  }
}

export default CampaignGroupMemberCriteriaPooledResources;
