
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipDuelParticipantScopes {
  export const KEY = new CollectionKey("character_relationship_duel_participant_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterRelationshipDuelParticipantScopes;
