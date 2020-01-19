
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
import { MinisterialPositions } from "./MinisterialPositions";
import { Tristates } from "./Tristates";

export namespace CharacterRelationshipTriggerConditionSets {
  export const KEY = new CollectionKey("character_relationship_trigger_condition_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _relationship: string;
    readonly minCompatibility: number;
    readonly maxCompatibility: number;
    readonly _ministerialPosition: string;
    readonly _isEnemy: string;
    readonly _isImmediateFamily: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._relationship = values["relationship"];
      this.minCompatibility = values["min_compatibility"];
      this.maxCompatibility = values["max_compatibility"];
      this._ministerialPosition = values["ministerial_position"];
      this._isEnemy = values["is_enemy"];
      this._isImmediateFamily = values["is_immediate_family"];
    }
    
    get relationship(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationship);
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get isEnemy(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.key === this._isEnemy);
    }
    
    get isImmediateFamily(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.key === this._isImmediateFamily);
    }
  }
}

export default CharacterRelationshipTriggerConditionSets;
