
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipOpinionTypes {
  export const KEY = new CollectionKey("character_relationship_opinion_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CharacterRelationshipOpinionTypes;
