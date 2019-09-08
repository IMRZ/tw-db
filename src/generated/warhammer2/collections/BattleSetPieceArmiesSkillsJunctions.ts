
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { Ancillaries } from "./Ancillaries";

export namespace BattleSetPieceArmiesSkillsJunctions {
  export const KEY = new CollectionKey("battle_set_piece_armies_skills_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _armyName: string;
    readonly _armySkill: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._armyName = values["army_name"];
      this._armySkill = values["army_skill"];
    }
    
    get armyName(): BattleSetPieceArmies.Entry | undefined {
      const collection = <BattleSetPieceArmies.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmies.KEY, BattleSetPieceArmies.Entry);
      return collection.find(entry => entry.armyName === this._armyName);
    }
    
    get armySkill(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._armySkill);
    }
  }
}

export default BattleSetPieceArmiesSkillsJunctions;
