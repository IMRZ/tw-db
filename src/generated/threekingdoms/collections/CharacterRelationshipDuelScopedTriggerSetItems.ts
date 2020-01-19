
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipDuelScopedTriggerSets } from "./CharacterRelationshipDuelScopedTriggerSets";
import { CharacterRelationshipDuelParticipantScopes } from "./CharacterRelationshipDuelParticipantScopes";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace CharacterRelationshipDuelScopedTriggerSetItems {
  export const KEY = new CollectionKey("character_relationship_duel_scoped_trigger_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _duelScopedTriggerSet: string;
    readonly _from: string;
    readonly _to: string;
    readonly _triggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._duelScopedTriggerSet = values["duel_scoped_trigger_set"];
      this._from = values["from"];
      this._to = values["to"];
      this._triggers = values["triggers"];
    }
    
    get duelScopedTriggerSet(): CharacterRelationshipDuelScopedTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipDuelScopedTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipDuelScopedTriggerSets.KEY, CharacterRelationshipDuelScopedTriggerSets.Entry);
      return collection.find(entry => entry.key === this._duelScopedTriggerSet);
    }
    
    get from(): CharacterRelationshipDuelParticipantScopes.Entry | undefined {
      const collection = <CharacterRelationshipDuelParticipantScopes.Entry[]>this.collectionCache.getCollection(CharacterRelationshipDuelParticipantScopes.KEY, CharacterRelationshipDuelParticipantScopes.Entry);
      return collection.find(entry => entry.key === this._from);
    }
    
    get to(): CharacterRelationshipDuelParticipantScopes.Entry | undefined {
      const collection = <CharacterRelationshipDuelParticipantScopes.Entry[]>this.collectionCache.getCollection(CharacterRelationshipDuelParticipantScopes.KEY, CharacterRelationshipDuelParticipantScopes.Entry);
      return collection.find(entry => entry.key === this._to);
    }
    
    get triggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._triggers);
    }
  }
}

export default CharacterRelationshipDuelScopedTriggerSetItems;
