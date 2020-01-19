
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerConditionSets } from "./CharacterRelationshipTriggerConditionSets";
import { CharacterRelationshipMemories } from "./CharacterRelationshipMemories";

export namespace CharacterRelationshipTriggers {
  export const KEY = new CollectionKey("character_relationship_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _conditions: string;
    readonly _memory: string;
    readonly memoryRelevancyDecayPerTurn: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._conditions = values["conditions"];
      this._memory = values["memory"];
      this.memoryRelevancyDecayPerTurn = values["memory_relevancy_decay_per_turn"];
    }
    
    get conditions(): CharacterRelationshipTriggerConditionSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerConditionSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerConditionSets.KEY, CharacterRelationshipTriggerConditionSets.Entry);
      return collection.find(entry => entry.key === this._conditions);
    }
    
    get memory(): CharacterRelationshipMemories.Entry | undefined {
      const collection = <CharacterRelationshipMemories.Entry[]>this.collectionCache.getCollection(CharacterRelationshipMemories.KEY, CharacterRelationshipMemories.Entry);
      return collection.find(entry => entry.key === this._memory);
    }
  }
}

export default CharacterRelationshipTriggers;
