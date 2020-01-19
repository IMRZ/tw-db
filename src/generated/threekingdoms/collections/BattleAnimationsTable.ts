
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSkeletons } from "./BattleSkeletons";
import { TexcExpansions } from "./TexcExpansions";

export namespace BattleAnimationsTable {
  export const KEY = new CollectionKey("battle_animations_table");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _skeleton: string;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._skeleton = values["skeleton"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get skeleton(): BattleSkeletons.Entry | undefined {
      const collection = <BattleSkeletons.Entry[]>this.collectionCache.getCollection(BattleSkeletons.KEY, BattleSkeletons.Entry);
      return collection.find(entry => entry.name === this._skeleton);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default BattleAnimationsTable;
