
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipScopes {
  export const KEY = new CollectionKey("character_relationship_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterRelationshipScopes;
