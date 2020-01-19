
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace StartPosCharacterRelationshipTriggers {
  export const KEY = new CollectionKey("start_pos_character_relationship_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _source: number;
    readonly _target: number;
    readonly _triggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._source = values["source"];
      this._target = values["target"];
      this._triggers = values["triggers"];
    }
    
    get source(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._source);
    }
    
    get target(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._target);
    }
    
    get triggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._triggers);
    }
  }
}

export default StartPosCharacterRelationshipTriggers;
