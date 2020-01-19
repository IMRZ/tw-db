
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";

export namespace BattleSetPieceArmiesSkillsJunctions {
  export const KEY = new CollectionKey("battle_set_piece_armies_skills_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _armyName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._armyName = values["army_name"];
    }
    
    get armyName(): BattleSetPieceArmies.Entry | undefined {
      const collection = <BattleSetPieceArmies.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmies.KEY, BattleSetPieceArmies.Entry);
      return collection.find(entry => entry.armyName === this._armyName);
    }
  }
}

export default BattleSetPieceArmiesSkillsJunctions;
