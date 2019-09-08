
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiseasesGenerationChance {
  export const KEY = new CollectionKey("diseases_generation_chance");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _disease: any;
    readonly _continent: any;
    readonly baseGenerationChance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._disease = values["disease"];
      this._continent = values["continent"];
      this.baseGenerationChance = values["base_generation_chance"];
    }
    
  }
}

export default DiseasesGenerationChance;
