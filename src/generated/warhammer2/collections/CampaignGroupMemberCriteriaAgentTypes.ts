
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Agents } from "./Agents";

export namespace CampaignGroupMemberCriteriaAgentTypes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_agent_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _agentType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._agentType = values["agent_type"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
  }
}

export default CampaignGroupMemberCriteriaAgentTypes;
