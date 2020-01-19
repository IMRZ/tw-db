
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterDeathDistributions {
  export const KEY = new CollectionKey("character_death_distributions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterDeathDistributions;
