
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { BattleSetPieces } from "./BattleSetPieces";

export namespace LoadingScreenQuotesToQuestBattles {
  export const KEY = new CollectionKey("loading_screen_quotes_to_quest_battles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _quote: string;
    readonly _questBattle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._quote = values["quote"];
      this._questBattle = values["quest_battle"];
    }
    
    get quote(): LoadingScreenQuotes.Entry | undefined {
      const collection = <LoadingScreenQuotes.Entry[]>this.collectionCache.getCollection(LoadingScreenQuotes.KEY, LoadingScreenQuotes.Entry);
      return collection.find(entry => entry.key === this._quote);
    }
    
    get questBattle(): BattleSetPieces.Entry | undefined {
      const collection = <BattleSetPieces.Entry[]>this.collectionCache.getCollection(BattleSetPieces.KEY, BattleSetPieces.Entry);
      return collection.find(entry => entry.battleName === this._questBattle);
    }
  }
}

export default LoadingScreenQuotesToQuestBattles;
