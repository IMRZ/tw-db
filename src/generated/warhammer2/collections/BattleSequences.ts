
import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";

export namespace BattleSequences {
  export const KEY = new CollectionKey("battle_sequences");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battle: string;
    readonly unlockOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battle = values["battle"];
      this.unlockOrder = values["unlock_order"];
    }
    
    get battle(): Battles.Entry | undefined {
      const collection = <Battles.Entry[]>this.collectionCache.getCollection(Battles.KEY, Battles.Entry);
      return collection.find(entry => entry.key === this._battle);
    }
  }
}

export default BattleSequences;
