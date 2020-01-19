
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
import { CharacterRelationshipTriggers } from "./CharacterRelationshipTriggers";
import { CharacterRelationshipTriggerTargetTypes } from "./CharacterRelationshipTriggerTargetTypes";
import { CharacterRelationshipTriggerConditionSets } from "./CharacterRelationshipTriggerConditionSets";

export namespace CharacterRelationshipTriggerSetItems {
  export const KEY = new CollectionKey("character_relationship_trigger_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _trigger: string;
    readonly _target: string;
    readonly _senderToReceiverConditions: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._trigger = values["trigger"];
      this._target = values["target"];
      this._senderToReceiverConditions = values["sender_to_receiver_conditions"];
    }
    
    get set(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._set);
    }
    
    get trigger(): CharacterRelationshipTriggers.Entry | undefined {
      const collection = <CharacterRelationshipTriggers.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggers.KEY, CharacterRelationshipTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
    
    get target(): CharacterRelationshipTriggerTargetTypes.Entry | undefined {
      const collection = <CharacterRelationshipTriggerTargetTypes.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerTargetTypes.KEY, CharacterRelationshipTriggerTargetTypes.Entry);
      return collection.find(entry => entry.key === this._target);
    }
    
    get senderToReceiverConditions(): CharacterRelationshipTriggerConditionSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerConditionSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerConditionSets.KEY, CharacterRelationshipTriggerConditionSets.Entry);
      return collection.find(entry => entry.key === this._senderToReceiverConditions);
    }
  }
}

export default CharacterRelationshipTriggerSetItems;
