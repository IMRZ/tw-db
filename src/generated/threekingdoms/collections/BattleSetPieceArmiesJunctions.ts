
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieces } from "./BattleSetPieces";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";

export namespace BattleSetPieceArmiesJunctions {
  export const KEY = new CollectionKey("battle_set_piece_armies_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleName: string;
    readonly _armyName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleName = values["battle_name"];
      this._armyName = values["army_name"];
    }
    
    get battleName(): BattleSetPieces.Entry | undefined {
      const collection = <BattleSetPieces.Entry[]>this.collectionCache.getCollection(BattleSetPieces.KEY, BattleSetPieces.Entry);
      return collection.find(entry => entry.battleName === this._battleName);
    }
    
    get armyName(): BattleSetPieceArmies.Entry | undefined {
      const collection = <BattleSetPieceArmies.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmies.KEY, BattleSetPieceArmies.Entry);
      return collection.find(entry => entry.armyName === this._armyName);
    }
  }
}

export default BattleSetPieceArmiesJunctions;
