
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipCaps {
  export const KEY = new CollectionKey("character_relationship_caps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly cap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.cap = values["cap"];
    }
    
  }
}

export default CharacterRelationshipCaps;
