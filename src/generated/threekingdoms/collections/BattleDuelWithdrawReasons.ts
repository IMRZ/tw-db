
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleDuelWithdrawReasons {
  export const KEY = new CollectionKey("battle_duel_withdraw_reasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleDuelWithdrawReasons;
