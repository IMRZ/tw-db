
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace CampaignGroupMemberCriteriaAgentSubtypes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_agent_subtypes");

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
    
    get value(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaAgentSubtypes;
