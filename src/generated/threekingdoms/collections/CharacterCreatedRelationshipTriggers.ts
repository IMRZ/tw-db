
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace CharacterCreatedRelationshipTriggers {
  export const KEY = new CollectionKey("character_created_relationship_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sourceTemplate: string;
    readonly _targetTemplate: string;
    readonly _triggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sourceTemplate = values["source_template"];
      this._targetTemplate = values["target_template"];
      this._triggers = values["triggers"];
    }
    
    get sourceTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._sourceTemplate);
    }
    
    get targetTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._targetTemplate);
    }
    
    get triggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._triggers);
    }
  }
}

export default CharacterCreatedRelationshipTriggers;
