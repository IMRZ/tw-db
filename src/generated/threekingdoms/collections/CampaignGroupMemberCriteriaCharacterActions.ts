
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignCharacterActions } from "./CampaignCharacterActions";

export namespace CampaignGroupMemberCriteriaCharacterActions {
  export const KEY = new CollectionKey("campaign_group_member_criteria_character_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _action: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._action = values["action"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get action(): CampaignCharacterActions.Entry | undefined {
      const collection = <CampaignCharacterActions.Entry[]>this.collectionCache.getCollection(CampaignCharacterActions.KEY, CampaignCharacterActions.Entry);
      return collection.find(entry => entry.action === this._action);
    }
  }
}

export default CampaignGroupMemberCriteriaCharacterActions;
