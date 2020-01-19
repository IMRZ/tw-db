
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterAttributeSets {
  export const KEY = new CollectionKey("character_attribute_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly setName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.setName = values["set_name"];
    }
    
  }
}

export default CharacterAttributeSets;
