
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PastExperienceMemoryTypes {
  export const KEY = new CollectionKey("past_experience_memory_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PastExperienceMemoryTypes;
