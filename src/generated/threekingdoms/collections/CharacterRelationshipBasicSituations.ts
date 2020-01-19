
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
import { CharacterRelationshipBasicSituationTypes } from "./CharacterRelationshipBasicSituationTypes";
import { CharacterRelationshipSituationEffectSets } from "./CharacterRelationshipSituationEffectSets";

export namespace CharacterRelationshipBasicSituations {
  export const KEY = new CollectionKey("character_relationship_basic_situations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _relationship: string;
    readonly _type: string;
    readonly _effects: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._relationship = values["relationship"];
      this._type = values["type"];
      this._effects = values["effects"];
    }
    
    get relationship(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationship);
    }
    
    get type(): CharacterRelationshipBasicSituationTypes.Entry | undefined {
      const collection = <CharacterRelationshipBasicSituationTypes.Entry[]>this.collectionCache.getCollection(CharacterRelationshipBasicSituationTypes.KEY, CharacterRelationshipBasicSituationTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get effects(): CharacterRelationshipSituationEffectSets.Entry | undefined {
      const collection = <CharacterRelationshipSituationEffectSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipSituationEffectSets.KEY, CharacterRelationshipSituationEffectSets.Entry);
      return collection.find(entry => entry.key === this._effects);
    }
  }
}

export default CharacterRelationshipBasicSituations;
