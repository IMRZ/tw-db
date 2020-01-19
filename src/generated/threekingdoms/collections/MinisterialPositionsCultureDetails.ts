
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { MinisterialPositionsStrings } from "./MinisterialPositionsStrings";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
import { PastExperienceReasons } from "./PastExperienceReasons";
import { UiMinisterialPositions } from "./UiMinisterialPositions";
import { Campaigns } from "./Campaigns";

export namespace MinisterialPositionsCultureDetails {
  export const KEY = new CollectionKey("ministerial_positions_culture_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ministerialPositionCulturalVariant: string;
    readonly _ministerialPositionKey: string;
    readonly _localisedStringKey: string;
    readonly _cultureKey: string;
    readonly _subcultureKey: string;
    readonly _factionKey: string;
    readonly xCoordinate: number;
    readonly yCoordinate: number;
    readonly _localisedDescriptionKey: string;
    readonly allowCharacterToFactionwideMinisterialEffects: boolean;
    readonly _startOfRoundRelationshipTriggers: string;
    readonly _appointedRelationshipTriggers: string;
    readonly _recalledRelationshipTriggers: string;
    readonly _defectionPastExperienceReason: string;
    readonly allowFamilyMembersOnly: boolean;
    readonly _uiRecord: string;
    readonly _campaignKey: string;
    readonly allowCharacterToFactionwideMinisterialAlternativeEffects: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ministerialPositionCulturalVariant = values["ministerial_position_cultural_variant"];
      this._ministerialPositionKey = values["ministerial_position_key"];
      this._localisedStringKey = values["localised_string_key"];
      this._cultureKey = values["culture_key"];
      this._subcultureKey = values["subculture_key"];
      this._factionKey = values["faction_key"];
      this.xCoordinate = values["x_coordinate"];
      this.yCoordinate = values["y_coordinate"];
      this._localisedDescriptionKey = values["localised_description_key"];
      this.allowCharacterToFactionwideMinisterialEffects = !!values["allow_character_to_factionwide_ministerial_effects"];
      this._startOfRoundRelationshipTriggers = values["start_of_round_relationship_triggers"];
      this._appointedRelationshipTriggers = values["appointed_relationship_triggers"];
      this._recalledRelationshipTriggers = values["recalled_relationship_triggers"];
      this._defectionPastExperienceReason = values["defection_past_experience_reason"];
      this.allowFamilyMembersOnly = !!values["allow_family_members_only"];
      this._uiRecord = values["ui_record"];
      this._campaignKey = values["campaign_key"];
      this.allowCharacterToFactionwideMinisterialAlternativeEffects = !!values["allow_character_to_factionwide_ministerial_alternative_effects"];
    }
    
    get ministerialPositionKey(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPositionKey);
    }
    
    get localisedStringKey(): MinisterialPositionsStrings.Entry | undefined {
      const collection = <MinisterialPositionsStrings.Entry[]>this.collectionCache.getCollection(MinisterialPositionsStrings.KEY, MinisterialPositionsStrings.Entry);
      return collection.find(entry => entry.key === this._localisedStringKey);
    }
    
    get cultureKey(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._cultureKey);
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get localisedDescriptionKey(): MinisterialPositionsStrings.Entry | undefined {
      const collection = <MinisterialPositionsStrings.Entry[]>this.collectionCache.getCollection(MinisterialPositionsStrings.KEY, MinisterialPositionsStrings.Entry);
      return collection.find(entry => entry.key === this._localisedDescriptionKey);
    }
    
    get startOfRoundRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._startOfRoundRelationshipTriggers);
    }
    
    get appointedRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._appointedRelationshipTriggers);
    }
    
    get recalledRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._recalledRelationshipTriggers);
    }
    
    get defectionPastExperienceReason(): PastExperienceReasons.Entry | undefined {
      const collection = <PastExperienceReasons.Entry[]>this.collectionCache.getCollection(PastExperienceReasons.KEY, PastExperienceReasons.Entry);
      return collection.find(entry => entry.key === this._defectionPastExperienceReason);
    }
    
    get uiRecord(): UiMinisterialPositions.Entry | undefined {
      const collection = <UiMinisterialPositions.Entry[]>this.collectionCache.getCollection(UiMinisterialPositions.KEY, UiMinisterialPositions.Entry);
      return collection.find(entry => entry.key === this._uiRecord);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default MinisterialPositionsCultureDetails;
