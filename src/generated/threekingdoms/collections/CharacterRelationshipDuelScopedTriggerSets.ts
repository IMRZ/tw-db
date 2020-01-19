
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipDuelScopedTriggerSets {
  export const KEY = new CollectionKey("character_relationship_duel_scoped_trigger_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterRelationshipDuelScopedTriggerSets;
