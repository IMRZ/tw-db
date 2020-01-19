
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipBasicSituationTypes {
  export const KEY = new CollectionKey("character_relationship_basic_situation_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterRelationshipBasicSituationTypes;
