
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CharacterRelationships } from "./CharacterRelationships";

export namespace CampaignGroupMemberCriteriaCharacterRelationships {
  export const KEY = new CollectionKey("campaign_group_member_criteria_character_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _relationship: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._relationship = values["relationship"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get relationship(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationship);
    }
  }
}

export default CampaignGroupMemberCriteriaCharacterRelationships;
