
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PlayerGameDifficultyTypes {
  export const KEY = new CollectionKey("player_game_difficulty_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly difficultyType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.difficultyType = values["difficulty_type"];
    }
    
  }
}

export default PlayerGameDifficultyTypes;
