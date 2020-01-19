
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleAiPersonalities {
  export const KEY = new CollectionKey("battle_ai_personalities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly personality: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.personality = values["personality"];
      this.priority = values["priority"];
    }
    
  }
}

export default BattleAiPersonalities;
