
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { ActionResults } from "./ActionResults";

export namespace CampaignGroupMemberCriteriaActionResults {
  export const KEY = new CollectionKey("campaign_group_member_criteria_action_results");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _actionResult: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._actionResult = values["action_result"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get actionResult(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._actionResult);
    }
  }
}

export default CampaignGroupMemberCriteriaActionResults;
