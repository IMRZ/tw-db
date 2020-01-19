
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CaptiveOptionContexts } from "./CaptiveOptionContexts";

export namespace CampaignGroupMemberCriteriaCaptiveOptionContexts {
  export const KEY = new CollectionKey("campaign_group_member_criteria_captive_option_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._value = values["value"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get value(): CaptiveOptionContexts.Entry | undefined {
      const collection = <CaptiveOptionContexts.Entry[]>this.collectionCache.getCollection(CaptiveOptionContexts.KEY, CaptiveOptionContexts.Entry);
      return collection.find(entry => entry.key === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaCaptiveOptionContexts;
