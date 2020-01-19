
import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionOutcomes } from "./CaptiveOptionOutcomes";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
import { CaptiveOptionEffectSets } from "./CaptiveOptionEffectSets";
import { AudioUiCategories } from "./AudioUiCategories";

export namespace CaptiveOptions {
  export const KEY = new CollectionKey("captive_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _outcome: string;
    readonly _diplomacyEvent: string;
    readonly _relationshipTriggers: string;
    readonly _postOutcomeRelationshipTriggers: string;
    readonly _effectSet: string;
    readonly localisedOptionText: string;
    readonly stealCeo: boolean;
    readonly stealthWealth: boolean;
    readonly _soundCategoryKey: string;
    readonly voSoundEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._outcome = values["outcome"];
      this._diplomacyEvent = values["diplomacy_event"];
      this._relationshipTriggers = values["relationship_triggers"];
      this._postOutcomeRelationshipTriggers = values["post_outcome_relationship_triggers"];
      this._effectSet = values["effect_set"];
      this.localisedOptionText = values["localised_option_text"];
      this.stealCeo = !!values["steal_ceo"];
      this.stealthWealth = !!values["stealth_wealth"];
      this._soundCategoryKey = values["sound_category_key"];
      this.voSoundEvent = values["vo_sound_event"];
    }
    
    get outcome(): CaptiveOptionOutcomes.Entry | undefined {
      const collection = <CaptiveOptionOutcomes.Entry[]>this.collectionCache.getCollection(CaptiveOptionOutcomes.KEY, CaptiveOptionOutcomes.Entry);
      return collection.find(entry => entry.key === this._outcome);
    }
    
    get diplomacyEvent(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._diplomacyEvent);
    }
    
    get relationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._relationshipTriggers);
    }
    
    get postOutcomeRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._postOutcomeRelationshipTriggers);
    }
    
    get effectSet(): CaptiveOptionEffectSets.Entry | undefined {
      const collection = <CaptiveOptionEffectSets.Entry[]>this.collectionCache.getCollection(CaptiveOptionEffectSets.KEY, CaptiveOptionEffectSets.Entry);
      return collection.find(entry => entry.key === this._effectSet);
    }
    
    get soundCategoryKey(): AudioUiCategories.Entry | undefined {
      const collection = <AudioUiCategories.Entry[]>this.collectionCache.getCollection(AudioUiCategories.KEY, AudioUiCategories.Entry);
      return collection.find(entry => entry.key === this._soundCategoryKey);
    }
  }
}

export default CaptiveOptions;
