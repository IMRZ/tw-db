
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerConditionSets } from "./CharacterRelationshipTriggerConditionSets";
import { Ceos } from "./Ceos";

export namespace CharacterRelationshipTriggerConditionRequiredCeos {
  export const KEY = new CollectionKey("character_relationship_trigger_condition_required_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _conditionSet: string;
    readonly _requiredCeo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._conditionSet = values["condition_set"];
      this._requiredCeo = values["required_ceo"];
    }
    
    get conditionSet(): CharacterRelationshipTriggerConditionSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerConditionSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerConditionSets.KEY, CharacterRelationshipTriggerConditionSets.Entry);
      return collection.find(entry => entry.key === this._conditionSet);
    }
    
    get requiredCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._requiredCeo);
    }
  }
}

export default CharacterRelationshipTriggerConditionRequiredCeos;
