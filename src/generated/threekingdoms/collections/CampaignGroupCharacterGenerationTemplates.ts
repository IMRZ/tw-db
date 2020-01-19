
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";

export namespace CampaignGroupCharacterGenerationTemplates {
  export const KEY = new CollectionKey("campaign_group_character_generation_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _characterGenerationTemplate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._characterGenerationTemplate = values["character_generation_template"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._characterGenerationTemplate);
    }
  }
}

export default CampaignGroupCharacterGenerationTemplates;
