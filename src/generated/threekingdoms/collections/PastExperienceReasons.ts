
import { CollectionCache, CollectionKey } from "../../../common";
import { PastExperienceMemoryTypes } from "./PastExperienceMemoryTypes";

export namespace PastExperienceReasons {
  export const KEY = new CollectionKey("past_experience_reasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;
    readonly _memoryType: string;
    readonly priority: number;
    readonly chanceOfMemory: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
      this._memoryType = values["memory_type"];
      this.priority = values["priority"];
      this.chanceOfMemory = values["chance_of_memory"];
    }
    
    get memoryType(): PastExperienceMemoryTypes.Entry | undefined {
      const collection = <PastExperienceMemoryTypes.Entry[]>this.collectionCache.getCollection(PastExperienceMemoryTypes.KEY, PastExperienceMemoryTypes.Entry);
      return collection.find(entry => entry.key === this._memoryType);
    }
  }
}

export default PastExperienceReasons;
