
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AutoresolverDifficultyLevelEnums {
  export const KEY = new CollectionKey("autoresolver_difficulty_level_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AutoresolverDifficultyLevelEnums;
