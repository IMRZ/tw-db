
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { Factions } from "./Factions";
import { PastExperienceReasons } from "./PastExperienceReasons";

export namespace CharacterCreatedPastExperiences {
  export const KEY = new CollectionKey("character_created_past_experiences");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sourceTemplate: string;
    readonly _targetFaction: string;
    readonly _memory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sourceTemplate = values["source_template"];
      this._targetFaction = values["target_faction"];
      this._memory = values["memory"];
    }
    
    get sourceTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._sourceTemplate);
    }
    
    get targetFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._targetFaction);
    }
    
    get memory(): PastExperienceReasons.Entry | undefined {
      const collection = <PastExperienceReasons.Entry[]>this.collectionCache.getCollection(PastExperienceReasons.KEY, PastExperienceReasons.Entry);
      return collection.find(entry => entry.key === this._memory);
    }
  }
}

export default CharacterCreatedPastExperiences;
