
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterRelationshipSituationEffectSets } from "./CharacterRelationshipSituationEffectSets";

export namespace CampaignGroupCharacterRelationshipDiplomaticSituationEffects {
  export const KEY = new CollectionKey("campaign_group_character_relationship_diplomatic_situation_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _effectSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._effectSet = values["effect_set"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get effectSet(): CharacterRelationshipSituationEffectSets.Entry | undefined {
      const collection = <CharacterRelationshipSituationEffectSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipSituationEffectSets.KEY, CharacterRelationshipSituationEffectSets.Entry);
      return collection.find(entry => entry.key === this._effectSet);
    }
  }
}

export default CampaignGroupCharacterRelationshipDiplomaticSituationEffects;
