
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PoliticalActions } from "./PoliticalActions";

export namespace CampaignGroupMemberCriteriaPoliticalActions {
  export const KEY = new CollectionKey("campaign_group_member_criteria_political_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _politicalAction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._politicalAction = values["political_action"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get politicalAction(): PoliticalActions.Entry | undefined {
      const collection = <PoliticalActions.Entry[]>this.collectionCache.getCollection(PoliticalActions.KEY, PoliticalActions.Entry);
      return collection.find(entry => entry.politicalActionKey === this._politicalAction);
    }
  }
}

export default CampaignGroupMemberCriteriaPoliticalActions;
