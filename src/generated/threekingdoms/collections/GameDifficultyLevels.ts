
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GameDifficultyLevels {
  export const KEY = new CollectionKey("game_difficulty_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly level: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.level = values["level"];
    }
    
  }
}

export default GameDifficultyLevels;
