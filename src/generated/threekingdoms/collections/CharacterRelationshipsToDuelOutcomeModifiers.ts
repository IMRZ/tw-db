
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";

export namespace CharacterRelationshipsToDuelOutcomeModifiers {
  export const KEY = new CollectionKey("character_relationships_to_duel_outcome_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _relationshipKey: string;
    readonly spareKillModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._relationshipKey = values["relationship_key"];
      this.spareKillModifier = values["spare_kill_modifier"];
    }
    
    get relationshipKey(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationshipKey);
    }
  }
}

export default CharacterRelationshipsToDuelOutcomeModifiers;
