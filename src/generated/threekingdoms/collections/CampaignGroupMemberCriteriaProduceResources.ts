
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Resources } from "./Resources";

export namespace CampaignGroupMemberCriteriaProduceResources {
  export const KEY = new CollectionKey("campaign_group_member_criteria_produce_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _resource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._resource = values["resource"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get resource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
  }
}

export default CampaignGroupMemberCriteriaProduceResources;
