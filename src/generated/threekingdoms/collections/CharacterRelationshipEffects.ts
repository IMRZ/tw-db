
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipEffects {
  export const KEY = new CollectionKey("character_relationship_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: number;
    readonly duration: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
      this.duration = values["duration"];
    }
    
  }
}

export default CharacterRelationshipEffects;
