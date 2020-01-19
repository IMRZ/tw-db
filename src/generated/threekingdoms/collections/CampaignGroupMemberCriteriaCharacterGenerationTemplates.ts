
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts } from "./CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";

export namespace CampaignGroupMemberCriteriaCharacterGenerationTemplates {
  export const KEY = new CollectionKey("campaign_group_member_criteria_character_generation_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _context: string;
    readonly _value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._context = values["context"];
      this._value = values["value"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get context(): CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts.KEY, CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
    
    get value(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaCharacterGenerationTemplates;
